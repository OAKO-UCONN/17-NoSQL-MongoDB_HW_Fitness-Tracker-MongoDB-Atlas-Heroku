const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {},
    exercises: [],
  },
  {}
);

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
