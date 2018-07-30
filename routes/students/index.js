const students = require('express').Router()
const all = require('./all')
const add = require('./add')
const edit = require('./edit')
const remove = require('./delete')


students.get('/', all)
students.get('/add', add.get)
students.post('/add', add.post)
students.get('/edit/:studentId', edit.get)
students.post('/edit/:studentId', edit.post)
students.get('/delete/:studentId', remove.get)
students.post('/delete/:studentId', remove.post)

module.exports = students