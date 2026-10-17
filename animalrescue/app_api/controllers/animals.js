// Handles API responses for rescue animal collection requests.

const mongoose = require('mongoose');
const Animal = require('../models/animals');
const Model = mongoose.model('animals');


// Converts degrees to radians for geographic calculations.
const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
};


// Calculates the distance in miles between two latitude/longitude points
// using the Haversine formula which google reccomended for comparing 
// coordinate locations.
const calculateDistanceMiles = (lat1, lon1, lat2, lon2) => {

    const earthRadiusMiles = 3958.8;

    const latitudeDifference = toRadians(lat2 - lat1);
    const longitudeDifference = toRadians(lon2 - lon1);

    const firstLatitude = toRadians(lat1);
    const secondLatitude = toRadians(lat2);

    const a =
        Math.sin(latitudeDifference / 2) *
        Math.sin(latitudeDifference / 2) +
        Math.cos(firstLatitude) *
        Math.cos(secondLatitude) *
        Math.sin(longitudeDifference / 2) *
        Math.sin(longitudeDifference / 2);

    const c = 2 * Math.atan2(
        Math.sqrt(a),
        Math.sqrt(1 - a)
    );

    return earthRadiusMiles * c;
};


// Assigns a match rank based on the animal's distance from the user.
const getDistanceRank = (distanceMiles) => {

    if (distanceMiles < 100) {
        return 5;
    }

    if (distanceMiles <= 250) {
        return 4;
    }

    if (distanceMiles <= 500) {
        return 3;
    }

    if (distanceMiles <= 1000) {
        return 2;
    }

    if (distanceMiles <= 2000) {
        return 1;
    }

    return 0;
};



// GET: /animals - lists all the animals
// regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const animalsList = async(req, res) => {
  const q = await Model
        .find({})  // no filter, return all records
        .exec();

        // Uncomment the following line to show results of query on the console
        // console.log(q);

    if (!q) 
        { // database returned no data
            return res
                .status(404)
                .json(err);

        } else { //  return resulting animal list
            return res
                .status(200)
                .json(q);
        }

};

// GET: /animals/:_id - lists a single animal record by its MongoDB _id
// regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const animalsReadOne = async(req, res) => {
    const q = await Model
        .find({'_id' : req.params._id})  // return single record 
        .exec();

        // uncomment the following line to show results of query on the console
        // console.log(q);

        if (!q)
        { // database returned no data
            return res
                .status(404)
                .json(err);

        } else { //  return resulting animal list
            return res
                .status(200)
                .json(q);
        }

};

// GET: /api/animals/name/:name
// lists a single animal record by its name
const animalsFindByName = async (req, res) => {
    try {
        const animal = await Model
            .findOne({ name: req.params.name })
            .collation({ locale: 'en', strength: 2 }) // case-insensitive search
            .exec();

        if (!animal) {
            return res.status(404).json({
                message: `Animal named "${req.params.name}" was not found.`
            });
        }

        return res.status(200).json(animal);

    } catch (err) {
        return res.status(500).json(err);
    }
};

// GET: /api/animals/nearby/:zip
// Converts a ZIP code to coordinates and returns
// all rescue animals that are currently not reserved.
const animalsFindNearby = async (req, res) => {
    try {
        const zip = req.params.zip.trim();

        // Validate that the user supplied a five-digit ZIP code.
        if (!/^\d{5}$/.test(zip)) {
            return res.status(400).json({
                message: 'Please enter a valid five-digit ZIP code.'
            });
        }

        // zipcodes-us is an ES module, so it is loaded dynamically
        // from this CommonJS Express controller.
        const zipcodesModule = await import('zipcodes-us');
        const zipcodes = zipcodesModule.default;
        // pass the ZIP code to the zipcodes-us library to get the coordinates
        const coordinates = zipcodes.findCoordinates(zip);

        if (!coordinates.isValid) {
            return res.status(400).json({
                message: `ZIP code "${zip}" was not found.`
            });
        }

        // Retrieve only animals that are currently available.
        const animals = await Model
            .find({ reserved: false })
            .lean()  // return plain JavaScript objects instead of Mongoose documents
            .exec();

        // Calculate the distance and rank for each available animal.
        const rankedAnimals = animals
            .map((animal) => {

                const distanceMiles = calculateDistanceMiles(
                    coordinates.latitude,
                    coordinates.longitude,
                    animal.acquisitionLocation.latitude,
                    animal.acquisitionLocation.longitude
                );

                const rank = getDistanceRank(distanceMiles);

                return {
                    ...animal,
                    distanceMiles: distanceMiles,
                    rank: rank
                };
            })

            // Animals more than 2,000 miles away receive rank 0
            // and are excluded from the results.
            .filter((animal) => animal.rank > 0)

            // Sort higher-ranked animals first.
            // If two animals have the same rank, the closer animal comes first.
            .sort((a, b) => {

                if (b.rank !== a.rank) {
                    return b.rank - a.rank;
                }

                return a.distanceMiles - b.distanceMiles;
            })

            // Give each sorted result a display position.
            .map((animal, index) => ({
                ...animal,
                distanceMiles: Number(animal.distanceMiles.toFixed(2)),  // round to two decimal places
                resultPosition: index + 1
            }));


        return res.status(200).json({
            zip: zip,

            userLocation: {
                latitude: coordinates.latitude,
                longitude: coordinates.longitude
            },

            resultCount: rankedAnimals.length,

            animals: rankedAnimals
        });

    } catch (err) {
        return res.status(500).json(err);
    }
};

// POST: /animals - adds a new animal record to the database
// regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const animalsAddAnimal = async(req, res) => {
    try {
        const animal = await Model.create({
            name: req.body.name,
            animalType: req.body.animalType,
            breed: req.body.breed,
            species: req.body.species,
            gender: req.body.gender,
            age: req.body.age,
            weight: req.body.weight,
            acquisitionDate: req.body.acquisitionDate,
            acquisitionLocation: {
                city: req.body.acquisitionLocation.city,
                state: req.body.acquisitionLocation.state,
                country: req.body.acquisitionLocation.country,
                latitude: req.body.acquisitionLocation.latitude,
                longitude: req.body.acquisitionLocation.longitude
            },
            trainingStatus: req.body.trainingStatus,
            reserved: req.body.reserved,
            graduationDate: req.body.graduationDate,
            description: req.body.description,
            imagePath: req.body.imagePath,
            tailLength: req.body.tailLength,
            height: req.body.height,
            bodyLength: req.body.bodyLength
        });
        return res.status(201).json(animal);
    } catch (err) {
        return res.status(400).json(err);
    }
};

module.exports = {
  animalsList,
  animalsReadOne,
  animalsAddAnimal,
  animalsFindByName,
  animalsFindNearby
};
