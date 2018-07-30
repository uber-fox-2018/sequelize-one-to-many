const express = require('express')
const routes = express()
const model = require('../../models')
const teacher = model.Teacher
const subject = model.Subject

routes.get('/subjects',(req,res)=>{
    //res.send('Data teacher')
    subject.findAll({
        include: [{
            model: teacher
        }]
    })
    .then(subjects =>{        
        //res.send(subjects[0].Teachers[0].firstName)
        res.render('showAllSubjects.ejs',{subjects})
    })
    
})

module.exports = routes
