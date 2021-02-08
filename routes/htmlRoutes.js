const db = require("../models");
const path = require("path");

module.exports = (app) => {
    // getting the index.html file
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    // Getting exercise.html file
    app.get('/exercise', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    });
    // Getting stats.html file
    app.get('/stats', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    });
};