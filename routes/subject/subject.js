'use strict'

const subject = require('express').Router()
const Models = require('../../models')
const Subject = Models.Subject
const bodyParser = require('body-parser');
const bodyParserUrlencoded = bodyParser.urlencoded({
    extended: false
})

subject.get('/subject', (req, res) => {
    Subject.findAll({
            order: [
                ['id', 'ASC']
            ],
            include: [{
                model: Models.Teacher
            }]
        })
        .then(data => {
            res.render('subject', {
                title: 'subject',
                header: 'subject page',
                data: data
            })
        })
})

subject.get('/subject/:id', (req, res) => {
    Subject.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('/subject')
        })
        .catch(err => {
            console.log(err);

        })
})

subject.post('/updateSubject', bodyParserUrlencoded, (req, res) => {
    let dataSubject = {
        id: req.body.id,
        subjectName: req.body.subjectName
    }
    Subject.update(dataSubject, {
            where: {
                id: req.body.id
            }
        })
        .then(() => {
            res.redirect('subject')
        })
})

subject.get('/updateSubject/:id', (req, res) => {
    Subject.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            res.render('updateSubject', {
                title: 'Update Subject',
                header: 'Update Subject',
                id: data[0].dataValues.id,
                subjectName: data[0].dataValues.subjectName
            })
        })
})
subject.post('/addSubject', bodyParserUrlencoded, (req, res) => {
    Subject.create({
            subjectName: req.body.subjectName
        })
        .then(data => {
            res.redirect("subject")
        })
        .catch(err => {
            res.redirect('subject', {
                title: 'Subject',
                header: 'Subject page ' + err,
            })
        })
})
subject.get('/addSubject', (req, res) => {
    Subject.findAll()
        .then(data => {
            res.render('addSubject', {
                title: 'Add Subject',
                header: 'Add Subject',
                data: data
            })
        })

})

module.exports = subject