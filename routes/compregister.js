var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET users listing. */
router.post('/', function(request, response){
    db.query('select * from user where user_id=?',[request.body.userid], function(error, result){
        if ( error ){
            response.status(400).send('Error in database operation');
        } else {
            db.query('UPDATE user SET user_company = 1 WHERE user_id=?',[request.body.userid], function(error, results){
                if ( error ){
                    res.status(400).send('Error in database operation');
                } else {
                    response.json(results);
                }
            });
        }
    });
});

module.exports = router;
