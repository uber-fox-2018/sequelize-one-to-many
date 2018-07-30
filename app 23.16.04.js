const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes/home.js')
const teacher = require('./routes/teacher')
const subject = require('./routes/subject.js')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', routes)
app.use('/teacher',teacher)
app.use('/subject', subject )



app.listen(3000, function(){
    console.log('my express')
})