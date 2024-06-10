// Create web server
// Create API to get all comments
// Create API to create a comment
// Create API to update a comment
// Create API to delete a comment

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

let comments = [];

app.get("/comments", (req, res) => {
    res.json(comments);
});

app.post("/comments", (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    res.json(newComment);
});

app.put("/comments/:id", (req, res) => {
    const id = req.params.id;
    const newComment = req.body;
    comments = comments.map((comment, index) => {
        if (index === parseInt(id)) {
            return newComment;
        } else {
            return comment;
        }
    });
    res.json(newComment);
});

app.delete("/comments/:id", (req, res) => {
    const id = req.params.id;
    comments = comments.filter((comment, index) => index !== parseInt(id));
    res.json(comments);
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});