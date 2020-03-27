const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

router.post('/',auth, async (req, res) => {  
      try {
        const user = await User.findById(req.user.id).select('-password');
  
        const newAthlete = new Athlete({
          user: req.user.id,
          name: req.user.name,
          email: req.user.email,
          DOB: req.body.DOB,
          gender: req.body.gender,
          days_per_week: req.body.days_per_week,
          goal: req.body.goal,
          level: req.body.level,
        });
  
        const athlete = await newAthlete.save();
  
        res.json(athlete);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );


module.exports = router;