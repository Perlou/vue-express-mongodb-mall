/**
 * product route
 * @author Perlou(perloukevin@gmail.com)
 */

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/product');

mongoose.connect('mongodb://127.0.0.1:27017/mall');

mongoose.connection.on('connected', function () {
    console.log('mongodb connnected');
});

router.get('/', function (req, res, next) {
    Product.find({}, function (err, doc) {
        if (err) {
            res.json({
                status: '1',
                msg: err.message
            })
        } else {
            res.json({
                status: '0',
                msg: '',
                result: {
                    count: doc.length,
                    list: doc
                }
            })
        }
    });
});

module.exports = router;
