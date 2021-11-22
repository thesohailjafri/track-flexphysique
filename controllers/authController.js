const User = require('../models/userModel')
const error = require('../errors')
const { StatusCodes } = require('http-status-codes')
const { attachCookiesToResponse, createUser } = require('../utils/jwt')


const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        throw new error.BadRequestError('Please provide email and password')
    }

    const user = await User.findOne({ email })
    if (!user) throw new error.BadRequestError('Invalid credentials')
    const isMatch = await user.comparePassword(password)
    if (!isMatch) throw new error.BadRequestError('Invalid credentials')
    const filteredUser = createUser(user)
    attachCookiesToResponse({ res, user: filteredUser })

    res.status(StatusCodes.OK).json({ user: filteredUser })
}

const register = async (req, res) => {
    const { email, lname, fname, password } = req.body
    if (!email || !lname || !fname || !password) {
        throw new error.BadRequestError('Please provide email, name and password')
    }
    const user = {
        email,
        name: {
            first: fname,
            last: lname
        },
        password
    }

    const userData = await User.create(user)
    res.status(StatusCodes.CREATED).json(userData)

}

module.exports = { login, register }