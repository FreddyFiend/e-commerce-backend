const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productCode: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
    default: 1,
  },
  imagelink: {
    type: String,
  },
  supplier: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  stockLeft: {
    type: Number,
    required: true,
  },
  stars: {
    type: Number,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("product", productSchema);
