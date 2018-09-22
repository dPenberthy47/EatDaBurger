CREATE DATABASE burgers_db;

USE DATABASE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT;
    name VARCHAR(250) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
)