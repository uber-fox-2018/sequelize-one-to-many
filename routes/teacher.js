const express = require('express')
const router = express.Router()
const Model = require('../models')

router.get('/', (req, res) => {
    Model.Teacher.findAll({
        order: [['id', 'ASC']],
        include: [Model.Subject]
    })
    .then((dataTeacher) => {
        res.render('teacher', {dataTeacher: dataTeacher})
    })
    .catch((err) => {
        res.render(err)
    })
})

router.get('/addTeacher', (req, res) => {
    res.render('addTeacher', {err: null})
})

router.post('/addTeacher', (req, res) => {
    Model.Teacher.create({
        firstName: req.body.FirstName,
        lastName: req.body.LastName,
        email: req.body.Email
    })
    .then(() => {
        res.redirect('/teacher')
    })
    .catch((err) => {
        res.render('addTeacher',{err: err})
    })
})

router.get('/editTeacher/:id', (req,res) => {
    Model.Teacher.findById(req.params.id)
    .then((dataTeacher) => {
        Model.Subject.findAll()
        .then((dataSubject) => {
            res.render('editTeacher', {dataTeacher: dataTeacher, dataSubject: dataSubject, err: null})
        })
    })
    .catch((err) => {
        res.send(err)
    })
})

router.post('/editTeacher/:id', (req, res) => {
    Model.Teacher.update({
        firstName: req.body.FirstName,
        lastName: req.body.lastName,
        email: req.body.Email,
        SubjectId: req.body.SubjectId
    },{
        where: {id : req.params.id}
    })
    .then(() => {
        res.redirect('/teacher')
    })
    .catch((err) => {
        res.render('editTeacher', {err: err, dataTeacher: [], dataSubject: []})
    })
})

router.get('/deleteTeacher/:id', (req,res) => {
    Model.Teacher.destroy({ where: { id: req.params.id }})
    .then(() => {
        res.redirect('/teacher')
    })
})

module.exports = router