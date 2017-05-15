/* jshint esversion: 6 */
const express = require('express');
const router = express.Router();

// Use all other routes here
router.use(require('./users'));

// Index get route
router.get('/', (req, res) => {
  res.render('index', {nav: 'home'});
});

module.exports = router;
