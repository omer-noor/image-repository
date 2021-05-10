const express = require("express");
const router= express.Router();
const deleteImage = require("../controllers/deleteController")
const uploadImage = require("../controllers/uploadController")
const viewImages = require("../controllers/viewController")
const searchImages = require("../controllers/searchController")
const deleteAll = require("../controllers/deleteAllController")
var multer = require('multer');

//Router for all the paths dealing with images and homepage
//User multer to storage the images locally
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
  router.get("/deleteall",deleteAll.deleteAll)
  router.post("/",upload.single("image"),uploadImage.uploadImage)
  router.get("/",viewImages.viewImages)
  router.get("/search/",searchImages.searchImages)
  return app.use("/", router);
}

module.exports = routes;