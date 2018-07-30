const express = require('express')
const routes = express.Router()
const model = require('../models/')
const Teacher = model.Teacher
const Subject = model.Subject

//get data teacher , dengan konjungsi ke subjectId
routes.get('/', function(req,res){
    Teacher.findAll({
        include:[model.Subject],
        orderBy: ['id','ASC']
        })
        
        .then((dataTeacher) =>{
           
            res.render('teacher.ejs', {dataTeacher})
        })
})

// add Teacher

routes.get('/add', function(req,res){
    
    Subject.findAll()
    .then(function(subjectData){
        res.render('addTeacher.ejs', {subjectData}) //ambil data subject semuanya

    })
})

routes.post('/add', function(req,res){
    Teacher.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        SubjectId: req.body.SubjectId
    })
    .then(function(){
        res.redirect('/teacher')
    })
})

// update teacher

routes.get("/edit/:id", function(req,res){
    // let id = req.params.id
    Teacher.findById(req.params.id)
    .then(function(teacherData){
        Teacher.findAll()
        .then(function(subjectData){
            // res.json(subjectData)
            res.render('editTeacher.ejs',{teacher:teacherData,subject:subjectData})
        })
    } )
    .catch((err) => {
        res.send(err)
    })
   
    
})

routes.post('/edit/:id', function(req,res){
    Teacher.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        SubjectId: req.body.SubjectId
    },{
        where:{id:id}
    })
    .then(function(){
        res.redirect('/teacher')
    })
})

//delete Teacher
routes.get('/delete/:id', function(req,res){
    let id = req.params.id
    Teacher.destroy({
        where: {id:id} 
    })
        .then(function(){
            res.redirect('/teacher')
        })
  
})



module.exports = routes

