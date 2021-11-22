const error = require('../errors')
const Weight = require('../models/weightModel')
const { StatusCodes } = require('http-status-codes')

const getWeightTimeline = (req, res) => {
    res.send(req.user)
}

const logWeight = async (req, res) => {

    const { weight, date } = req.body
    if (!weight || typeof weight !== Number) {
        throw new error.BadRequestError('Invalid Weight')
    }
    date ? date : new Date.now()
    const { id: user } = req.user
    const newWeightLog = await Weight.create(user, date, weight)
    res.status(StatusCodes.CREATED).json(newWeightLog)
}

module.exports = {
    logWeight, getWeightTimeline
}