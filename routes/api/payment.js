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
const Athlete = require('../../models/Athlete');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.get('myGmailUser'),
    pass: config.get('myGmailPassword'),
  },
});

  router.post('/:id', auth, async(req, res) => {

    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };
    try{
      
      await Workout.findByIdAndUpdate(
        {_id: req.params.id},
        {$inc: {entries: -1}})

      

      
      let workout = await Workout.findById(req.params.id);
      const user = await User.findById(req.user.id).select('-password');
      const athlete = await Athlete.findOne({user: req.user.id});


      const newReservation = {
        email: user.email,
        name: user.name,
        user: req.user.id
      };

      await workout.reservations.unshift(newReservation);
     
      await workout.save();

      const newWorkout = {
        workout: workout.id,
        name: workout.name,
        title: workout.title,
        address: workout.address,
        price: workout.price,
        when: workout.when
      }

      await athlete.reservations.unshift(newWorkout);
      
      await athlete.save();
      

        stripe.charges.create(body, (stripeErr, stripeRes) => {
            if (stripeErr || workout.entries < 0) {
              console.log(`Failed: ${workout.entries}`)
              res.status(500).send({ error: stripeErr });
            } else {
              console.log(`Success: ${workout.entries}`)
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

          console.log(user.email)

    }catch(error){
        console.log(error.message);

        res.status(500).send('Server Error')
    }
  })

module.exports = router; 