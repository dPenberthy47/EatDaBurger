//set up MySQL connection
let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burger_db";
});

//make a connection
connection.connect((err) => {
    if(err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//export connection for our ORM to use
module.exports = connection;