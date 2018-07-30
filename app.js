const express = require('express')
const app = express()

const indexRoutes = require('./routes/index')

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', indexRoutes)

app.listen(3030, () => {
  console.log('Listening port on http://localhost:3030')
})