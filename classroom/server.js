const express = require("express");
const app = express();

const users = require("./routes/user.js");


app.get("/", (req, res) => {
    res.send("Hi I am Root !");

});

app.use("/users", users);

//Index -users
app.get("/users/", (req, res) => {
    res.send("GEt for  users ");
});

//show users 
app.post("/users/:id", (req, res) => {
    res.send("GEt for show  user id ");
});

//POST  USERS /NEW 
app.gPOST("/users/:id", (req, res) => {
    res.send("POST for  users ");
});

//delete -users 
app.post("/users/:id", (req, res) => {
    res.send("Delete for user id  ");
})








//post index

//Index -users
app.get("/posts/", (req, res) => {
    res.send("GET for  post ");
});

//show users 
app.post("/posts/:id", (req, res) => {
    res.send("GEt for show  post id ");
});

//POST  USERS /NEW 
app.gPOST("/posts/:id", (req, res) => {
    res.send("POST for  post ");
});

//delete -users 
app.post("/posts/:id", (req, res) => {
    res.send("Delete for post id  ");
})


app.listen(3000, () => {
    console.log("server is listening to 3000")
});