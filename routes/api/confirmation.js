const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Path = require('path-parser')
const { URL } = require('url');

const User = require('../../models/User');

router.get('/:id', auth, async (req, res) => {

    let userId = req.user.id;

    let conditions = {
      _id : userId
    }
  
    let update = {
      confirmed: true
    }

    if(req.params.id === userId){
      User.findOneAndUpdate(conditions,update,function(error,result){
        if(error){
          console.log(error);
        }
      });
    } else {
      console.log(`req.params.id    ${req.params.id}`)
      console.log(`req.user.id     ${userId}`)
    }
  
     

      if (process.env.NODE_ENV === 'production'){
          return res.redirect('http://tranquil-dawn-70222.herokuapp.com')
      } else {
        return res.redirect('http://localhost:3000');
      }
   });

   module.exports = router;