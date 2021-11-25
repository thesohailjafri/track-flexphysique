const error = require('../errors')
const Pr = require('../models/prModel')
const Weight = require('../models/weightModel')
const { StatusCodes } = require('http-status-codes')
const { query } = require('express')

const getPersonRecords = async (req, res) => {
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

    const logRecord = await result
    res.status(StatusCodes.OK).json(logRecord)
}



const logPersonRecord = async (req, res) => {
    const { liftedWeight, liftedReps, exerciseName, date } = req.body
    if (!liftedWeight || typeof liftedWeight !== 'number' ||
        !liftedReps || typeof liftedReps !== 'number' || !exerciseName) {
        throw new error.BadRequestError('Invalid liftedWeight or liftedReps or exerciseName')
    }
    const { userId } = req.user
    const currentWeight = await Weight.findOne({ userId }, { userWeight: 1 })
    const newPrLog = await Pr.create({
        userId,
        date,
        liftedWeight,
        exerciseName,
        liftedReps,
        userWeight: currentWeight.userWeight
    })
    res.status(StatusCodes.CREATED).json(newPrLog)
}

const updatePersonRecord = async (req, res) => {
    const { id: logId } = req.params
    if (!logId) {
        throw new error.BadRequestError('Invalid id')
    }

    const { userId } = req.user
    const updatedRecord = await Weight.findOneAndUpdate({
        _id: logId,
        userId
    }, req.body, {
        new: true,
        runValidators: true
    })

    res.status(StatusCodes.OK).json(updatedRecord)
}

const removePersonRecord = async (req, res) => {
    const { id: logId } = req.params
    if (!logId) {
        throw new error.BadRequestError('Invalid id')
    }

    const { userId } = req.user
    const removedRecord = await Weight.findOneAndRemove({
        _id: logId,
        userId
    })

    res.status(StatusCodes.OK).json(removedRecord)
}





module.exports = {
    getPersonRecords, logPersonRecord, updatePersonRecord, removePersonRecord
}