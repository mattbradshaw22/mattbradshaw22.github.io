/**
 * animals.js
 *
 * Defines the Mongoose schemas and model for rescue animal records.
 * The Animal model represents dogs and monkeys stored in MongoDB
 * and includes general animal information, training status,
 * reservation status, and acquisition location data.
 *
 * The acquisition location is stored as a nested schema so that
 * city, state, country, latitude, and longitude remain grouped
 * together. The latitude and longitude values will also support
 * future distance-based animal search and ranking functionality.
 */

const mongoose = require('mongoose');


// Defines the geographic location associated with an animal record.
// Latitude and longitude will be used by the matching algorithm
// to calculate the animal's distance from the user.
const locationSchema = new mongoose.Schema({
    city: { type: String, required: true },
    state: { type: String },
    country: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
});

// Defines the structure and validation rules for animal documents
// stored in the MongoDB animals collection.
const animalSchema = new mongoose.Schema({

    name: { type: String, required: true },
    animalType: { type: String, enum: ['Dog', 'Monkey'], required: true },
    breed: { type: String, required: true },
    species: { type: String },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    weight: { type: Number, required: true },
    acquisitionDate: { type: Date, required: true },
    acquisitionLocation: { type: locationSchema, required: true },
    trainingStatus: { type: String, 
        enum: ['Intake', 'In Training', 'Phase 2', 'Phase 3', 'Phase 4', 'Completed', 'In Service'], 
        required: true },
    reserved: { type: Boolean, default: false },
    graduationDate: { type: Date },
    description: { type: String },

    // store public image path of the animal. 
    // new animals will have a placeholder 
    imagePath: { type: String },

    // Additional fields used by monkey records.
    // These are optional because dog records do not use them.
    tailLength: { type: Number },
    height: { type: Number },
    bodyLength: { type: Number }
});

// Registers the Animal model with Mongoose so API controllers
// can use it to create, read, update, and delete animal records.
const Animal = mongoose.model('animals', animalSchema);

module.exports = Animal;
