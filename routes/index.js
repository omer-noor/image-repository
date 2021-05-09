const express = require("express");
const router= express.Router();
const deleteImage = require("../controllers/deleteController")
const uploadImage = require("../controllers/uploadController")
const viewImages = require("../controllers/viewController")
const searchImages = require("../controllers/searchController")
var multer = require('multer');


var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now())
  }
});

var upload = multer({storage: storage});

let routes = app => {
  router.get("/delete/:id",deleteImage.deleteImage)
  router.post("/",upload.single("image"),uploadImage.uploadImage)
  router.get("/",viewImages.viewImages)
  router.get("/search/",searchImages.searchImages)
  return app.use("/", router);
}

module.exports = routes;