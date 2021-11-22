const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    user: {
        type: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    weight: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('Weight', schema)