const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const { getPagingQuery } = require('../../helpers/api-pagination');

const Workout = require('../../models/Workout');
const Coach = require('../../models/Coach');
const User = require('../../models/User');

// @route    POST api/workouts
// @desc     Create a workout
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('title', 'Title is required')
        .not()
        .isEmpty(),
      check('entries', 'Entries is required')
        .not()
        .isEmpty(),
      check('when', 'Workout date is required and needs to be in the future')
        .not()
        .isEmpty()
        .custom((value, { req }) => (req.body.date ? value > req.body.date : true))
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const coach = await Coach.findOne({ user: req.user.id })

      const newWorkout = new Workout({
        title: req.body.title,
        name: user.name,
        description: req.body.description,
        address: req.body.address,
        price: req.body.price,
        level: req.body.level,
        avatar: user.avatar,
        user: req.user.id,
        entries: req.body.entries,
        when: req.body.when,
        group: true
      });

      const workout = await newWorkout.save();

      coach.workSchedule.workouts.unshift(workout._id);

      await coach.save();
      console.log(coach)

      res.json(coach)

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    POST api/workouts/:coachId
// @desc     Create an individual workout
// @access   Private
router.post('/:coachId', auth, async (req, res) => {
    coachId = req.params.coachId
    try {
      const user = await User.findById(req.user.id).select('-password');
      const coach = await Coach.findOne({ user: coachId })

      const newWorkout = new Workout({
        title: req.body.title,
        name: user.name,
        description: req.body.description,
        address: req.body.address,
        price: req.body.price,
        level: req.body.level,
        avatar: user.avatar,
        user: req.user.id,
        entries: req.body.entries,
        when: req.body.when
      });

      const workout = await newWorkout.save();

      coach.workSchedule.workouts.unshift(workout);

      await coach.save();

      res.json(coach)

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/workouts
// @desc     Get all workouts
// @access   Private
router.get('/', auth, async (req, res) => {
  const perPage = req.query.page;
  const { size, page } = getPagingQuery(perPage - 1)
  try {

    const workouts = await Workout.find().limit(size).skip(page * size).sort({ date: -1 }).populate('athlete');
    const workoutsCount = await Workout.countDocuments({});
    res.setHeader('x-total-count', workoutsCount)
    res.json(workouts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/workouts/:id
// @desc     Get workout by ID
// @access   Private
router.get('/:id', auth, async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);

    // Check for ObjectId format and workout
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !workout) {
      return res.status(404).json({ msg: 'Workout not found' });
    }

    res.json(workout);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/workouts/:id
// @desc     Delete a workout
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);

    // Check for ObjectId format and workout
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !workout) {
      return res.status(404).json({ msg: 'workout not found' });
    }

    // Check user
    if (workout.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await workout.remove();

    res.json({ msg: 'workout removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});



module.exports = router;