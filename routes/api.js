const router = require('express').Router();
const Workout = require('../models/workout.js');
const path = require('path');

// your routes here

//Exercises Route
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
  
//Stats Route
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

//Workouts the user has completed.
router.get("/api/workouts", (req, res) => {
    Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

//Adds workout to the DataBase when the user creates it.
router.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then((data) => res.json(data))
      .catch((err) => {
        console.log("err", err);
        res.json(err);
      });
  });

//Update Previous or Current Workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      //Checks that the input is valid for the DB Schema.
      { new: true, runValidators: true }
    )
      .then((data) => res.json(data))
      //Error Handling if invalid 
      .catch((err) => {
        console.log("err", err);
        res.json(err);
      });
  });

module.exports = router;
