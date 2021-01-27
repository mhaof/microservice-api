const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./api/routes');

const app = express();
const PORT = process.env.PORT || 7070;

app.use(bodyParser.json());

// Load routes
app.use("/api", routes);

// Landing page
app.get("/api", (req, res) => res.send("Welcome to Api front page. Please check README for usage"));

// Error page
app.all("*", (req, res) => res.send("Route not found!"));

// Start the server
const server = app.listen(PORT, () => {
    console.log(`Server port: http://localhost:${PORT}`)
});