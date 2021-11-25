const express = require('express')
const router = express.Router()

const {
    getPrTimeline, logPr, getArmTimeline
} = require('../controllers/prController')

router.route('/').get(getPrTimeline).post(logPr)

module.exports = router