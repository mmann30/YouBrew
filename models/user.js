const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]},
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
});

UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

const User = mongoose.model("Users", UserSchema, "users");

module.exports = User;