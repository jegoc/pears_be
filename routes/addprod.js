var express = require('express');
var router = express.Router();
var db = require('../db');

router.post('/', function(request, response){
    var sql = "INSERT INTO inv_prod (prod_supid, prod_company, prod_code, prod_desc, prod_unit, prod_sold, prod_size, prod_color, prod_price, prod_discount, prod_others, prod_picid, prod_reviewid, prod_manu, prod_brand, prod_model, prod_serial, prod_qrcode, prod_status) VALUES ?";
    var values = [
    [request.body.supid, request.body.company, request.body.code, request.body.desc, request.body.unit, 0, request.body.size, request.body.color, request.body.price, 0, request.body.others, '', '', request.body.manu, request.body.brand, request.body.model, request.body.serial, '', 1]
  ];
  db.query(sql, [values], function (error, results) {
        if ( error ){
            response.status(400).send('Error in database operation');
        } else {
            response.send(results);
        }
    });
});

module.exports = router;
