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
    var page = parseInt(req.param('page')) || 1;
    var pageSize = parseInt(req.param('pageSize')) || 8;
    var priceLevel = req.param('priceLevel');
    var sort = req.param('sort') || 1;
    var skip = (page - 1) * pageSize;
    var params = {};

    var priceGt = '';
    var priceLte = '';

    if (priceLevel != 'all') {
        switch (priceLevel) {
            case '0':
                priceGt = 0;
                priceLte = 100;
                break;
            case '1':
                priceGt = 100;
                priceLte = 500;
                break;
            case '2':
                priceGt = 500;
                priceLte = 1000;
                break;            
            case '3':
                priceGt = 1000;
                priceLte = 5000;
                break;
        };

        params =  {
            salePrice: {
                $gt: priceGt,
                $lte: priceLte
            }
        };
    }

    var productModel = Product.find(params).skip(skip).limit(pageSize);

    productModel.sort({
        'salePrice': sort
    });

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
