const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      {
        type: {
          type: String, trim: true,
          required: "Welcome Back! Select an exercise please!",
        },
        name: {
          type: String, trim: true,
          required: "Name of your exercise please",
        },
        duration: {
          type: Number, required: "How many minutes did you exercise for?",
        },
        weight: {type: Number,},
        reps: {type: Number,},
        sets: {type: Number,},
        distance: {type: Number,},
      
      
      },//exercises object
    ],//exercises array
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

//Total Duration added to Schema
workoutSchema.virtual("totalDuration").get(function () {
  //Reduces all values accosiated with a particular key.
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

//Total Pounds added to Shema
workoutSchema.virtual("totalPounds").get(function () {
  //Reduces all values accosiated with a particular key.
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.weight;
  }, 0);
});

const Workout = mongoose.model('HW17', workoutSchema);

module.exports = Workout;
