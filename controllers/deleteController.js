var imgModel = require("../models/image");
const fs = require('fs')
var path = require('path');

exports.deleteImage = function (req, res) {
    //Deletes the specified file by the ID and then deletes the local copy as well

    //Find image name (stored locally)
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

    //Delete from repo
    imgModel.deleteOne({
        _id: req.params.id
    }, function (err, image) {

        if (err) throw err;

        console.log("Success");

    });
    res.redirect('/');



}

