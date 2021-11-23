

const express = require('express')
const router = express.Router()
const {
    getWeightTimeline, logWeight
} = require('../controllers/weightController')

router.route('/').get(getWeightTimeline).post(logWeight)

module.exports = router