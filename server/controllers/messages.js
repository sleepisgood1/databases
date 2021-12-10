var models = require('../models');
// var Promise = require('bluebird');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((error, data) => {
      if (error) {

      } else {
        res.send(data);
      }
    });
    //get all messages from database using models
    //send all the messages back to frontend(reqester)
    // res.send('getting messages');
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log(req.body);
    //id, messageText, timeCreated, room_id, username
    var params = [req.body.messageText, req.body.timeCreated, req.body.roomname, req.body.username];
    models.messages.create(params, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        res.sendStatus(201);
      }
    });
  } // a function which handles posting a message to the database
};
