const express = require('express');
const bcrypt = require('bcrypt')
const debtsRouter = express.Router();
const Debt = require('../models/debt');

// Index
debtsRouter.get('/', (req, res) => {
    Debt.find({}, (error, allDebts) => {
        res.render('index', { allDebts }) 
    })
})

// New
debtsRouter.get('/new', (req, res) => {
    res.render('new');
})

// Delete
debtsRouter.delete('/:id', (req, res) => {
    Debt.findByIdAndDelete(req.params.id, (error, data) => {
        res.redirect('/debts')
    })
})

// Update
debtsRouter.put("/:id", (req, res) => {
    Debt.findByIdAndUpdate( req.params.id, req.body,  { new: true, }, (error, updatedDebts) => {
        res.redirect(`/debts/${req.params.id}`)
    })
  })

// Create
debtsRouter.post('/', (req, res) => {
    Debt.create(req.body, (error, debt) => {
        res.redirect('/debts');
    });
})

// Edit
debtsRouter.get('/:id/edit', (req, res) => {
    Debt.findById(req.params.id, (error, foundDebt) => {
        res.render('edit', {
            debt: foundDebt,
        })
    })
})

// Show
debtsRouter.get('/:id', (req, res) => {
    Debt.findById(req.params.id, (error, debt) => {
        res.render('show', { debt })
    })
})







module.exports = debtsRouter;