var express = require('express');
var router = express.Router();
var db = require('../db');

// const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors')
// const app = express();
// middle ware
router.use(express.static('images')); //to access the files in public folder
router.use(cors()); // it enables all cors requests
router.use(fileUpload());
// file upload api
router.post('/', (req, res) => {
    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
        // accessing the file
    const myFile = req.files.file;
    //  mv() method places the file inside public directory
    myFile.mv(`${__dirname}/images/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        return res.send({name: myFile.name, path: `/${myFile.name}`});
    });
})
// app.listen(8000, () => {
//     console.log('server is running at port 8000');
// })

module.exports = router;