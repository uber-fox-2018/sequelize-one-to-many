const routes    = require('express').Router()
const schools  = require('./schools')

routes.use(schools.teacher)
routes.use(schools.subject)

routes.get('/', (req,res) => {
    res.send('halaman root')
})

module.exports = routes