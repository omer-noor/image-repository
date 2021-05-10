const mongoose = require("mongoose");
//Modular way to connect to the mongoDB server using mongoose
// Replace this with your MONGOURI.
const MONGOURI = "mongodb+srv://shopify:imagerepo@cluster0.zkfjl.mongodb.net/Image-Repository?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true, useUnifiedTopology: true
        });
        console.log("Connected to DB !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = InitiateMongoServer;