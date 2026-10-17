// Handles rendering for public website pages including home, about, intake, and find.

var animals = require('../../data/animals');

/* GET Homepage */
const index = (req, res) => {
  const reservedAnimals = animals.filter(animal => animal.reserved);
  const featuredAnimal = reservedAnimals[Math.floor(Math.random() * reservedAnimals.length)] || animals[0];

  res.render('index', {
    title: 'Home',
    home: true,
    featuredAnimals: [featuredAnimal]
  });
};

/* GET About page */
const about = (req, res) => {
  res.render('about', { title: 'About', about: true });
};

/* GET Login page */
const login = (req, res) => {
    res.render('login-angular', {
        title: 'Login'
    });
};

/* GET Register page */
const register = (req, res) => {
    res.render('register', {
        title: 'Register'
    });
};
module.exports = {
  index,
  about,
  login,
  register
};
