const routes = require('express').Router()
const routesSubject = require('./subject/subject')
const routesTeacher = require('./teacher/teacher')

routes.use('/subject',routesSubject)
routes.use('/teacher',routesTeacher)

routes.get('/',function(req,res){
    res.send('this is Homepage')
})

module.exports = routes