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
  },
  goal: {
      type: String,
      enum: ['lose fat', 'build muscle', 'get stronger']
  },
  level: {
      type: String,
      enum: ['beginner', 'intermediate']
  },
  bmi: [
    {
      type: Number
    }
  ],
  bmi_status: {
    type: String
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
  workout: [],
  reservations: [
    {
      workout: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'workout'
      },
      coach: {
        type: String
      },
      name: {
        type: String
      },
      title: {
        type: String
      },
      kind: {
        type: String
      },
      address: {
        type: String
      },
      price: {
        type: String
      },
      when: {
        type: Date
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Athlete = mongoose.model('athlete', AthleteSchema);