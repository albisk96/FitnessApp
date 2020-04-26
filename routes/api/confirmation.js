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

    const user = await User.findOneAndUpdate(conditions,update, {
      new: true
    })
        
      if(user.confirmed){
          return res.redirect('http://tranquil-dawn-70222.herokuapp.com')
      } else {
        console.log('error')
      }
   });

   module.exports = router;