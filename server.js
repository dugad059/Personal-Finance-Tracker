// Dependencies
const express = require('express')
const morgan = require('morgan');
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const debitsController = require('./controllers/debits')
const creditsController = require('./controllers/credits');
const { application } = require('express');



const app = express();


// Configure Server Settings
require('dotenv').config();
app.set('view engine', 'ejs');
const { PORT, DATABASE_URL } = process.env;


// Establish Connection to MongoDB
mongoose.connect(DATABASE_URL);


// Database Connection Error/Success
const db = mongoose.connection;
db
.on('connected', () => console.log('Connected to MongoDB'))
.on('disconnected', () => console.log('Disonnected from MongoDB'))
.on('error', (err) => console.log('An Error Has Occurred With MongoDB: ' + err.message));


// Mount Middleware
app.use(methodOverride('_method'))
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.redirect('/debit');
})


// Controllers
app.use('/credit', creditsController)
app.use('/debit', debitsController)




// Listener
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))



// test