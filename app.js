var express = require('express')
var app = express()
const user = require("./routes/user");
const initRoutes = require("./routes/index")
const startServer = require("./config/database")
require('dotenv/config');

//Set up routes for images

initRoutes(app)

app.use(express.urlencoded({extended: true}))
app.use(express.json())

startServer();

// Set EJS as templating engine
app.set("view engine", "ejs");

//Routes for users

app.use("/user", user);

var port = process.env.PORT || '3000'
app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port', port)
})