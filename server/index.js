const express = require("express");
const cors = require("cors");
const products = require("./products");
const reviews = require("./reviews");

const app = express();
app.use(cors());
const PORT = 5000;

const getProducts = (req, res) => {
    res.json(products);
};

const getReviews = (req, res) => {
    res.json(reviews);
}

const handleHome = (req, res) => {
    res.send("Hello from the Aloe server!");
};

const handleAbout = (req, res) => {
    res.send("The Aloe Project, made in Thessaloniki");
};

const handleListen = () => {
    console.log(`Server running on http://localhost:${PORT}`);
};

app.get("/products", getProducts);
app.get("/reviews", getReviews);
app.get("/", handleHome);
app.get("/about", handleAbout);
app.listen(PORT, handleListen);