const express = require('express')
const router = express.Router()

const {
    getPersonRecords, logPersonRecord, updatePersonRecord, removePersonRecord
} = require('../controllers/recordController')

router.route('/')
    .get(getPersonRecords)
    .post(logPersonRecord)

router.route('/:id')
    .patch(updatePersonRecord)
    .delete(removePersonRecord)

module.exports = router