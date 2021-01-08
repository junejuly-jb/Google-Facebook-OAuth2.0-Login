const api = require('express').Router();

const UserController = require('../controllers/UserController')
const passport = require('passport')
const passportConf = require('../passport')

api.post('/register', UserController.register)
api.post('/login', passport.authenticate('local', { session: false }), UserController.login)

api.get('/secret', passport.authenticate('jwt', { session: false }) , UserController.protectedRoute)

module.exports = api