

const express = require('express')
const router = express.Router()
const {
    getWeightTimeline
} = require('../controllers/weightController')

router.route('/').get(getWeightTimeline)

module.exports = router