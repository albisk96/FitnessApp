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

const Workout = require('../../models/Workout');

  router.post('/:id', auth, async(req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };

    await Workout.findByIdAndUpdate(
      {_id: req.params.id},
      {$inc: {entries: -1}})
    
    let workout = await Workout.findById(req.params.id)

    try{
        stripe.charges.create(body, (stripeErr, stripeRes) => {
            if (stripeErr || workout.entries < 0) {
              console.log(`Failed: ${workout.entries}`)
              res.status(500).send({ error: stripeErr });
            } else {
              console.log(`Success: ${workout.entries}`)
              res.status(200).send({ success: stripeRes });
            }
          });

    }catch(error){
        console.log(error.message);

        res.status(500).send('Server Error')
    }
  })

module.exports = router; 