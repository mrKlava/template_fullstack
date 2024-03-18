CREATE TABLE users (
	user_id INT AUTO_INCREMENT PRIMARY KEY,
  firstname varchar(32) NOT NULL,
  lastname varchar(32) NOT NULL,
  hash varchar(255) NOT NULL
);