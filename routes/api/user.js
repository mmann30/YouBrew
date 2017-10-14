const router = require("express").Router();
const express = require("express");
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../../config/config');
require('../../config/passport')(passport);
var jwt = require('jsonwebtoken');
var user = require("../../models/user");
var sessionStorage = require('web-storage')().sessionStorage;

router.post('/signup', function(req, res) {
    if (!req.body.name || !req.body.password || !req.body.email) {
        res.json({ success: false, msg: 'Please pass username and password.' });
    } else {
        var newUser = new user({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        // save the user
        newUser.save(function(err) {
            if (err) {
                return res.json({ success: false, msg: 'Username already exists.' });
            }
            res.json({ success: true, msg: 'Successfully created new user.' });
        });
    }
});

router.post('/signin', function(req, res) {
    user.findOne({
        email: req.body.email
    }, function(err, user) {
        if (err) throw err;

        if (!user) {
            res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
        } else {
          var admin = user.isAdmin;
            // check if password matches
            user.comparePassword(req.body.password, function(err, isMatch) {
                if (isMatch && !err) {
                    var expires = Math.floor(Date.now() / 1000) + (60 * 60);
                    // if user is found and password is right create a token
                    var token = jwt.sign({
                        expires: expires,
                        data: user
                    }, config.secret);
                    // return the information including token as JSON
                    // res.json({success: true, token: 'Bearer ' + token});
                    res.json({
                        token: 'Bearer ' + token,
                        expires: expires,
                        user: user.toJSON()
                    });
                    // // sessionStorage.set("access_token", 'Bearer ' + token)
                    // localStorage.setItem('access_token', 'Bearer ' + token);
                    // // sessionStorage.set("admin_token", admin)
                    // localStorage.setItem('admin_token', admin);
                    // console.log("access token: " + localStorage.getItem("access_token"));
                    // console.log("admin_token: " + localStorage.getItem("admin_token"));
                } else {
                    res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                }
            });
        }
    });
});

getToken = function(headers) {
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

module.exports = router;