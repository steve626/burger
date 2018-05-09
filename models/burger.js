var orm = require('../config/orm.js');

var burger = {
    selectAll: function(callback){
        orm.selectAll('burgers', function(data){
            callback(data);
        });
    },

    insertOne: function(cols, vals, callback){
        orm.insertOne('burgers', cols, vals, function(data){
            callback(data);
        });
    },

    updateOne: function(objColVals, condition, callback){
        orm.updateOne('burgers', objColVals, condition, function(data){
            callback(data);
        });
    }
};

module.exports = burger;
