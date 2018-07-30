let routes = require('express').Router()
let teacher = require('./teacher')
let subject = require('./subject')

routes.use(teacher.teacher)
routes.use(subject.subject)

routes.get('/',(req , res) => {
    res.send('home')
})

module.exports = routes

