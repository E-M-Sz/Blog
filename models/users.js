/* jshint esversion: 6 */
const mongoose = require('mongoose');

// Create Mongoose Shema
const Schema = mongoose.Schema;

const userDataSchema = new Schema({
  username: {type: String, required: true},
  description: String,
  skill: String
}, {collection: 'user-data'});

const UserData = mongoose.model('UserData', userDataSchema);

exports.getData = function (callback) {
  UserData.find()
    .then(function(doc) {
      callback(doc);
    });
};

exports.setData = function (values, callback) {
  console.log('setData: ' + values.username);
  const user = new UserData({
    username: values.username,
    description: values.description,
    skill: values.skill
  });
  user.save()
    .then(function(){
      callback();
    });
};

exports.deleteData = function (values, callback) {
  UserData.findByIdAndRemove(values, function(err){
    callback();
  });
};

exports.updateData = function (id, values, callback) {
  UserData.update({_id: id}, values, {upsert: false}, function(){
    callback();
  });
};
