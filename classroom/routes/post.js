
// ==============================
//           POSTS ROUTES
// ==============================

// 1. INDEX: Get all posts
app.get("/posts", (req, res) => {
    res.send("GET all posts");
});

// 2. CREATE: Add a new post
app.post("/posts", (req, res) => {
    res.send("POST: Create a new post");
});

// 3. SHOW: Get a single post by ID
app.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    res.send(`GET post with ID: ${id}`);
});

// 4. DELETE: Remove a single post by ID
app.delete("/posts/:id", (req, res) => {
    const { id } = req.params;
    res.send(`DELETE post with ID: ${id}`);
});