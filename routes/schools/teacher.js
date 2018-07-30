const teacher    = require('express').Router()
const Model      = require('../../models')
const bodyParser = require('body-parser')
const urlEncodedParser = bodyParser.urlencoded({
    extended : false
})


// READ DATA
teacher.get('/pageTeacher', (req,res) => {
    Model.Teacher.findAll({
        include : [{
            model : Model.Subject
        }]
    })
    .then( teachers => {
        res.render('page_teacher.ejs', {teacher : (teachers)})
        // res.send(teachers)
    })

})


// DELETE DATA
teacher.get('/pageTeacher/:id', (req,res) => {
    let idTeacher = req.params.id

    Model.Teacher.destroy({
        where : {id: idTeacher}
    })
    .then(()=>{
        res.redirect('/pageTeacher')
    })
    .catch( err => {
        console.log(err)
    } )
})

//UPDATE DATA
teacher.get('/pageUpdateTeacher/:id', (req,res) => {
    Model.Teacher.findAll({
        where : {id : req.params.id},
        include : [{
            model : Model.Subject
        }]
    })
    .then(teachers => {
        res.render('page_teacher_update.ejs', { teacher : (teachers)})
    })
})


teacher.post('/update', urlEncodedParser, (req,res) => {
    let dataTeacher = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        subjectId : req.body.subject,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    Model.Teacher.update(dataTeacher, {where : {id : req.body.data_id}})
    .then(()=>{
        res.redirect('/pageTeacher')
    })
})

module.exports = teacher