const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
  athlete: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'athlete'
  },
  workout: [
    {
    day: {
      type: Number,
    },
    exercises: [
      {
        exercise: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'exercise'
        },
        rest: {
          type: Number
        },
        sets: {
          type: Number
        },
        reps: {
          type: Number
        },
        min: {
          type: Number
        }
      }
    ],
  }
],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Plan = mongoose.model('plan', PlanSchema);