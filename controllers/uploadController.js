var fs = require('fs');
var path = require('path');
var imgModel = require('../models/image');

const uploadImage = (req, res,) => {
    let tag = req.body.desc.toString().split(",")
    let uniq = [...new Set(tag)];
    var obj = {
        title: req.body.name,
        filename: req.file.filename,
        tags: uniq,
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