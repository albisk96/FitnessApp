const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const cookie = require('cookie');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const nodemailer = require('nodemailer'); 

const User = require('../../models/User');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.get('myGmailUser'),
    pass: config.get('myGmailPassword'),
  },
});

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, role } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });

      user = new User({
        name,
        email,
        avatar,
        password,
        role
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          let url = null;  
          if (process.env.NODE_ENV === 'production') {
            url = `https://tranquil-dawn-70222.herokuapp.com/confirmation`
          } else {
            url = `http://localhost:4000/confirmation`
          } 

          res.set('Set-Cookie', cookie.serialize('jwtToken', token, {path: '/', httpOnly: true }))
          res.json({ token });

          transporter.sendMail({
            to: email,
            subject: 'Confirm Email',
            html: `Please click this link to confirm your email: <a href="${url}">${url}</a>`,
          })
        },
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route    GET api/users
// @desc     Get all users
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const users = await User.find({}).sort({ date: -1 });
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/user
// @desc     Delete user
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    await User.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/users/
// @desc     Edit users
// @access   Private
router.put(
  '/:id',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty(),
      check('email', 'Email is required')
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
      name,
      email,
      role
    } = req.body;

    const newUser = {
      name,
      email,
      role
    };

    try {
      await User.findOneAndUpdate(
        {_id: req.params.id}, 
        {...newUser});
      res.sendStatus(204);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/users
// @desc     Get all users
// @access   Private
router.get('/:id', auth, async (req, res) => {
  try {
    const users = await User.findById(req.params.id).lean().select('name email role');
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



module.exports = router;