var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query(
      'SELECT messages.id, messages.messageText, users.userName FROM messages left outer join users ON (users.id = messages.user_id) ', (err, results, fields) => {
        if (err) {
          console.log(err);
        } else {
          callback(null, results);
        }
        // console.log('result', results);
      });
  }, // a function which produces all the messages
  create: function (params, callback) {
    db.query(
      'INSERT INTO messages(messageText, timeCreated, room_id, user_id) VALUES (?, ?, (SELECT id FROM rooms WHERE roomname = ?), (SELECT id FROM users WHERE username = ?))', params,
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          callback(err, results);
        }
      });
  } // a function which can be used to insert a message into the database
};
