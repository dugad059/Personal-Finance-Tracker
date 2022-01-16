const express = require('express');
const bcrypt = require('bcrypt')
const creditsRouter = express.Router();
const Credit = require('../models/credit');

// Index
creditsRouter.get('/', (req, res) => {
    Credit.find({}, (error, allCredits) => {
        res.render('credit/index', { allCredits }) 
    })
})

// New
creditsRouter.get('/new', (req, res) => {
    res.render('credit/new');
})

// Delete
creditsRouter.delete('/:id', (req, res) => {
    Credit.findByIdAndDelete(req.params.id, (error, data) => {
        res.redirect('/credit')
    })
})

// Update
creditsRouter.put("/:id", (req, res) => {
    Credit.findByIdAndUpdate( req.params.id, req.body,  { new: true, }, (error, updatedCredit) => {
        res.redirect(`/credit/${req.params.id}`)
    })
  })

// Create
creditsRouter.post('/', (req, res) => {
    Credit.create(req.body, (error, credit) => {
        res.redirect('/credit');
    });
})

// Edit
creditsRouter.get('/:id/edit', (req, res) => {
    Credit.findById(req.params.id, (error, foundCredit) => {
        res.render('credit/edit', {
            credit: foundCredit,
        })
    })
})

// Show
creditsRouter.get('/:id', (req, res) => {
    Credit.findById(req.params.id, (error, credit) => {
        res.render('credit/show', { credit })
    })
})







module.exports = creditsRouter;