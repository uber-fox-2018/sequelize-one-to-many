const routes = require('express').Router()
const Controller = require('/home/vinesto/Documents/Hacktiv8/Phase-1/Week-4/sequelize-one-to-many/controller/teacher.js')

routes.get('/', function (req, res) {
    Controller.showAll()
        .then(function (teachers) {
            // res.send(teachers)
            res.render('./teacher/showTable', { dataTeacher: teachers })
        })
        .catch(function (err) {

        })

    // res.send('ini get home teacher table')
})

routes.post('/', function (req, res) {

    res.send('ini post teacher')
})

routes.get('/add', function (req, res) {
    Controller.showSubject()
        .then(function (subject) {
            res.render('./teacher/addForm', { dataSubject: subject })
        })
        .catch(function () {

        })
    // res.send('ini form teacher')

})

routes.post('/add', function (req, res) {
    Controller.add(req.body.fname, req.body.lname, req.body.email, req.body.subjectId)
    res.redirect('/teacher')
    // res.send('ini form teacher')

})

routes.get('/edit/:id', function (req, res) {
    Controller.showById(req.params.id)
        .then(function (teacher) {
            Controller.showSubject()
                .then(function (subject) {
                    res.render('./teacher/editForm', { dataTeacher: teacher, dataSubject: subject, err: null })
                })
        })
})

routes.post('/edit/:id', function (req, res) {
    // console.log(req.body);

    Controller.update(req.body.fname, req.body.lname, req.body.email, req.body.subjectId, req.params.id)
        .then(function () {
            res.redirect('/teacher')
        })
        .catch(function (err) {
            Controller.showById(req.params.id)
                .then(function (teacher) {
                    Controller.showSubject()
                        .then(function (subject) {
                            res.render('./teacher/editForm', { dataTeacher: teacher, dataSubject: subject, err: err })
                        })
                })
            // res.render('./teacher/editForm', { dataTeacher: teacher, dataSubject: subject, err: err })
        })
    // res.send('ini form edit teacher')
})

routes.get('/delete/:id', function (req, res) {
    Controller.delete(req.params.id)
    res.redirect('/teacher')

})

module.exports = routes