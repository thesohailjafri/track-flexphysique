const express = require('express')
const router = express.Router()

const {
    getGymPersonRecords,
    logGymPersonRecord,
    updateGymPersonRecord,
    removeGymPersonRecord
} = require('../controllers/gymController')

router.route('/')
    .get(getGymPersonRecords)
    .post(logGymPersonRecord)

router.route('/:id')
    .patch(updateGymPersonRecord)
    .delete(removeGymPersonRecord)

module.exports = router