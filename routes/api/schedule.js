const express = require('express');

const Coach = require('../../models/Coach');
const User = require('../../models/User');
const WorkSchedule = require('../../models/WorkSchedule');
const auth = require('../../middleware/auth');
const wrap = require('express-async-wrap');
const router = express.Router();

router.post('/', auth, wrap(async (req, res) => {
    const doesCoachHaveSchedule = await Coach.countDocuments({ _id: req.user.id, workSchedule: { $exists: true } });
    if(!doesCoachHaveSchedule) {
        const workSchedule = new WorkSchedule(req.body);
        await workSchedule.save();
        const user = await Coach.findByIdAndUpdate(req.user.id, { workSchedule });
        console.log('does not have schedule - success')
        console.log(user)
    }
    else {
        const coach = await Coach.findById(req.user.id ).lean();
        const workSchedule = await WorkSchedule.findById(coach.workSchedule);
        await workSchedule.updateOne({ ...req.body });
        console.log('have schedule success')
    }
    res.sendStatus(204);
}));


router.get('/', auth, wrap(async (req, res) => {
    const { workSchedule } = await Coach.findById(req.user.id).populate('workSchedule').lean().select('workSchedule');
    res.json(workSchedule);
}))



module.exports = router;