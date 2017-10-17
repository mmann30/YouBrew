// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
var morgan = require('morgan');
var passport = require('passport');
var session = require('express-session');

// Intialize Express
const app = express();

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboardkittycat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

// Sets the PORT
const PORT = process.env.PORT || 3001;

// Configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));

// Add routes
app.use(routes);

app.use(passport.initialize());
// Set mongoose to use promises
mongoose.Promise = Promise;
// Connect to MongoDB
mongoose.connect(
    "mongodb://heroku_tdqqc3x2:nades3hhf5tt8m7sco69g0bu9n@ds121955.mlab.com:21955/heroku_tdqqc3x2" || "mongodb://localhost/youbrew",
    {
        useMongoClient: true
    }
);







var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});






// Starts the server
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}!`);
});