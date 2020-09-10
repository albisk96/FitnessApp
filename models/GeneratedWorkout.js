const mongoose = require('mongoose');

const GeneratedWorkout = new mongoose.Schema({
  day: {
      type: Number
  },
  exercise: [{type: mongoose.Schema.Types.ObjectId, ref: 'exercise'}],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Exercise = mongoose.model('exercise', GeneratedWorkout);