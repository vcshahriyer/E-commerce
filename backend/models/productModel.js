const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  _id: { type: Schema.ObjectId },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: String,
});

module.exports = mongoose.model("products", productSchema);
