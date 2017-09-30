// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Sets the PORT
const PORT = process.env.PORT || 3001;

// Intialize Express
const app = express();

// Configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ser up static assets
app.use(express.static("client/build"));

// Import MongoDB Models
/* <fill in ....>
*
*
*/

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