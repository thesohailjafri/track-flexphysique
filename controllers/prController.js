const error = require('../errors')
const Pr = require('../models/prModel')
const Weight = require('../models/weightModel')
const { StatusCodes } = require('http-status-codes')
const { query } = require('express')

const getPrTimeline = async (req, res) => {
    const { userId } = req.user
    const { liftedReps, sort, fields, liftedWeight } = req.query
    const queryObject = {}

    //creating query ibject
    queryObject.userId = userId
    if (liftedReps) {
        queryObject.liftedReps = liftedReps
    }
    if (liftedWeight) {
        queryObject.liftedWeight = liftedWeight
    }

    //finding data w.r.t query
    let result = Pr.find(queryObject)

    //sorting data
    if (sort) {
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    } else {
        result = result.sort('-date')
    }

    //which fields to display
    if (fields) {
        const fieldsList = fields.split(',').join(' ')
        result = result.select(fieldsList)
    }

    const prLogs = await result


    res.send(prLogs)
}



const logPr = async (req, res) => {
    const { liftedWeight, liftedReps, date } = req.body
    if (!liftedWeight || typeof liftedWeight !== 'number' ||
        !liftedReps || typeof liftedReps !== 'number') {
        throw new error.BadRequestError('Invalid lifted-weight or lifted-reps')
    }
    const { userId } = req.user
    const currentWeight = await Weight.findOne({ userId }, { userWeight: 1 })
    const newPrLog = await Pr.create({
        userId, date, liftedWeight,
        liftedReps, userWeight: currentWeight.userWeight
    })
    res.status(StatusCodes.CREATED).json(newPrLog)
}

module.exports = {
    getPrTimeline, logPr
}