'use strict'

const teacher = require('express').Router()
const Models = require('../../models')
const Teacher = Models.Teacher
const bodyParser = require('body-parser');
const bodyParserUrlencoded = bodyParser.urlencoded({
    extended: false
})

teacher.get('/teacher', (req, res) => {
    Teacher.findAll({
            order: [
                ['id', 'ASC']
            ],
            include: [{
                model: Models.Subject
            }]
        })
        .then(data => {
            res.render('teacher', {
                title: 'teacher',
                header: 'teacher page',
                data: data
            })
        })
        .catch(err => {})
})

teacher.get('/teacher/:id', (req, res) => {
    Models.Teacher.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('/teacher')
        })
        .catch(err => {
            console.log(err);

        })
})

teacher.post('/updateTeacher', bodyParserUrlencoded, (req, res) => {
    let dataTeacher = {
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        subjectId: req.body.subjectId
    }
    Models.Teacher.update(dataTeacher, {
            where: {
                id: req.body.id
            }
        })
        .then(() => {
            res.redirect('/teacher')
        })
        .catch(err => {
            console.log(err);


            res.render('updateTeacher', {
                title: 'updateTeacher',
                id: '',
                firstName: '',
                lastName: '',
                email: '',
                subjectId: '',
                header: err,
            })
        })
})

teacher.get('/updateTeacher/:id', (req, res) => {
    Models.Teacher.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            console.log(data[0].dataValues.firstName);
            res.render('updateTeacher', {
                title: 'Update Teacher',
                header: 'Update Teacher',
                id: data[0].dataValues.id,
                firstName: data[0].dataValues.firstName,
                lastName: data[0].dataValues.lastName,
                email: data[0].dataValues.email,
                subjectId: data[0].dataValues.subjectId
            })
        })
})

module.exports = teacher