const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is req"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is req"],
        minlength: [8, "password must be atleast 8 characters long"]

    }
}, { timestamps: true })

module.exports = mongoose.model("user", userSchema);
