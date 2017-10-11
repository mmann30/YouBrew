const router = require("express").Router();
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../../config/config');
require('../../config/passport')(passport);
var jwt = require('jsonwebtoken');
var recipe = require("../../models/recipe");

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    console.log(req.body);
    var newRecipie = new recipe({
      name: req.body.name,
      style: req.body.style,
      abv: req.body.abv,
      desc: req.body.desc,
      brewTime: req.body.desc
    });

    newRecipie.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Save Recipe failed.'});
      }
      res.json({success: true, msg: 'Successful created new recipe.'});
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    recipe.find(function (err, recipes) {
      if (err) return next(err);
      res.json(recipes);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});



module.exports = router;