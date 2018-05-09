var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function(req, res){
    res.redirect('/burgers');
});

router.get('/burgers', function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burger: data
        };
        console.log('brg_con ln12: ' + hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/burger/create/', function(req, res) {
    burger.insertOne([
        'buger_name', 'devoured'
    ], [
        req.body.burger_name, req.body.devoured
    ],function(result){
        res.json({id: result.insetId});
    });
});

router.put('/burger/update/:id', function(req,res){
    var condition = 'id' + req.params.id;

    console.log('brg_con ln30: ' + condition);

        burger.updateOne({
            deveoured: req.body.devoured
        }, condition, function(res){
            if (result.changedRows == 0) {
                return res.status(404).end();
            } else {
            res.status(200).end();
        }
    });
});

module.exports = router;