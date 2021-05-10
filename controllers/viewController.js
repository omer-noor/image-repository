var imgModel = require('../models/image');

const viewImages = (req, res,) => {
    let user = req.query.user
    imgModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        } else {
            res.render('index', {items: items, user:user});
        }
    });
}

module.exports = {
    viewImages:viewImages
};