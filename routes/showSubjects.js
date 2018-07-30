const routes = require('express')();
const Model = require('../models');

routes.get('/all-subjects-data',(req,res)=>{
    Model.Subject.findAll({
        include:[{
            model:Model.Teacher
        }]
    })
    .then(data=>{
        console.log(data[0].dataValues.Teachers);
        
        res.render('AllSubjectData.ejs',{data:data})
    })
})

module.exports = routes