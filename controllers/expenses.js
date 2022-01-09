const express = require('express');
const expensesRouter = express.Router();
const Expense = require('../models/expense');


// Index
expensesRouter.get('/', (req, res) => {
    Expense.find({}, (error, allExpenses) => {
        res.render('index', { allExpenses }) 
    })
})

// New
expensesRouter.get('/new', (req, res) => {
    res.render('new');
})

// Delete
expensesRouter.delete('/:id', (req, res) => {
    Expense.findByIdAndDelete(req.params.id, (error, data) => {
        res.redirect('/expenses')
    })
})

// Update

// Create
expensesRouter.post('/', (req, res) => {
    Expense.create(req.body, (error, expense) => {
        res.redirect('/expenses');
    });
})

// Edit

// Show
expensesRouter.get('/:id', (req, res) => {
    Expense.findById(req.params.id, (error, expense) => {
        res.render('show', { expense })
    })
})







module.exports = expensesRouter;