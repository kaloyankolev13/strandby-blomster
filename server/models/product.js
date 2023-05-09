const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  // Product schema with "colections" enum
  category: {
    type: String,
    enum: ['limited', 'special', 'bestseller'],
    required: true,
  },
  images: [
    {
      url: String,
      filename: String,
      required: false,
    },
  ],
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
