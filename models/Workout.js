const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  avatar: {
    type: String
  },
  entries: {
    type: Number
  },
  address: {
    type: String
  },
  price: {
    type: String,
    required: true
  },
  level: {
    type: String,
    enum: ['beginner', 'intermediate', 'expert', 'all levels'],
    default: 'all levels'
  },
  when: {
    type: Date,
    required: true
  },
  duration: {
    type: Number
  },
  group: { type: Boolean, default: false },
  athlete: [{type: mongoose.Schema.Types.ObjectId, ref: 'athlete'}],
  coach: { type: mongoose.Schema.Types.ObjectId, ref: 'coach'},
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Workout = mongoose.model('workout', WorkoutSchema);