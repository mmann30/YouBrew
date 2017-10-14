const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  busName: { type: String, required: true, unique: true },
  custName: { type: String, required: true },  
  phone: { type: Number, required: true, unique: true }, 
  notes: String
});

const Customer = mongoose.model("Customer", customerSchema, "Customer");

module.exports = Customer;