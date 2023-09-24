const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    // console.log("reques body", req.body);
    const newUser = new User(req.body);
    newUser.CreationDate = new Date();
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    if (error.code == 11000) {
      res.status(400).json({ error: "Invalid Argument" });
    }
    res.status(500).json({ error: "Failed to create user" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ ArchiveDate: null });
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve users" });
  }
};

exports.getUserByGUID = async (req, res) => {
  const userGUID = req.params.id;
  try {
    const user = await User.findOne({ UserGUID: userGUID, ArchiveDate: null });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve user" });
  }
};

exports.updateUser = async (req, res) => {
  const userGUID = req.params.id;
  const user = req.body;
  user.ModifyDate = new Date();
  try {
    const updatedUser = await User.findOneAndUpdate(
      { UserGUID: userGUID, ArchiveDate: null },
      user,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update user" });
  }
};

exports.deleteUser = async (req, res) => {
  const userGUID = req.params.id;
  const deletedUser = await User.findOneAndUpdate(
    { UserGUID: userGUID, ArchiveDate: null },
    { ArchiveDate: new Date() },
    { new: true }
  );
  try {
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete user" });
  }
};
