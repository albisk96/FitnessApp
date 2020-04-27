const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const { getPagingQuery } = require('../../helpers/api-pagination');
const { getSearchQuery } = require('../../helpers/search');

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
      const perPage = req.query.page;
      const { size, page } = getPagingQuery(perPage - 1)

      const searchQuery = getSearchQuery(req.query.query || '', 'index')

      const exercise = await Exercise.find({...searchQuery}).limit(size).skip(page * size).sort({ date: -1 });
      const exercisesCount = await Exercise.countDocuments({...searchQuery})
      console.log(searchQuery)
      res.setHeader('x-total-count', exercisesCount)
      res.json(exercise);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  router.get('/migrate', async (req, res) => {
    try {
      const exercise = await Exercise.find({});
      exercise.forEach(async x => await x.save());
      res.send('migrated')
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

module.exports = router;