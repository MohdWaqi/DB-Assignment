const mongoose = require('mongoose');

// Define schema for Product Category
const productCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    required: true
  },
  modified_at: {
    type: Date,
    required: true
  },
  deleted_at: {
    type: Date,
    required: true
  },
});

// Define schema for Product Inventory
const productInventorySchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true
  },
  created_at: {
    type: Date,
    required: true
  },
  modified_at: {
    type: Date,
    required: true
  },
  deleted_at: {
    type: Date,
    required: true
  },
});

// Define schema for Discount
const discountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc:{
    type: String,
    required: true
  },
  discount_percent: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  },
  created_at: {
    type: Date,
    required: true
  },
  modified_at: {
    type: Date,
    required: true
  },
  deleted_at: {
    type: Date,
    required: true
  },
});

// Define schema for Product
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  SKU: {
    type: String,
    required: true
  },

  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product_Category', // Reference to Product_Category collection
    required: true
  },
  inventory_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product_Inventory', // Reference to Product_Inventory collection
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discount_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Discount', // Reference to Discount collection
    required: true
  },
  created_at: {
    type: Date,
    required: true
  },
  modified_at: {
    type: Date,
    required: true
  },
  deleted_at: {
    type: Date,
    required: true
  },
 
});

// Create models for each schema
const ProductCategory = mongoose.model('Product_Category', productCategorySchema);
const ProductInventory = mongoose.model('Product_Inventory', productInventorySchema);
const Discount = mongoose.model('Discount', discountSchema);
const Product = mongoose.model('Product', productSchema);

module.exports = {
  ProductCategory,
  ProductInventory,
  Discount,
  Product
};