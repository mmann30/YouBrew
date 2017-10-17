var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youbrewapp@gmail.com',
    pass: '99bottlesofbeer'
  }
});

var mailOptions = {
  from: 'youbrewapp@gmail.com',
  to: 'youbrewapp@gmail.com',
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