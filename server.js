// Dependencies
const express = require('express')
const morgan = require('morgan');
const mongoose = require('mongoose')
const expensesController = require('./controllers/expense')



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
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.get('/', (req, res)=> res.redirect('/expenses'));


app.use('/expenses', expensesController)



// Listener
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))