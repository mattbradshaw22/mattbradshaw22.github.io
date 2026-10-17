// Bring in the DB connection and Animal schema
const mongoose = require('./db');
const Animal = require('./animals');

// Read seed data from the JavaScript data file
const animals = require('../../data/animals');

// Delete existing records and add the seed data
const seedDB = async () => {
    await Animal.deleteMany({});
    await Animal.insertMany(animals);
};

// Close the MongoDB connection and exit
seedDB().then(async () => {
    console.log('Animal data seeded successfully');
    await mongoose.connection.close();
    process.exit(0);
}).catch(async err => {
    console.error('Animal seed failed:', err);
    await mongoose.connection.close();
    process.exit(1);
});
