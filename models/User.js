const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  avatar: { type: String },
  confirmed: { type: Boolean, default: true },
  role: { type: String, enum: ['user', 'coach', 'admin'], default: 'user' },
  date: {type: Date, default: Date.now }
});

module.exports = User = mongoose.model('user', UserSchema);