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
const normalize = require('normalize-url');
const { google } = require("googleapis");
const { getPagingQuery } = require('../../helpers/api-pagination');
//const OAuth2 = google.auth.OAuth2;

const User = require('../../models/User');

// const oauth2Client = new OAuth2(
//   config.get('clientId'),
//   config.get('clientSecret'),
//   "https://developers.google.com/oauthplayground"
// );

// oauth2Client.setCredentials({
//   refresh_token: config.get('refreshToken')
// });
// const accessToken = oauth2Client.getAccessToken()

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     type: "OAuth2",
//        user: "albertas.kruzintaitis24@gmail.com", 
//        clientId: config.get('clientId'),
//        clientSecret: config.get('clientSecret'),
//        refreshToken: config.get('refreshToken'),
//        accessToken: accessToken
//   },
// });

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

      const avatar = normalize(
        gravatar.url(email, {
          s: '200',
          r: 'pg',
          d: 'mm'
        }),
        { forceHttps: true }
      );

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
          res.set('Set-Cookie', cookie.serialize('jwtToken', token, {path: '/', httpOnly: true }))
          res.json({ token, role: user.role, id: user.id });
        }
      );

      // let url = null;  
      // if (process.env.NODE_ENV === 'production') {
      //   url = `https://tranquil-dawn-70222.herokuapp.com/api/confirmation/${user.id}`
      // } else {
      //   url = `http://localhost:4000/api/confirmation/${user.id}`
      // }

      // transporter.sendMail({
      //   to: email,
      //   subject: 'Confirm Email',
      //   html: `Please click this link to confirm your email: <a href="${url}">${url}</a>`,
      // })
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
  const perPage = req.query.page;
  const { size, page } = getPagingQuery(perPage - 1)
  try {
    const users = await User.find({}).limit(size).skip(page * size).sort({ date: -1 });
    const userCount = await User.countDocuments({})
    res.setHeader('x-total-count', userCount)
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

// @route    Find api/user
// @desc     Find user
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    await User.findByIdAndUpdate({ _id: req.params.id });
    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;