//Require dependancies from package.json
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//Setting up PORT
const PORT = process.env.PORT || 3000;

//Require Models for DB
const db = require("./models");

//Setting up and using Express
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Connecting to the db with mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

//Running the app
app.listen(PORT, () => {
    console.log(`Workout App is running on good 'ol port ${PORT}! Access in here: http://localhost:${PORT}`)
});

