const express = require('express');
const router = express.Router();

const User = require('../../models/User');

router.get('/:id', async (req, res) => {

  let userId = req.params.id;

  let conditions = {
    _id : userId
  }
  let update = {
    confirmed: true
  }
  try {
    const user = await User.findOneAndUpdate(conditions,update, {
      new: true
    });
  
      if(user.confirmed){
        if (process.env.NODE_ENV === 'production'){
          return res.redirect('https://tranquil-dawn-70222.herokuapp.com')
          
        } else {
          return res.redirect('http://localhost:3000');
        }
      } else {
        console.log('error')
      }
    } catch (err){
      console.error(err.message);
      res.status(500).send('Server Error');
    }
   });
  
   module.exports = router;