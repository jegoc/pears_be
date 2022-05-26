var express = require('express');
var router = express.Router();
var db = require('../db');

router.post('/', function(request, response){
    var sql = "INSERT INTO book_prod (book_supid, book_company, book_code, book_desc, book_booked, book_amount, book_discount, book_others, book_picid, book_reviewid, book_qrcode, book_status) VALUES ?";
    var values = [
    [request.body.supid, request.body.company, request.body.code, request.body.desc, 0, request.body.amount, 0, request.body.others, '', '', '', 1]
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
