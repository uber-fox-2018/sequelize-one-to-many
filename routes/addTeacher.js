const routes = require('express')();
const Model = require('../models');

routes.get('/all-teachers-add',(req,res)=>{
    res.render('addTeacher.ejs')
})

routes.post('/all-teachers-add',(req,res)=>{
    console.log('masuk');
    
    if(!req.body.subject_id){
        req.body.subject_id = 0
    }
    
    let dataRegister = {
        firstName:req.body.first_name,
        lastName:req.body.last_name,
        email: req.body.email,
        subjectId: req.body.subject_id
    }

        Model.Teacher.create(dataRegister)
    

    
    res.redirect('/all-teachers-data')
})

module.exports = routes