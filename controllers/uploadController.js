var fs = require('fs');
var path = require('path');
var imgModel = require('../models/model');

const uploadImage = (req, res,) => {
    var obj = {
        title: req.body.name,
        filename: req.file.filename,
        tags: req.body.desc.toString().split(","),
        img: {
            data: fs.readFileSync(path.join(__dirname,"../" + 'uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        } else {
            // item.save();
            res.redirect('/');
        }
    });
};

module.exports = {
    uploadImage: uploadImage
};