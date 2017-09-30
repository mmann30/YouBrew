// Initial database seed information.

const mongoose = require("mongoose");
const db = require("../models");

mongoose.Promise = Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/youbrew",
    {
        useMongoClient: true
    }
);

const recipeSeed = [

]

