// Dependencies
const express = require('express')
const morgan = require('morgan');
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const expressSession = require('express-session')
const expensesController = require('./controllers/expenses')



const app = express();


// Configure Server Settings
require('dotenv').config();
app.set('view engine', 'ejs');
const { PORT, DATABASE_URL, SECRET } = process.env;


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
app.use(expressSession({
    secret: SECRET,
    resave: false,
    saveUninitialized: false, 
}));
app.use(function(req, res, next) {
    console.log('Session Store: ', req.session);
    next();
})

app.get('/', (req, res) => {
    res.redirect('/expenses');
})


app.use('/expenses', expensesController)



// Listener
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))