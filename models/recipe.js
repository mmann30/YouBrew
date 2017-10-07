const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: { type: String, required: true, unique: true},
  style: { type: String, required: true },
  abv: { type: String, required: true },
  desc: { type: String, required: true },
  brewTime: { type: Number, required: true },
  production: ["Year-Round", "Seasonal", "Limited", "Specialty"],
  notes: String
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
