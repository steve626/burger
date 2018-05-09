var connection = require("./connection.js");



var orm = {
    selectAll: function(callback){
        var queryString = 'SELECT * FROM burgers';

        connection.query(queryString, function(err, data){
            if (err) throw err;
            callback(data);
        });
    },

    insertOne: function(burger_name, callback){
        //var queryString = 'INSERT INTO burgers SET ?';

        connection.query('INSERT INTO burgers SET ?',{
            burger_name: burger_name,
            devoured: false
        }, function(err,data){
            if (err) throw err;
            callback(data);
        });
    },

  updateOne: function(burgerID, callback){
            connection.query('UPDATE burbers SET ?? WHERE ?',
        [{devoured: true}, {id: burgerID}], function(err,result){
            if(eff) throw err;
            callback(data);
        });    
    }
};

module.exports = orm;
