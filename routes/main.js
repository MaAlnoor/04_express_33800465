// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!")); 

// About route
router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));

// Contact route
router.get('/contact', (req, res) => res.send ('<h1>Contact Us</h1> <p> you can contact me on malno001@campus.goldsmiths.ac.uk</p>'))

// Date and Time route
router.get("/date", (req, res) => res.send(`<h1>Current Date and Time</h1> <p>${new Date()}</p>`)); 

// Welcome route
router.get("/welcome/:name", (req, res) => {const name = req.params.name;res.send(`<h1>Welcome ${name}</h1>`);});

// chain route
router.get("/chain", 
    (req, res, next) => {req.customMessage = "Hello from the first handler!";
    next();},
    (req, res) => {res.send(`<h1>Chained Route</h1> <p>${req.customMessage}</p> <p>And greetings from the second handler!</p>`);});

// file route
const path = require("path");

router.get("/file", (req, res) => {const filePath = path.join(__dirname, "../a.html");res.sendFile(filePath);});

// Export the router object so index.js can access it
module.exports = router;