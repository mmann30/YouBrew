// Initial database seed information.
// !! ONLY USE FOR DEVELOPMENT !!
// This script empties and replaces the Sale collection

const mongoose = require("mongoose");
const db = require("../models");

function seedSale() {
    const saleSeed = [
        {
            recName: "Queen's Weiss",
            volSold: 2,  
            user: "Test User",
            client: "The Corner Tavern"
        },
        {
            recName: "Southern BEL",
            volSold: 1,  
            user: "Test User",
            client: "The Corner Tavern"
        }
    ];

    db.Sale
        .remove({})
        .then(() => db.Sale.collection.insertMany(saleSeed))
        .then(data => {
            console.log(data.insertedIds.length + " records inserted!");
            process.exit(0);
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });
}

module.exports = seedSale;