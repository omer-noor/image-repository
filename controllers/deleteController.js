var imgModel = require("../models/model");
const fs = require('fs')
var path = require('path');

exports.deleteImage = function (req, res) {
    imgModel.findOne({_id: req.params.id}, function (err, image) {
        if (err) {
            console.log(err)
        } else {
            fs.unlink(path.join(__dirname, "../" + 'uploads/' + image.filename), (err) => {
                if (err) {
                    console.error(err)
                    return
                }
            })
        }
    });

    imgModel.deleteOne({
        _id: req.params.id
    }, function (err, image) {

        if (err) throw err;

        console.log("Success");

    });


    res.redirect('/');

}

