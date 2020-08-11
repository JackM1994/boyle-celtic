const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const SERVER_CONFIGS = require('./constants/server');



require('dotenv').config();

const users = require('./routes/api/users');
const payment = require('./routes/api/payment');

const app = express();

// Enable all CORS Requests
app.use(cors());

//Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
    .connect(
        db,
        { useNewUrlParser: true}
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Routes
app.use('/api/users', users);

app.use('/api/payment', payment);

const PORT = process.env.PORT || 5000;

app.listen(SERVER_CONFIGS.PORT, error => {
    if(error) throw error;
    console.log(`Server up and running on port ${PORT} !`);});