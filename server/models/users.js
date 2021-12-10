var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT * from users', (err, data)=>{
      if (err) {

      } else {
        callback(err, data);
      }
    });
  },
  create: function (params, callback) {
    db.query('INSERT INTO users(userName) VALUES (?)', (err, data)=>{
      callback(err, data);
    });
  }
};
