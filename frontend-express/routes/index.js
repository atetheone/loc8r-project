const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home page - Loc8r' });
});

// Locations page
router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview)


// Others page
router.get('/about', ctrlOthers.about);



module.exports = router;
