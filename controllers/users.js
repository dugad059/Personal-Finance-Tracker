const express = require('express');
const usersRouter = express.Router();
const User = require('../models/user');
const Credit = require('../models/credit');
const Debit = require('../models/debit');

// Dashboard
usersRouter.get('/dashboard', (req, res) => {
    Credit.find({}, (err, foundCredits) => {
        Debit.find({}, (err, foundDebits) => {
            User.find({}, (err, foundUsers) => {
                res.render("dashboard", {
                    cedits: foundCredits,
                    debits: foundDebits,
                    users: foundUsers
                })
            })
        })
    })
})


usersRouter.get('login', (req, res) => {
    res.render('users/login');
})






module.exports = usersRouter;