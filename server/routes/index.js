const express = require('express')
const routes = express();
// const AuthController = require('../controllers/auth');
// const SessionController = require('../controllers/session')
// const authRoutes = require('./authRoutes');
const sessionRoutes = require('./sessionRoutes')
const pageRoutes = require('./pageRoutes')
const notepadRoutes = require('./notepadRoutes')

// routes.use('/auth', authRoutes);
routes.use('/', sessionRoutes)
routes.use('/', pageRoutes)
routes.use('/', notepadRoutes)

module.exports = routes;