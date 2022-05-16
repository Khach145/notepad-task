const express = require('express')
const routes = express.Router();
const SessionController = require('../controllers/session')

routes.post('/new_session', SessionController.newSession)
routes.get('/sessions', SessionController.getSessions)
routes.get('/delete-session', SessionController.deleteSession)

module.exports = routes;