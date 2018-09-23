// import MySQl connection
let connection = require("../config/connection.js");

//helper for SQL Syntax
//passes question marks into our queries
printQuestionMarks = (num) => {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

//helper function to convert object key/value paris to SQL Syntax
objToSQL = (ob) => {
    let arr = [];

    //loop through keys and push the key/value pairs to SQL Syntax
    for (var key in ob) {
        let value = ob[key];
        //check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            //if string with spaces, add quotations
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }

       
    }

    return arr.toString();
}

let orm = {
    all: (tableInput, cb) => {
        let queryString = "SELECT * FROM " + tableInput  + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    create: (table, cols, vals, cb) => {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if(err) {
                throw err;
            }

            cb(result);
        })
    },
    update: (table, objColVals, condition, cb) => {
        let queryString = "UPDATE" + table;

        queryString += " SET " + objToSQL(objColVals) + " WHERE " + condition;
        console.log(queryString);

        connection.query(queryString, (err, result) => {
            
        })
    },
    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
    
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }

};

module.exports = orm;