var express = require('express');
var db = require('./db'); // index.js in db folder

// Middleware
var morgan = require('morgan'); // logger middleware
var cors = require('cors'); // helps deal with cors errors

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Set up our routes
app.use('/classes', router);

// app.get('/bibbidybibidiidybubah', (req, res)=>{
//   res.send('bibbidybibidiidybubah');
// });
// Serve the client files
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

