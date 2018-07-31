const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const homePage = require('./routes/homePage.js')
const teacher = require('./routes/teacher.js')
const subject = require('./routes/subject.js')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', homePage)
app.use('/teacher', teacher)
app.use('/subject', subject)

app.listen(3000, () => {
    console.log('listening on port 3000 bosq')
})