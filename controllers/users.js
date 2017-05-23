/* jshint esversion: 6 */
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const Users = require('../models/users');

// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/get-data', (req, res) => {
  Users.getData(function(data) {
    // console.log('got data: '+data);
    res.render('users', {nav: 'users',items:data});
  });
});

router.get('/add-user', (req, res) => {
  res.render('add-user', {nav: 'addUser'});
});

router.post('/add-user',urlencodedParser, (req, res) => {
  Users.setData(req.body, function(data) {
    // console.log('got data: '+data);
    res.redirect('/get-data');
  });
});

router.delete('/delete-user/:id', (req, res) => {
  Users.deleteData(req.params.id, function(){
    console.log('Delteted entry: ' + req.params.id);
    // res.redirect('/get-data');
  });
  res.json('done');
});

router.put('/update-user',urlencodedParser, (req, res) => {
  console.log(req.body.username);
  // console.log('asd');
  // res.json('done');
  console.log(req.body.id);
  let data = {
    username: req.body.username,
    description: req.body.description,
    skill: req.body.skill
  };
  // TEST
  Users.updateData(req.body.id, data, function(){
    console.log('Updated entry ' + req.body.id);
  });
  res.json('done');
});

module.exports = router;
