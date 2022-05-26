var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET users listing. */
router.get('/:prod_id', function(request, response){
    db.query('select * from book_pic where bookpic_prodid=? and bookpic_status=1',[request.params.prod_id], function(error, results){
        if ( error ){
            response.status(400).send('Error in database operation');
        } else {
            response.json(results);
        }
    });
});

module.exports = router;
