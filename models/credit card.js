const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const creditSchema = new Schema ({
    name: {type: String, required: true},
    date: {type: String, required: true},
    amount: {type: String, required: true},
    description: {type: String, required: false}
}, {timestamps: true});

module.exports = mongoose.model("Credit", creditSchema)