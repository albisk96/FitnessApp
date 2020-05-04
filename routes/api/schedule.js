const express = require('express');

const Coach = require('../../models/Coach');
const User = require('../../models/User');
const WorkSchedule = require('../../models/WorkSchedule');
const auth = require('../../middleware/auth');
const wrap = require('express-async-wrap');
const router = express.Router();

router.post('/', auth, wrap(async (req, res) => {
    const doesCoachHaveSchedule = await Coach.countDocuments({ _id: req.coach._id, workSchedule: { $exists: true } });
    if(!doesCoachHaveSchedule) {
        const workSchedule = new WorkSchedule(req.body);
        await workSchedule.save();
        await Coach.findByIdAndUpdate(req.coach._id, { workSchedule });
    }
    else {
        const coach = await Coach.findById(req.coach._id ).lean();
        const workSchedule = await WorkSchedule.findById(coach.workSchedule);
        await workSchedule.updateOne({ ...req.body });
    }
    res.sendStatus(204);
}));


router.get('/', auth, wrap(async (req, res) => {
    const { workSchedule } = await Coach.findById(req.coach._id).populate('workSchedule').lean().select('workSchedule');
    res.json(workSchedule);
}))



module.exports = router;