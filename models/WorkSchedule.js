const mongoose = require('mongoose');

const workScheduleSchema = new mongoose.Schema({
    workDaysPerWeek: Number,
    workHours: {
            from: Number,
            to: Number,
    },
    freeDays: [{ type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thirdsday', 'Friday', 'Saturday', 'Sunday']}],
    price: Number,
    workDays: Number,
    workouts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' }]
});

const WorkSchedule = mongoose.model('WorkSchedule', workScheduleSchema);

module.exports = WorkSchedule;