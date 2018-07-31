const routes = require('express').Router();
const routesTeacher = require('./teachers')
const routesSubject = require('./subjects')

routes.use(routesTeacher)
routes.use(routesSubject)

module.exports = routes;