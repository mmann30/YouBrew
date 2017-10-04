const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const batchSchema = new Schema({
  name: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
  availVol: { type: Number, required: true },
  totalVol: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  endDate: { type: Date, required: true },
  isReady: { type: Boolean, required: true, default: false }
});

const Batch = mongoose.model("Batch", batchSchema);

module.exports = Batch;
