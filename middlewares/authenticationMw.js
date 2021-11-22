const jwt = require('jsonwebtoken')
const error = require('../errors')
const { isTokenValid } = require('../utils/jwt')

const authChecker = async (req, res, next) => {
    const token = req.signedCookies.token

    if (!token) {
        throw new error.UnauthenticatedError('Authentication Invalid')
    }

    try {
        const { name, userId } = isTokenValid({ token })
        req.user = { name, userId }
        next()
    } catch (error) {
        throw new error.UnauthenticatedError('Authentication Invalid')
    }

}

module.exports = authChecker