const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Route to get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});

// Route to add a new user
router.post("/", async (req, res) => {
  try {
    // Get the highest ID and increment by 1 for the new user
    const lastUser = await User.findOne().sort({ ID: -1 });
    const newUserId = lastUser ? lastUser.ID + 1 : 1;

    // Create a new user with the request body data
    const newUser = new User({
      ID: newUserId,
      name: req.body.name,
      familyname: req.body.familyname,
      email: req.body.email,
      phonenumber: req.body.phonenumber, // This is optional
    });

    // Save the new user to the database
    await newUser.save();

    // Send response with the newly added user
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error adding new user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
