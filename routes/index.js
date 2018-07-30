const routes = require('express').Router();
const routesTeacher = require('./teachers');
const routesSubject = require('./subjects');

routes.get('/', (req, res) => {
    res.render('homepage', {title: `Welcome to School's homepage!`})
})

routes.use(routesTeacher);
routes.use(routesSubject);

module.exports = routes;