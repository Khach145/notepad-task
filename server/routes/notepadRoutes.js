const express = require('express');
const routes = express.Router()
const notepadController = require('../controllers/notepad')

routes.post('/new-notepad', notepadController.newNotepad)
routes.get('/get-notepad', notepadController.getNotepad)
routes.post('/set-notepad', notepadController.setNotepad)

module.exports = routes