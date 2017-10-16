// Initial database seed information.
// !! ONLY USE FOR DEVELOPMENT !!
// This script empties and replaces the User collection

const mongoose = require("mongoose");
const db = require("../models");

function seedUser() {
    const userSeed = [
        {
            name: "user",
            email: "user@email.com",
            password: "$2a$10$oIh.l/PLHSkSsw3IS9TEy.gHcIiPTk7dlwjbFbk8PKJk5.AO1yrAe",
            isAdmin: true,
        }
    ];

    db.User
        .remove({})
        .then(() => db.User.collection.insertMany(userSeed))
        .then(data => {
            console.log(data.insertedIds.length + " records inserted!");
            process.exit(0);
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });
}

module.exports = seedUser;