// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
var morgan = require('morgan');
var passport = require('passport');

// Intialize Express
const app = express();

// Sets the PORT
const PORT = process.env.PORT || 3001;

// Configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// // Serve up static assets
// app.use(express.static("client/build"));

// Add routes
app.use(routes);

app.use(passport.initialize());
// Set mongoose to use promises
mongoose.Promise = Promise;
// Connect to MongoDB
mongoose.connect(
    process.env.MONGOD_UR || "mongodb://localhost/youbrew",
    {
        useMongoClient: true
    }
);

// Starts the server
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}!`);
});