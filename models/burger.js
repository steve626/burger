var orm = require('../config/orm.js');

var burger = {
    selectAll: function(callback){
        orm.selectAll(function(data){
            callback(data);
        });
    },

    insertOne: function(burger_name, devoured, callback){
        orm.insertOne(burger_name, function(data){
            callback(data);
        });
    },

    updateOne: function(burger_id, callback){
        orm.updateOne(burger_id, function(data){
            callback(data);
        });
    }
};

module.exports = burger;
