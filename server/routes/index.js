const express = require('express')
const routes = express();
const sessionRoutes = require('./sessionRoutes')
const pageRoutes = require('./pageRoutes')
const notepadRoutes = require('./notepadRoutes')

routes.use('/', sessionRoutes)
routes.use('/', pageRoutes)
routes.use('/', notepadRoutes)

module.exports = routes;