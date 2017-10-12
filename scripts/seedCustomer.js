// Initial database seed information.
// !! ONLY USE FOR DEVELOPMENT !!
// This script empties and replaces the Customer collection

const mongoose = require("mongoose");
const db = require("../models");

function seedCustomer() {
    const customerSeed = [
        {
            busName: "The Corner Tavern",
            custName: "John Smith",  
            phone: 4045551234, 
            notes: "Typically buys 3 kegs"
        },
        {
            busName: "Krog Street Market",
            custName: "Jane Doe",  
            phone: 4041235555, 
            notes: "Likes IPAs"
        }
    ];

    db.Customer
        .remove({})
        .then(() => db.Customer.collection.insertMany(customerSeed))
        .then(data => {
            console.log(data.insertedIds.length + " records inserted!");
            process.exit(0);
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });
}

module.exports = seedCustomer;