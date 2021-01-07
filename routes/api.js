const api = require('express').Router();

const UserController = require('../controllers/UserController')

api.post('/register', UserController.register)
api.post('/login', UserController.login)


module.exports = api