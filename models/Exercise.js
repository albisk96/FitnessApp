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
  index: {
      type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

ExerciseSchema.pre('save', function() {
    this.index = [this.muscles, this.name, this.exerciseType].join(' ').toLowerCase() || [this.name, this.muscles, this.exerciseType].join(' ').toLowerCase() || [this.exerciseType, this.muscles, this.name].join(' ').toLowerCase()
})


module.exports = Exercise = mongoose.model('exercise', ExerciseSchema);