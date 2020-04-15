const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Exercise = require('../../models/Exercise');

// @route   POST api/exercise
// @desc    Create an exercise
// @access  Private
router.post(
  '/',
    [
      check('name', 'name is required')
        .not()
        .isEmpty(),
      check('description', 'description is required')
        .not()
        .isEmpty()
    ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newExercise = new Exercise({
          name: req.body.name,
          description: req.body.description,
          muscles: req.body.muscles,
          exerciseType: req.body.exerciseType,
          mechanicsType: req.body.mechanicsType,
          level: req.body.level,
        });
  
        const exercise = await newExercise.save();
  
        res.json(exercise);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

// @route    GET api/exercise
// @desc     Get all exercises
// @access   Private
router.get('/', async (req, res) => {
    try {
      const exercise = await Exercise.find().sort({ date: -1 });
      res.json(exercise);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

module.exports = router;