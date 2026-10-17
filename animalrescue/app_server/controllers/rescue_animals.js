// Handles rendering for the full rescue animal catalog page.

var animals = require('../../data/animals');

/* GET Rescue Animals page */
const rescue_animals = (req, res) => {
  res.render('rescue_animals', {
    title: 'See All Animals',
    all: true,
    animals,
    count: animals.length
  });
};

/* GET Find an Animal page */
const find = (req, res) => {
  res.render('find', {
    title: 'Find an Animal',
    find: true,
    animals,
    count: animals.length
  });
};

/* GET Animal Intake page */
const intake = (req, res) => {
  res.render('intake', {
    title: 'Animal Intake',
    intake: true
  });
};

module.exports = {
  rescue_animals,
  find,
  intake
};
