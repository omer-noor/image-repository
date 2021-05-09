var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
const initRoutes = require("./routes/index")
require('dotenv/config');
initRoutes(app)

mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser: true, useUnifiedTopology: true}, err => {
        console.log('connected')
    });

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Set EJS as templating engine
app.set("view engine", "ejs");


var port = process.env.PORT || '3000'
app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port', port)
})