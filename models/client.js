const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  busName: { type: String, required: true, unique: true },
  custName: { type: String, required: true },  
  phone: { type: Number, required: true, unique: true }, 
  client: [{ type: Schema.Types.ObjectId, ref: 'Client' }],
  notes: String
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;