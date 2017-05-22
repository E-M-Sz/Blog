/* jshint esversion: 6 */

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const config = require('./config');



// Use public folder for static assets
app.use(express.static(__dirname + '/public'));

// Set view engine
app.set('view engine', 'ejs');

// Use controllers
app.use(require('./controllers'));



// Connect to MongoDB
// MongoDB Atlas
mongoose.connect(config.mongodb);


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB connected');
});



// Start server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
