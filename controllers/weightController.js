const error = require('../errors')
const Weight = require('../models/weightModel')
const { StatusCodes } = require('http-status-codes')

const getWeightTimeline = async (req, res) => {
    const { userId } = req.user
    const weightLogs = await Weight.find({ userId })
    res.send(weightLogs)
}

const logWeight = async (req, res) => {
    const { weight, date } = req.body
    console.log(typeof weight)
    if (!weight || typeof weight !== 'number') {
        throw new error.BadRequestError('Invalid Weight')
    }
    const { userId } = req.user
    console.log(userId, date, weight)
    const newWeightLog = await Weight.create({ userId, date, weight })
    res.status(StatusCodes.CREATED).json(newWeightLog)
}

module.exports = {
    logWeight, getWeightTimeline
}