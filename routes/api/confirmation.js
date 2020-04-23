const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const User = require('../../models/User');

router.get('/', auth, async (req, res) => {
    var userId = req.user.id;
  
    var conditions = {
      _id : userId 
    }
  
    var update = {
      confirmed: true
    }
  
    console.log(userId)
  
      User.findOneAndUpdate(conditions,update,function(error,result){
        if(error){
          console.log(error);
        }else{
          console.log(result);
        }
      });

    // User.updateOne(
    //     {
    //       _id: userId,
    //     },
    //     {
    //      update
    //     }
    //   )

      console.log(req.user.confirmed)

      if (process.env.NODE_ENV === 'production') {
        return res.redirect('http://tranquil-dawn-70222.herokuapp.com')
      } else {
        return res.redirect('http://localhost:3000');
      }
   });

   module.exports = router;