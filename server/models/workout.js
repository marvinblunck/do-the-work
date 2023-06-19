const { Schema, model } = require('mongoose');


const workoutSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  sets: {
    type: Number,
    required: true,
  },
});


const workout = model('workout', workoutSchema);

module.exports = workout;
