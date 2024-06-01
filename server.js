const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
require("./db");

// Define CORS options
const corsOptions = {
  origin: "*", // Replace with your allowed origin or '*' for any origin
  methods: "GET,POST", // Specify allowed HTTP methods
};

// Middleware
app.use(cors(corsOptions)); // Use CORS middleware with specified options
app.use(express.json()); // Middleware to parse JSON request body

// Routes
app.use("/api/app-data", userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "hi from server" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
