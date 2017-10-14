const mongoose = require("mongoose");
const db = require("../models");
const seedBatch = require("./seedBatch");
const seedRecipe = require("./seedRecipe");
const seedCustomer = require("./seedCustomer");
const seedSale = require("./seedSale");
const seedUser = require("./seedUser");

mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/youbrew",
    {
        useMongoClient: true
    }
);

seedBatch();
console.log("Batch seeded")
seedRecipe();
console.log("Recipe seeded")
seedCustomer();
console.log("Customer seeded")
seedSale();
console.log("Sale seeded")
seedUser();
console.log("User seeded")