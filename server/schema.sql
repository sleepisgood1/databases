CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  roomName VARCHAR(50)
);

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  userName VARCHAR(50)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  messageText VARCHAR(50),
  timeCreated TIMESTAMP,
  room_id INTEGER NOT NULL,
  FOREIGN KEY(room_id)
  REFERENCES rooms(id),
  /*check if this way works if we havn't created rooms yet*/
  user_id INTEGER NOT NULL,
  FOREIGN KEY(user_id)
  REFERENCES users(id)
);

-- CREATE TABLE rooms (
--   id INTEGER PRIMARY KEY,
--   roomName TEXT,
-- );

-- CREATE TABLE users (
--   id INTEGER PRIMARY KEY,
--   userName TEXT,
-- );
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

