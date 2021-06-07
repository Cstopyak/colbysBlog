const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    post_id: {
        type: String,
        unique: true,
        required: true,
    },
    title: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: {
        type: Object,
        
    }
}, {timestamps: true})

module.exports = mongoose.model('post', postSchema);