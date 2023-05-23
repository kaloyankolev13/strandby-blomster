const express = require('express');
const router = express.Router();
const Product = require('../models/product'); // Importing Product model
const { isLoggedIn } = require('../middleware'); // Importing middleware
const catchAsync = require('../utils/catchAsync');
const multer = require('multer');
const { cloudinary, storage } = require('../cloudinary');
// Need to continue to work on the mail server
const email = require('../emailBuilder');
const upload = multer({ storage });

// console.log(cloudinary.image("BulgarianLegacy/b0qxzp5slttwhhl5harm.png"));

// Route for fetching all products
router.get(
  '/',
  catchAsync(async (req, res) => {
    let { skip, limit, category } = req.query;
    if (!skip) {
      skip = 0;
    }
    if (!limit) {
      limit = 9;
    }
    skip = parseInt(skip);
    limit = parseInt(limit);
    email('Hello from blomster');
    let products;
    if (category === undefined) {
      products = await Product.aggregate([{ $skip: skip }, { $limit: limit }]);
    } else {
      products = await Product.aggregate([
        { $skip: skip },
        { $limit: limit },
        { $match: { category: category } },
      ]); // Fetching all products
    }

    const result = {
      total: await Product.count(),
      skip,
      limit,
      products,
    };
    res.json(result); // Sending response as JSON
  })
);

router.post(
  '/category',
  catchAsync(async (req, res) => {
    const category = req.body.category;
    const filteredProducts = await Product.find({ category });
    res.json(filteredProducts);
  })
);

// Route for fetching a single product by ID
router.get(
  '/:id',
  catchAsync(async (req, res) => {
    const { id } = req.params; // Extracting product ID from request parameters
    const product = await Product.findById(id); // Finding product with the given ID
    res.json(product); // Sending response as JSON
  })
);

// Route for creating a new product
router.post(
  '/',
  isLoggedIn,
  upload.array('images'),
  catchAsync(async (req, res) => {
    const { name, price, description, category } = req.body; // Extracting product details from request body
    const product = new Product({ name, price, description, category }); // Creating a new Product instance
    product.images = req.files.map((f) => ({
      // Attaching product images
      url: f.path,
      filename: f.filename,
    }));
    await product.save(); // Saving the new product to the database
    res.json(product); // Sending response as JSON
  })
);

// Route for updating an existing product by ID
router.patch(
  '/:id',
  isLoggedIn,
  upload.array('images'),
  catchAsync(async (req, res) => {
    const { id } = req.params; // Extracting product ID from request parameters
    const { name, price, description, images } = req.body; // Extracting product details from request body
    const product = { name, price, description, images }; // Creating a new Product instance
    console.log(req.files);
    product.images = req.files.map((f) => ({
      // Attaching product images
      url: f.path,
      filename: f.filename,
    }));
    await Product.findByIdAndUpdate(
      id,
      { $push: { images: product.images } },
      { new: false }
    ); // Updating the product in the database
    res.json({ status: 'Product updated' }); // Sending response as JSON
  })
);

// Route for deleting a product by ID
router.delete(
  '/:id',
  isLoggedIn,
  catchAsync(async (req, res) => {
    const { id } = req.params; // Extracting product ID from request parameters
    await Product.findByIdAndRemove(id); // Removing the product from the database
    res.json({ status: 'Product deleted' }); // Sending response as JSON
  })
);

module.exports = router; // Exporting the router for use in other files
