const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const config = require('config');
const stripeSecretKey = config.get('stripeSecretKey');
const stripe = require('stripe')(stripeSecretKey);
const nodemailer = require('nodemailer'); 

const Workout = require('../../models/Workout');
const User = require('../../models/User');
const Coach = require('../../models/Coach');
const Athlete = require('../../models/Athlete')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.get('myGmailUser'),
    pass: config.get('myGmailPassword'),
  },
});

  router.post('/:workoutId/:coachId', auth, async(req, res) => {
    
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };
    try{

      const workoutId = req.params.workoutId;
      const coachId = req.params.coachId
      
      const user = await User.findById(req.user.id).select('-password');
      const workout = await Workout.findById(workoutId).populate('athlete');
      const coach = await Coach.findOne({user: coachId});
      const currentAthlete = await Athlete.findOne({ user: req.user.id})
      
      await Workout.findByIdAndUpdate(
        {_id: req.params.workoutId},
        {$inc: {entries: -1}})
     

      workout.athlete.push(currentAthlete);
      
      workout.coach = coach._id;

      await workout.save();

        stripe.charges.create(body, (stripeErr, stripeRes) => {
            if (stripeErr || workout.entries < 0) {
              res.status(500).send({ error: stripeErr });
            } else {
              res.status(200).send({ success: stripeRes });
            }
          });

          transporter.sendMail({
            to: user.email,
            subject: 'Workout Confirmation',
            html: `<h3>Hello, ${user.name},</h3>
            <h3>Your workout payment and registration was successful</h3> <br />
            <p>Please show this confirmation to your coach or gym administration and find the details below. Have a good workout!</p>
            <p>Your workout will be on ${new Date(workout.when)} at ${workout.address}. You paid for it ${workout.price}</p>
            `,
          })

    }catch(error){
        console.log(error.message);

        res.status(500).send('Server Error')
    }
  })

  router.post('/:coachId', auth, async(req, res) => {
    console.log('ROUTE PAYMENT')
    const date = req.body.date
    console.log(date)
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };
    try{
      const coachId = req.params.coachId
      const user = await User.findById(req.user.id).select('-password');
      const coach = await Coach.findById(coachId).populate('user');
      const athlete = await Athlete.findOne({ user: req.user.id})

      const newWorkout = new Workout({
        title: 'Individual workout',
        name: coach.user.name,
        description: `Individual workout with ${coach.user.name}`,
        gym: coach.gym,
        price: coach.workSchedule.price,
        level: 'beginner',
        user: user.id,
        when: new Date(date),
        group: false
      });

      const workout = await newWorkout.save();

      coach.workSchedule.workouts.unshift(workout._id);

      await coach.save();
     
      workout.athlete.push(athlete);
      workout.coach = coach._id;
      await workout.save();     

        stripe.charges.create(body, (stripeErr, stripeRes) => {
            if (stripeErr) {
              console.log(stripeErr)
              res.status(500).send({ error: stripeErr });
            } else {
              res.status(200).send({ success: stripeRes });
            }
          });

          transporter.sendMail({
            to: user.email,
            subject: 'Workout Confirmation',
            html: `<h3>Hello, ${user.name},</h3>
            <h3>Your workout payment and registration was successful</h3> <br />
            <p>Please show this confirmation to your coach or gym administration and find the details below. Have a good workout!</p>
            <p>Your workout will be on ${date} at ${coach.gym}. You paid for it ${coach.workSchedule.price}</p>
            `,
          })

    }catch(error){
        console.log(error.message);

        res.status(500).send('Server Error')
    }
  })

module.exports = router; 