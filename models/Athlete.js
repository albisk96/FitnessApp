const mongoose = require('mongoose');

const AthleteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  DOB: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female']
  },
  bmi_parameters: {
    height: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    }
  },
  days_per_week: {
      type: Number,
      required: true
  },
  goal: {
      type: String,
      enum: ['lose weight', 'gain weight']
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

module.exports = Athlete = mongoose.model('athlete', AthleteSchema);