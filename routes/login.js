var express = require('express');
var router = express.Router();
var db = require('../db');

router.post('/', function(request, response){
    db.query('select * from user where user_email=? and user_password=? and user_status=1',[request.body.email,request.body.password], function(error, results){
        if ( error ){
            response.status(400).send('Error in database operation');
        } else {
            db.query('UPDATE user SET user_login = 1 WHERE user_email=? and user_password=? and user_status=1',[request.body.email,request.body.password], function(error, res){
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
