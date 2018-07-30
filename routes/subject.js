const routes = require('express').Router()
const Controller = require('../controller/subject')

routes.get('/',(req,res)=>{
    Controller.getAllDataSubject()
    .then(dataSubjects =>{
        // res.json(dataSubjects);  
        
        res.render('subject/showDataSubject',{dataSubjects})
        
    })
    .catch(err =>{
        console.log(err);
        
    })
})


module.exports = routes