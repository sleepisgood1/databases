var mysql = require('mysql2');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

// check out mysqltutorial.org/mysql-nodejs/connect/what do we do now lol

connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});

connection.connect(function(err) {
  if (err) {
    return console.log('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

//should query be inside connect or outside conect?

module.exports = connection;