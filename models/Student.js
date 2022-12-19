const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 3,
        max: 40
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    other: {
        type: Array,
        default: [],
    },
    studentRegistrations: {
        type: Array,
        default: [],
    }
})

module.exports = mongoose.model("Student", studentSchema);