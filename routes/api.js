const router = require('express').Router();
const Workout = require('../models/workout.js');

// your routes here

//Exercises Route
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
  
//Stats Route
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
