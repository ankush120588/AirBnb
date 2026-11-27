

const express = require("express");
const router = express.Router();


//===============================
//           USERS ROUTES
// ==============================

// 1. INDEX: Get all users
router.get("/users", (req, res) => {
    res.send("GET all users");
});

// 2. CREATE: Add a new user
router.post("/users", (req, res) => {
    res.send("POST: Create a new user");
});

// 3. SHOW: Get a single user by ID
router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    res.send(`GET user with ID: ${id}`);
});

// 4. DELETE: Remove a single user by ID
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    res.send(`DELETE user with ID: ${id}`);
});








module.exports = router;