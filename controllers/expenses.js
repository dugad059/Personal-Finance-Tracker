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

// Update

// Create
expensesRouter.post('/', (req, res) => {
    Expense.create(req.body, (error, expense) => {
        res.redirect('/expenses');
    });
})

// Edit

// Show








module.exports = expensesRouter;