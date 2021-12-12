const error = require('../errors')
const CalisthenicRecord = require('../models/calisthenicModel')
const Weight = require('../models/weightModel')
const { StatusCodes } = require('http-status-codes')


//TEST
const getCaliPersonRecords = async (req, res) => {
    const { userId } = req.user
    const { exerciseName, reps, sort, fields } = req.query
    const queryObject = {}

    //creating query ibject
    queryObject.userId = userId
    if (exerciseName) {
        queryObject.exerciseName = exerciseName
    }
    if (reps) {
        queryObject.reps = reps
    }

    //finding data w.r.t query
    let result = CalisthenicRecord.find(queryObject)

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

const logCaliPersonRecord = async (req, res) => {
    const { userId } = req.user
    const currentWeight = await Weight.findOne({ userId }, { userWeight: 1 })
    const newRecordLog = await CalisthenicRecord.create({
        ...req.body,
        userId,
        userWeight: currentWeight.userWeight
    })
    res.status(StatusCodes.CREATED).json(newRecordLog)
}

const updateCaliPersonRecord = async (req, res) => {
    const { id: logId } = req.params
    if (!logId) {
        throw new error.BadRequestError('Invalid id')
    }
    const { userId } = req.user
    const updatedRecord = await CalisthenicRecord.findOneAndUpdate(
        {
            _id: logId,
            userId
        },
        {
            ...req.body
        },
        {
            new: true,
            runValidators: true
        }
    )
    if (!updatedRecord) throw new error.NotFoundError('Not found the log')

    res.status(StatusCodes.OK).json(updatedRecord)
}

const removeCaliPersonRecord = async (req, res) => {
    const { id: logId } = req.params
    if (!logId) {
        throw new error.BadRequestError('Invalid id')
    }

    const { userId } = req.user
    const removedRecord = await CalisthenicRecord.findOneAndRemove({
        _id: logId,
        userId
    })
    if (!removedRecord) throw new error.NotFoundError('Not found the log')

    res.status(StatusCodes.OK).json({ removedRecord })
}





module.exports = {
    getCaliPersonRecords,
    logCaliPersonRecord,
    updateCaliPersonRecord,
    removeCaliPersonRecord
}