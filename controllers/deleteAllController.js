var imgModel = require("../models/image");
const fs = require('fs').promises
var path = require('path');

exports.deleteAll = function (req, res) {

    imgModel.deleteMany({}, function (err, image) {

        if (err) throw err;

        fs.rmdir(path.join(__dirname, "../" + 'uploads/'), { recursive: true })
            .then(() => console.log('directory removed!'));

        console.log("Success");

    });
    res.redirect('/');



}

