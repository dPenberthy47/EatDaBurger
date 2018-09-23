CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL,
    devoured boolean not null default 0,
    PRIMARY KEY (id)
);