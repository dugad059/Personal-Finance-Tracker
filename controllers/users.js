const express = require('express');
const usersRouter = express.Router();
const User = require('../models/user');


// Index
usersRouter.get('/', (req, res) => {
    res.send('hello')
    // User.find({}, (error, allUsers) => {
    //     res.render('index', { allUsers }) 
    // })
})




// New

// Delete

// Update

// Create

// Edit

// Show








module.exports = usersRouter;