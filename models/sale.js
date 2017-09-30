const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saleSchema = new Schema({
  recName: [{ type: Schema.Types.ObjectId, ref: 'Batch' }],
  volSold: { type: Number, required: true },  
  user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  client: [{ type: Schema.Types.ObjectId, ref: 'Client' }]
});

const Sale = mongoose.model("Sale", saleSchema);

module.exports = Sale;