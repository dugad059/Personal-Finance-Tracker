const express = require('express');
const bcrypt = require('bcrypt')
const debitsRouter = express.Router();
const Debit = require('../models/debit');
const User = require('../models/user');

// Index
debitsRouter.get('/', (req, res) => {
    Debit.find({}, (error, allDebits) => {
        res.render('debit/index', { allDebits }) 
    })
})

// New
debitsRouter.get('/new', (req, res) => {
    res.render('debit/new');
})

// Delete
debitsRouter.delete('/:id', (req, res) => {
    Debit.findByIdAndDelete(req.params.id, (error, data) => {
        res.redirect('/debit')
    })
})

// Update
debitsRouter.put("/:id", (req, res) => {
    Debit.findByIdAndUpdate( req.params.id, req.body,  { new: true, }, (error, updatedDebit) => {
        res.redirect(`/debit/${req.params.id}`)
    })
  })

// Create
debitsRouter.post('/', (req, res) => {
    Debit.create(req.body, (error, debit) => {
        res.redirect('/debit');
    });
})

// Edit
debitsRouter.get('/:id/edit', (req, res) => {
    Debit.findById(req.params.id, (error, foundDebit) => {
        res.render('debit/edit', {
            debit: foundDebit,
        })
    })
})

// Show
debitsRouter.get('/:id', (req, res) => {
    Debit.findById(req.params.id, (error, debit) => {
        res.render('debit/show', { debit })
    })
})







module.exports = debitsRouter;