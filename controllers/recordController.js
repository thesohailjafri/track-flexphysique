const error = require('../errors')
const Record = require('../models/recordModel')
const Weight = require('../models/weightModel')
const { StatusCodes } = require('http-status-codes')

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
    let result = Record.find(queryObject)

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
    const newRecordLog = await Record.create({
        userId,
        date,
        liftedWeight,
        exerciseName,
        liftedReps,
        userWeight: currentWeight.userWeight
    })
    res.status(StatusCodes.CREATED).json(newRecordLog)
}

const updatePersonRecord = async (req, res) => {
    const { id: logId } = req.params
    if (!logId) {
        throw new error.BadRequestError('Invalid id')
    }
    const { liftedWeight, liftedReps } = req.body
    const updateObject = {}
    liftedWeight && (updateObject.liftedWeight = liftedWeight)
    liftedReps && (updateObject.liftedReps = liftedReps)

    const { userId } = req.user
    const updatedRecord = await Record.findOneAndUpdate({
        _id: logId,
        userId
    },
        updateObject,
        {
            new: true,
            runValidators: true
        }
    )
    if (!updatedRecord) throw new error.NotFoundError('Not found the log')

    res.status(StatusCodes.OK).json(updatedRecord)
}

const removePersonRecord = async (req, res) => {
    const { id: logId } = req.params
    if (!logId) {
        throw new error.BadRequestError('Invalid id')
    }

    const { userId } = req.user
    const removedRecord = await Record.findOneAndRemove({
        _id: logId,
        userId
    })
    if (!removedRecord) throw new error.NotFoundError('Not found the log')

    res.status(StatusCodes.OK).json({ removedRecord })
}





module.exports = {
    getPersonRecords, logPersonRecord, updatePersonRecord, removePersonRecord
}