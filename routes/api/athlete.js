const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const bodyFat = require('../../helpers/bodyFat-helper');
const bmi = require('../../helpers/bmi-helper');

const User = require('../../models/User');
const Athlete = require('../../models/Athlete');

// @route    GET api/athlete
// @desc     Get current users athlete
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const athlete = await Athlete.findOne({user: req.user.id}).populate('user');

    if (!athlete) {
      return res.status(400).json('There is no athlete for this user');
    }

    // only populate from user document if athlete exists
    res.json(athlete);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/athlete
// @desc    Create an athlete profile
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('DOB', 'Date of Birth is required')
        .not()
        .isEmpty(),
      check('gender', 'Gender is required')
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
      const bmiNumber = bmi.calculateBmi(req.body.weight, req.body.height);
      const bmiStatus = bmi.statusOnBmi(bmiNumber);

        const newAthlete = new Athlete({
          user: req.user.id,
          name: user.name,
          email: user.email,
          DOB: req.body.DOB,
          gender: req.body.gender,
          days_per_week: req.body.days_per_week,
          goal: req.body.goal,
          level: req.body.level,
          height: req.body.height,
          weight: req.body.weight,
          neck: req.body.neck,
          waist: req.body.waist,
          hip: req.body.hip,
          bodyType: req.body.bodyType,
          bmi: bmiNumber,
          bmi_status: bmiStatus,
          bodyFat: bodyFat.calculateBodyFat(req.body.neck, req.body.waist, req.body.hip, req.body.gender, req.body.height)
        });
  
        const athlete = await newAthlete.save();
  
        res.json(athlete);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );


// @route    UPDATE api/athlete
// @desc     UPDATE athletes BMI
// @access   Private

  router.put(
    '/bmi',
    [
      auth,
      [
        check('weight', 'Weight is required')
          .not()
          .isEmpty()
      ]
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const athlete = await Athlete.findOne({ user: req.user.id });

      const {
        weight
      } = req.body;

      const bmiNumber = bmi.calculateBmi(weight, athlete.height);
  
      try {  
        athlete.weight.push(weight);
        athlete.bmi.push(bmiNumber);

        await athlete.save();
  
        res.json(athlete);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

// @route    UPDATE api/athlete
// @desc     UPDATE athletes Body Fat
// @access   Private

router.put(
  '/bodyFat',
  [
    auth,
    [
      check('neck', 'Neck numbers is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const athlete = await Athlete.findOne({ user: req.user.id });

    const {
      neck,
      waist,
      hip
    } = req.body;

    const bodyFatNumber = bodyFat.calculateBodyFat(neck, waist, hip, athlete.gender, athlete.height)

    try {  
      athlete.bodyFat.push(bodyFatNumber);
      athlete.neck.push(neck);
      athlete.waist.push(waist);
      athlete.hip.push(hip);

      await athlete.save();

      res.json(athlete);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/athlete
// @desc     Delete athlete, user & workouts
// @access   Private
router.delete('/', auth, async (req, res) => {
  try {
    // Remove athlete
    await Athlete.findOneAndRemove({ user: req.user.id });
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'Athlete deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;