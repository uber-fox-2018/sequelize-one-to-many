const routes = require('express')();
const showTeachers = require('./ShowTeachers')
const addTeacher = require('./addTeacher')
const subjects = require('./showSubjects')

routes.get('/',(req,res)=>{
    res.render('home')
})

routes.get('/all-teachers-data', showTeachers)
routes.get('/all-teachers-data/:id', showTeachers)

routes.get('/all-teachers-add',addTeacher)
routes.post('/all-teachers-add', addTeacher)

routes.get('/all-subjects-data', subjects)

module.exports = routes