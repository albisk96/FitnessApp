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
  height: {
      type: Number,
      required: true,
  },
  weight: [
    {
        type: Number,
        required: true,
    }
  ],
  days_per_week: {
      type: Number,
      required: true
  },
  goal: {
      type: String,
      enum: ['lose fat', 'build muscle', 'get stronger']
  },
  level: {
      type: String,
      enum: ['beginner', 'intermediate', 'expert']
  },
  bmi: [
    {
      type: Number
    }
  ],
  bmi_status: {
    type: String
  },
  bodyType : {
    type: String,
    enum: ['ectomorph', 'mesomorph', 'endomorph']
  },
  bodyFat: [
    {
      type: Number
    }
  ],
  neck: [
    {
      type: Number
    }
  ],
  waist: [
    {
      type: Number
    }
  ],
  hip: [ 
    {
      type: Number
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Athlete = mongoose.model('athlete', AthleteSchema);