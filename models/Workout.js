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
    type: Number,
    required: true
  },
  kind: {
    type: String,
    enum: ['group', 'personal'],
    default: 'group'
  },
  address: {
    type: String,
    required: true
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
  reservations: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },
      name: {
        type: String
      },
      email: {
        type: String
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

module.exports = Workout = mongoose.model('workout', WorkoutSchema);