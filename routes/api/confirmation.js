const express = require('express');
const router = express.Router();

const User = require('../../models/User');

router.get('/:id', async (req, res) => {

    let userId = req.params.id;
  console.log(`User ID ${userId}`)

    let conditions = {
      _id : userId
    }

    console.log()
  
    let update = {
      confirmed: true
    }

    const user = await User.findOneAndUpdate(conditions,update, () => console.log('FIND ONE AND UPDATE BLOCK'), {
      new: true
    })
        
      if(user.confirmed){
        console.log(`User ${user}`)
        console.log(`User confirmed ${user.confirmed}`)
        console.log(`env ${NODE.ENV}`)
          return res.redirect('http://tranquil-dawn-70222.herokuapp.com')

      } else {
        console.log('error')
      }
   });

   module.exports = router;