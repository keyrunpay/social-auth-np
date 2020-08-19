const express = require("express");
const app = express();
const cors = require("cors");

//Allow JSON Data
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Bring in the routes!
app.use(require("./routes"));

module.exports = app;
