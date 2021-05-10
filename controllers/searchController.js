var imgModel = require('../models/image');

//Searches within the database for images by complete tag match or partial match in title (using regex)
const searchImages = (req, res,) => {
    let user = req.query.user
    if (req.query.user==="/"){user=undefined}
    imgModel.find({$or:[{tags:req.query.search},{title:{ "$regex": req.query.search, "$options": "i" }}]}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        } else {
            res.render('index', {items: items, user:user});
        }
    });
}

module.exports = {
    searchImages:searchImages
};

