const path = require("path");

//Returns the index template
const home = (req, res) => {
    return res.sendFile(path.join(`${__dirname}/../views/index.ejs`));
};

module.exports = {
    getHome: home
};