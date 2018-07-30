const express = require('express')
const app     = express()
const routes  = require('./routes')

const port    = 2500
const Model   = require('./models')

app.use(express.static(__dirname + '/views'))
app.set('view engine', 'ejs')

app.use('/', routes)

app.listen(port, () => {
    console.log('app listening on port ', port)
})