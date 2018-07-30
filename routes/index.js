const routes = require('express').Router()
const routerTeacher = require('./teacherRoutes')
const routerSubject = require('./subjectRoutes')

routes.use('/teachers', routerTeacher)
routes.use('/subjects', routerSubject)

routes.get('/', function(req, res) {
    // res.send('masuk routes')
    res.render('home')
})

module.exports = routes