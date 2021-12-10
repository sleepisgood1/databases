var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, data)=>{
      if (err) {

      } else {
        res.json(data);
      }
    });
  },
  post: function (req, res) {
    var params = [req.body.username];
    models.users.create(params, (err, data)=>{
      if (err) {

      } else {
        res.sendStatus(200);
      }
    });
  }
};
