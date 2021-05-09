var imgModel = require('../models/model');

const searchImages = (req, res,) => {
    imgModel.find({tags:req.query.search}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        } else {
            res.render('index', {items: items});
        }
    });
}

module.exports = {
    searchImages:searchImages
};