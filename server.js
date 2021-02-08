//Require dependancies from package.json
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//Setting up PORT
const PORT = process.env.PORT || 8080;

//Require Models for DB
const db = require("./models");

//Setting up and using Express
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Connecting to the db with mongoose
require('dotenv').config()
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false 
}
);

//Linking to Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Running the app
app.listen(PORT, () => {
    console.log(`Workout App is running on good 'ol port ${PORT}! Access in here: http://localhost:${PORT}`)
});

