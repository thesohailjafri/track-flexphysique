const express = require('express')
const router = express.Router()

const {
    getCaliPersonRecords,
    logCaliPersonRecord,
    updateCaliPersonRecord,
    removeCaliPersonRecord
} = require('../controllers/calisthenicController')

router.route('/')
    .get(getCaliPersonRecords)
    .post(logCaliPersonRecord)

router.route('/:id')
    .patch(updateCaliPersonRecord)
    .delete(removeCaliPersonRecord)

module.exports = router