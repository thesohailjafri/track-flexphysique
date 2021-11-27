const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userWeight: {
        type: Number,
        required: true
    },
    exerciseName: {
        type: String,
        required: true,
        uppercase: true
    },
    isExeriseHoldType: {
        type: Boolean,
        default: false
    },
    holdTimeInSec: {
        type: Number,
    },
    reps: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
},
    {
        timestamps: true
    }
)


module.exports = mongoose.model('calisthenic-records', schema)