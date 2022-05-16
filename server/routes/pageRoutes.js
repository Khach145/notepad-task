const express = require('express')
const routes = express.Router();
const PageController = require('../controllers/page')

routes.post('/new-page', PageController.newPage)
routes.get('/get-session-page', PageController.getSessionPages)
routes.get('/delete-page', PageController.deletePage)

module.exports = routes;