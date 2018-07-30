const router = require('express').Router();
const Models = require('../models')
const Teacher = Models.Teacher

router.get('/', function(req,res) {
    Teacher.findAll({
        order: [['id','asc']],
        include: [{
            model: Models.Subject
        }]
    })
    .then((data_teachers) => {
        res.render('../views/teacher/teacher', {data_teachers: data_teachers})
    })
})

router.get('/add',function(req,res){
    Models.Subject.findAll()
    .then((data_subjects) => {
        res.render('../views/teacher/add-teacher', {data_subjects: data_subjects, err: null})
    })
})

router.post('/add', function(req,res) {
    Teacher.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        SubjectId: req.body.SubjectId
    })
    .then(() => {
        res.redirect('/teachers')
    })
    .catch((err) => {
        res.render('../views/teacher/add-teacher', {err: err, data_subjects: []})
    })
})

router.get('/:id/edit',function(req,res) {
    let teacher = null
    Teacher.findById(req.params.id)
    .then((data_teacher) => {
        teacher = data_teacher
        return Models.Subject.findAll()
    })
    .then((data_subjects) => {
        res.render('../views/teacher/edit-teacher', {data_teacher: teacher, data_subjects: data_subjects, err:null})
    })
    
})

router.post('/:id/edit',function(req,res) {
    Teacher.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        SubjectId: req.body.SubjectId
    },{where: {id: req.params.id}})
    .then(() => {
        res.redirect('/teachers')
    })
    .catch((err) => {
        console.log(err);
        
        res.render('../views/teacher/edit-teacher', {err: err, data_subjects: [], data_teacher: []})
    })
})

router.get('/:id/delete',function(req,res) {
    Teacher.destroy({
        where: {id: req.params.id}
    })
    .then(() => {
        res.redirect('/teachers')
    })
})

module.exports = router