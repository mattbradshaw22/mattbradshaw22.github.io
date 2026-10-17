// Registers API endpoints for rescue animal data.

const express = require('express');
const router = express.Router();
const ctrlAnimals = require('../controllers/animals');
const authController = require("../controllers/authentication");
const jwt = require('jsonwebtoken'); // Enable JSON Web Tokens


// Method to authenticate our JWT
function authenticateJWT(req, res, next) {
    console.log('In middleware'); // comment out to remove console log
    
    const authHeader = req.headers['authorization'];
    console.log('Auth Header: ' + authHeader);  // comment out to remove console log

    if(authHeader == null)
    {
        console.log('Not enough tokens in Auth Header: ' + headers.length);
        return res.sendStatus(501);
    }

    const token = authHeader.split(' ')[1];
    console.log('Token: ' + token); // comment out to remove console log

    if(token == null)
    {
        console.log('Null Bearer Token');
        return res.sendStatus(401);
    }

    // console.log(process.env.JWT_SECRET);
    // console.log(jwt.decode(token));
    const verified = jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
        if(err)
        {
            return res.sendStatus(401).json('Token Validation Error!');
        }
        req.auth = verified; // Set the auth param to the decoded object
    });
    next(); // we need to continue or this will habg forever
}


// route for register endpoint
router
    .route("/register")
    .post(authController.register);

// Define Route for Login endpoint
router
    .route("/login")
    .post(authController.login);

/* GET animals list. 
* POST new animal */
router
    .route("/animals")
    .get(ctrlAnimals.animalsList)
    .post(authenticateJWT, ctrlAnimals.animalsAddAnimal);
    
/* GET animal by name. */
router
    .route('/animals/name/:name')
    .get(ctrlAnimals.animalsFindByName);

/* GET available animals using the user's entered ZIP code. */
router
    .route('/animals/nearby/:zip')
    .get(ctrlAnimals.animalsFindNearby);


/* GET animal by ID. */
router
    .route('/animals/:_id')
    .get(ctrlAnimals.animalsReadOne);


module.exports = router;
