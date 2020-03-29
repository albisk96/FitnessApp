const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Workout = require('../../models/Workout');
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
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newWorkout = new Workout({
        title: req.body.title,
        name: user.name,
        description: req.body.description,
        kind: req.body.kind,
        address: req.body.address,
        price: req.body.price,
        level: req.body.level,
        avatar: user.avatar,
        user: req.user.id,
        entries: req.body.entries
      });

      const workout = await newWorkout.save();

      res.json(workout);
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
  try {
    const workouts = await Workout.find().sort({ date: -1 });
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