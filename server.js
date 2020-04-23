const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const auth = require('./middleware/auth');

const User = require('./models/User');

const app = express();
// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/coach', require('./routes/api/coach'));
app.use('/api/workouts', require('./routes/api/workouts'));
app.use('/api/payment', require('./routes/api/payment'));
app.use('/api/athlete', require('./routes/api/athlete'));
app.use('/api/exercise', require('./routes/api/exercise'));

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
    if (process.env.NODE_ENV === 'production') {
      return res.redirect('https://tranquil-dawn-70222.herokuapp.com/')
    } else {
      return res.redirect('http://localhost:3000');
    }
 });

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));