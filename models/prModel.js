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
    liftedWeight: {
        type: Number,
        required: true
    },
    liftedReps: {
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


module.exports = mongoose.model('personal-records', schema)