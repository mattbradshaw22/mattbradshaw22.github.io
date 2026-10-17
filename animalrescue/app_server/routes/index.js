// Connects the main public website routes to their controllers.

var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlAnimals = require('../controllers/rescue_animals');

/* GET home page. */
router.get('/', ctrlMain.index);

/* GET about page. */
router.get('/about', ctrlMain.about);

/* GET animal intake page. */
router.get('/animal-intake', ctrlAnimals.intake);

/* GET find an animal page. */
router.get('/find-an-animal', ctrlAnimals.find);

/* GET login page. */
router.get('/login', ctrlMain.login);

/* GET register page. */
router.get('/register', ctrlMain.register);

module.exports = router;
