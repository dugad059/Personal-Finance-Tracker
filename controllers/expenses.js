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
expensesRouter.put("/:id", (req, res) => {
    Expense.findByIdAndUpdate( req.params.id, req.body, (error, updatedExpense) => {
        res.redirect(`/expenses/${req.params.id}`)
    })
  })

// Create
expensesRouter.post('/', (req, res) => {
    Expense.create(req.body, (error, expense) => {
        res.redirect('/expenses');
    });
})

// Edit
expensesRouter.get('/:id/edit', (req, res) => {
    Expense.findById(req.params.id, (error, foundExpense) => {
        res.render('edit', {
            expense: foundExpense,
        })
    })
})

// Show
expensesRouter.get('/:id', (req, res) => {
    Expense.findById(req.params.id, (error, expense) => {
        res.render('show', { expense })
    })
})







module.exports = expensesRouter;