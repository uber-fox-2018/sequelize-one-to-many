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
            include: [{
                model: Models.Teacher
            }]
        })
        .then(data => {
            // console.log(data[0].dataValues.Teachers[0].dataValues.firstName);
            // console.log(data[1].Teachers);
            // console.log(data.length );
            // for (let i = 0; i < data.length;i++) {

            // }
            // let dataFilter = []
            // for (let i = 0; i < data.length; i++) {
            //     console.log(dataFilter.length)
            //     if (data[i].dataValues.length !== 0) {
            //         for (let j = 0; j < data.length; j++) {
            //             dataFilter.push(data[i].dataValues.Teachers[j].dataValues.firstName)
            //         }
            //     }
            // }
            // console.log(dataFilter);

            // res.send(data[0])
            res.render('subject', {
                title: 'subject',
                header: 'subject page',
                data: data
            })
        })
        // .catch(err => {})
})

// teacher.get('/teacher/:id', (req, res) => {
//     Models.Teacher.destroy({
//             where: {
//                 id: req.params.id
//             }
//         })
//         .then(() => {
//             res.redirect('/teacher')
//         })
//         .catch(err => {
//             console.log(err);

//         })
// })

// teacher.post('/updateTeacher', bodyParserUrlencoded, (req, res) => {
//     console.log('------------------------>');

//     let dataTeacher = {
//         id: req.body.id,
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         subjectId: req.body.subjectId
//     }
//     Models.Teacher.update(dataTeacher, {
//             where: {
//                 id: req.body.id
//             }
//         })
//         .then( () => {
//             res.redirect('/teacher')
//         } )
// })

// teacher.get('/updateTeacher/:id', (req, res) => {
//     Models.Teacher.findAll({
//             where: {
//                 id: req.params.id
//             }
//         })
//         .then(data => {
//             console.log(data[0].dataValues.firstName);
//             res.render('updateTeacher', {
//                 title: 'Update Teacher',
//                 header: 'Update Teacher',
//                 id: data[0].dataValues.id,
//                 firstName: data[0].dataValues.firstName,
//                 lastName: data[0].dataValues.lastName,
//                 email: data[0].dataValues.email,
//                 subjectId: data[0].dataValues.subjectId
//             })
//         })
// })

module.exports = subject