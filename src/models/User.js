const mongoose = require("mongoose");
const Address = require("./Address");
const { v4: uuidv4 } = require("uuid");

const userSchema = new mongoose.Schema({
  UserGUID: { type: String, unique: true, required: true, default: uuidv4 },
  EmailAddress: { type: String, unique: true, required: true },
  BusinessName: String,
  BusinessNumber: String,
  UniqueCode: String,
  ExternalReference: String,
  PhoneNum: String,
  HomeAddress: Address,
  PostalAddress: Address,
  CreationDate: Date,
  ModifyDate: Date,
  ArchiveDate: Date,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
