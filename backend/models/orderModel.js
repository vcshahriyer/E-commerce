const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  _id: { type: Schema.ObjectId },
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  address: { type: String, required: true },
  products: { type: String, required: true },
  totalPrice: { type: Number, required: true },
});

module.exports = mongoose.model("orders", OrderSchema);
