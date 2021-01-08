const { response } = require('express')
const { registerValidation } = require('../helpers/RouteHelpers')
const User = require('../models/User')


const register = async (req, res) => {

    const { error } = registerValidation(req.body)
    if (error) return res.status(400).json({ success: false, message: error.details[0].message })
    
    const { email, password } = req.body

    const foundUser = await User.findOne({ email: email})
    if (foundUser) return res.status(403).json({ error: 'Email already exists' })

    const newUser = new User({ email, password })
    await newUser.save()
    return res.status(200).json({ msg: 'user created successfully' })

}

const login = (req, res) => {
    return res.status(200).json({ msg: 'hello' })
}

module.exports = {
    register, login
}