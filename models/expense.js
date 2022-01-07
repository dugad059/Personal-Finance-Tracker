const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const expenseSchema = new Schema ({
    name: {type: String, required: true},
    date: {type: String, required: true},
    amount: {type: Number, required: true},
    description: {type: String, required: false}
}, {timestamps: true});

module.exports = mongoose.model("User", expenseSchema)