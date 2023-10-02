const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zipcode: String,
  country: String,
});

module.exports = addressSchema;
