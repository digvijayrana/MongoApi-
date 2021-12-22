const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    designation: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
}, { timestamps: true })
const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee