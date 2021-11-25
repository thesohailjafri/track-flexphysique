const express = require('express')
const router = express.Router()

const {
    getPersonRecords, logPersonRecord, updatePersonRecord, removePersonRecord
} = require('../controllers/prController')

router.route('/')
    .get(getPersonRecords)
    .post(logPersonRecord)
    .patch(updatePersonRecord)
    .delete(removePersonRecord)

module.exports = router