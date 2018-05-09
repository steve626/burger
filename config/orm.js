var connection = require("./connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }


var orm = {
    selectAll: function(tableInput, callback){
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, data){
            if (err) {
                throw err;
            }
            callback(data);
        });
    },

    insertOne: function(table, cols, vals, callback){
        var queryString = 'INSERT INTO' + table;

        queryString += '(';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += pringQuestionMarks(vals.length);
        queryString +=')';

        console.log('orm line 63: ' + queryString);

        connection.query(queryString, vals, function(err, data){
            if (err) {
                throw err;
            }
            callback(data);
        });
    },

  updateOne: function(table, objColVals, condition, callback){
      var queryString = 'UPDATE' + table;

      queryString += ' SET ';
      queryString += objToSql(obColVals);
      queryString += ' WHERE ';
      queryString += condition;

      console.log('orm line 81: '+ queryString);
      connection.query(querySting, function(err, data){
          if (err) {
              throw err;
          }

          callback(data);
      });
  }
};

module.exports = orm;
