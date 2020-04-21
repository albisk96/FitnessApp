const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const auth = require('./middleware/auth');
const User = require('./models/User');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/coach', require('./routes/api/coach'));
app.use('/api/workouts', require('./routes/api/workouts'));
app.use('/api/payment', require('./routes/api/payment'));
app.use('/api/athlete', require('./routes/api/athlete'));
app.use('/api/exercise', require('./routes/api/exercise'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

app.get('/confirmation', auth, async (req, res) => {
  var userId = req.user.id;

  var conditions = {
    _id : userId 
  }

  var update = {
    confirmed: true
  }

    User.findOneAndUpdate(conditions,update,function(error,result){
      if(error){
      }else{
        console.log(result);
      }
    });
    return res.redirect('http://localhost:3000');
 });


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));