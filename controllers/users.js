const express = require('express');
const user = require('../models/user');
const usersRouter = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

// Login
usersRouter.get('/login', (req, res) => {
    res.render('login', {error: ''});
});

usersRouter.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (error, user) => {
        if (!user) return res.render('login', { error: 'invalid credentials' });
        const isMatched = bcrypt.compareSync(req.body.password, user.password)
        if (!isMatched) return res.render('login', { error: 'invalid credentials' });
        req.session.user = user._id;
        res.redirect('/');
    })
})

// Sign-Up
usersRouter.get('/signup', (req, res) => {
    res.render('signup');
});

usersRouter.post('/signup', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(12));
    User.create(req.body, (error, user) => {
        res.redirect('/login')
    })
})

// Logout 
usersRouter.get('/logout', (req, res) => {
    req.session.destroy(function () {
        res.redirect('/');
    })
});

module.exports = usersRouter;