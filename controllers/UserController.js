const { registerValidation } = require('../helpers/RouteHelpers')

const register = (req, res) => {

    const { error } = registerValidation(req.body)
    if (err) return res.status(400).json({ success: false, message: error.details[0].message })
    
    
    return res.status(200).json({ msg: 'hello' })
}

const login = (req, res) => {
    return res.status(200).json({ msg: 'hello' })
}

module.exports = {
    register, login
}