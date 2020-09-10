const mongoose = require('mongoose');

const CoachSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  website: {
    type: String
  },
  city: {
    type: String
  },
  bio: {
    type: String
  },
  DOB: {
    type: Date
  },
  gym: {
    type: String
  },
  skype: {
    type: String
  },
  achievements: [
    {
      title: {
        type: String
      },
      date: {
        type: Date
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      fieldofstudy: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },
      stars: {
        type: Number,
        enum: [1, 2, 3, 4, 5]
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  workSchedule: {
      workDaysPerWeek: {
        type: Number
      },
      workHours: {
        from: Number,
        to: Number,
      },
      freeDays: [{ type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thirdsday', 'Friday', 'Saturday', 'Sunday']}],
      price: {
        type: Number
      },
      workDays: {
        type: Number
      },
      workouts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'workout' }],
  },
  index: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

CoachSchema.pre('save', function() {
  this.index = [this.bio, this.city, this.social.facebook, this.skype].join(' ').toLowerCase()
})

module.exports = Coach = mongoose.model('coach', CoachSchema);