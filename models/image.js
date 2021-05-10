var mongoose = require('mongoose');

//Mongoose model for the image
var imageSchema = new mongoose.Schema({
    title: String,
    filename: String,
    tags: Array,
    img:
        {
            data: Buffer,
            contentType: String
        }
});

module.exports = new mongoose.model('Image', imageSchema);