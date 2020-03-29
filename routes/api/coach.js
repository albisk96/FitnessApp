const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
// bring in normalize to give us a proper url, regardless of what user entered
const normalize = require('normalize-url');

const Coach = require('../../models/Coach');
const User = require('../../models/User');
const Workout = require('../../models/Workout');

// @route    GET api/coach/me
// @desc     Get current users coach
// @access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const coach = await Coach.findOne({user: req.user.id}).populate('user');

    if (!coach) {
      return res.status(400).json({ msg: 'There is no coach for this user' });
    }

    // only populate from user document if coach exists
    res.json(coach);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/coach
// @desc     Create or update user coach
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('bio', 'Bio is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      city,
      website,
      bio,
      DOB,
      youtube,
      twitter,
      instagram,
      facebook
    } = req.body;

    const coachFields = {
      user: req.user.id,
      name: req.user.name,
      email: req.user.email,
      DOB,
      city,
      website: website === '' ? '' : normalize(website, { forceHttps: true }),
      bio
    };

    // Build social object and add to coachFields
    const socialfields = { youtube, twitter, instagram, facebook };

    for (const [key, value] of Object.entries(socialfields)) {
      if (value)
        socialfields[key] = normalize(value, { forceHttps: true });
    }
    coachFields.social = socialfields;

    try {
      // Using upsert option (creates new doc if no match is found):
      let coach = await Coach.findOneAndUpdate(
        { user: req.user.id },
        { $set: coachFields },
        { new: true, upsert: true }
      );
      res.json(coach);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/coach
// @desc     Get all coaches
// @access   Public
router.get('/', async (req, res) => {
  try {
    const coaches = await Coach.find().populate('user', ['name', 'avatar', 'email']);
    res.json(coaches);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/coach/user/:user_id
// @desc     Get coach by user ID
// @access   Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const coach = await Coach.findOne({
      user: req.params.user_id
    }).populate('user', ['name', 'avatar']);

    if (!coach) return res.status(400).json({ msg: 'coach not found' });

    res.json(coach);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'coach not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/coach
// @desc     Delete coach, user & workouts
// @access   Private
router.delete('/', auth, async (req, res) => {
  try {
    // Remove user workouts
    await Workout.deleteMany({ user: req.user.id });
    // Remove coach
    await Coach.findOneAndRemove({ user: req.user.id });
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/coach/achievements
// @desc     Add coach achievements
// @access   Private
router.put(
  '/achievements',
  [
    auth,
    [
      check('title', 'Title is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      title,
      date
    } = req.body;

    const newAch = {
      title,
      date
    };

    try {
      const coach = await Coach.findOne({ user: req.user.id });

      coach.achievements.unshift(newAch);

      await coach.save();

      res.json(coach);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/coach/achievements/:ach_id
// @desc     Delete achievements from coach
// @access   Private

router.delete('/achievements/:ach_id', auth, async (req, res) => {
  try {
    const foundCoach = await Coach.findOne({ user: req.user.id });

    foundCoach.achievements = foundCoach.achievements.filter(
      ach => ach._id.toString() !== req.params.ach_id
    );

    await foundCoach.save();
    return res.status(200).json(foundCoach);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
});

// @route    PUT api/coach/education
// @desc     Add coach education
// @access   Private
router.put(
  '/education',
  [
    auth,
    [
      check('school', 'School is required')
        .not()
        .isEmpty(),
      check('degree', 'Degree is required')
        .not()
        .isEmpty(),
      check('fieldofstudy', 'Field of study is required')
        .not()
        .isEmpty(),
      check('from', 'From date is required and needs to be from the past')
        .not()
        .isEmpty()
        .custom((value, { req }) => (req.body.to ? value < req.body.to : true))
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    } = req.body;

    const newEdu = {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    };

    try {
      const coach = await Coach.findOne({ user: req.user.id });

      coach.education.unshift(newEdu);

      await coach.save();

      res.json(coach);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/coach/education/:edu_id
// @desc     Delete education from coach
// @access   Private

router.delete('/education/:edu_id', auth, async (req, res) => {
  try {
    const foundCoach = await Coach.findOne({ user: req.user.id });
    foundCoach.education = foundCoach.education.filter(
      edu => edu._id.toString() !== req.params.edu_id
    );
    await foundCoach.save();
    return res.status(200).json(foundCoach);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
});

// @route    Post api/coach/comment/:id
// @desc     Comment on a coach
// @access   Private
router.post(
  '/comment/:id',
  [
    auth,
    [
      check('text', 'Text is required')
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
      const coach = await Coach.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        stars: req.body.stars,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      };

      coach.comments.unshift(newComment);

      await coach.save();

      res.json(coach.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/coach/comment/:id/:comment_id
// @desc     Delete comment
// @access   Private
router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
  try {
    const coach = await Coach.findById(req.params.id);

    // Pull out comment
    const comment = coach.comments.find(
      comment => comment.id === req.params.comment_id
    );
    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: 'Comment does not exist' });
    }
    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    coach.comments = coach.comments.filter(
      ({ id }) => id !== req.params.comment_id
    );

    await coach.save();

    return res.json(coach.comments);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
});

module.exports = router;