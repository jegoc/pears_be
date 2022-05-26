const express = require('express');
const app = express();
const db = require('./db');
const cors = require('cors')
const bodyParser = require('body-parser');
var http = require('http');
const port = '8888';

app.use('/routes/images/', express.static('./routes/images'));
app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var regchkemailRouter = require('./routes/regchkemail');
var registerRouter = require('./routes/register');
var compregisterRouter = require('./routes/compregister');
var addprodRouter = require('./routes/addprod');
var addbookprodRouter = require('./routes/addbookprod');
var book_picRouter = require('./routes/book_pic');
var getprodRouter = require('./routes/getprod');
var getbookprodRouter = require('./routes/getbookprod');
var getuserRouter = require('./routes/getuser');
var onlineusersRouter = require('./routes/onlineusers');
var imageuploadRouter = require('./routes/imageupload');
var searchprodRouter = require('./routes/searchprod');
var searchbookprodRouter = require('./routes/searchbookprod');

app.use('/express', indexRouter);
app.use('/express/users', usersRouter);
app.use('/express/login', loginRouter);
app.use('/express/logout', logoutRouter);
app.use('/express/regchkemail', regchkemailRouter);
app.use('/express/register', registerRouter);
app.use('/express/compregister', compregisterRouter);
app.use('/express/addprod', addprodRouter);
app.use('/express/addbookprod', addbookprodRouter);
app.use('/express/book_pic', book_picRouter);
app.use('/express/getprod', getprodRouter);
app.use('/express/getbookprod', getbookprodRouter);
app.use('/express/getuser', getuserRouter);
app.use('/express/onlineusers', onlineusersRouter);
app.use('/express/imageupload', imageuploadRouter);
app.use('/express/searchprod', searchprodRouter);
app.use('/express/searchbookprod', searchbookprodRouter);

app.listen(0, () => console.log('Application is running'));
var listener = app.listen(port, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});
