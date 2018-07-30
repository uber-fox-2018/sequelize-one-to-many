const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Home = require('./routes/index')
const Teacher = require('./routes/teacher')
const Subject = require('./routes/subject')

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/',Home)
app.use('/teachers',Teacher)
app.use('/subjects',Subject)

app.listen(3000, function(){
    console.log('Listening on port 3000');
})