const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const User = require('../../models/User');

router.get('/:id', auth, async (req, res) => {

    let userId = req.params.id;

    let conditions = {
      _id : userId
    }
  
    let update = {
      confirmed: true
    }

    await User.findOneAndUpdate(conditions,update,function(error, result){
        if(error){
          console.log(error);
        } else {
          if(result.confirmed){
            if (process.env.NODE_ENV === 'production'){
              return res.redirect('http://tranquil-dawn-70222.herokuapp.com')
          } else {
            return res.redirect('http://localhost:3000');
          }
          }
        }
      });  
   });

   module.exports = router;