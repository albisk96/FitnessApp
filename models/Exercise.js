const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  description: {
      type: String
  },
  muscles: {
      type: String,
      enum: ['chest', 'middle back', 'lower back', 'triceps', 'biceps', 'shoulders', 'abs', 'calves', 'legs', 'lats', 'glutes']
  },
  exerciseType: {
      type: String,
      enum: ['cardio', 'strength', 'stretching']
  },
  mechanicsType: {
      type: String,
      enum: ['compound', 'isolation']
  },
  level: {
      type: String,
      enum: ['beginner', 'intermediate', 'expert']
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Exercise = mongoose.model('exercise', ExerciseSchema);