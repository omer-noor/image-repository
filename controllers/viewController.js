var imgModel = require('../models/model');

const viewImages = (req, res,) => {
    imgModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        } else {
            res.render('index', {items: items});
        }
    });
}

module.exports = {
    viewImages:viewImages
};