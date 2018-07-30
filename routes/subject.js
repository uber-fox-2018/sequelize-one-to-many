const express = require('express')
const routes = express.Router()
const model = require('../models/')
const Subject = model.Subject


routes.get('/',function(req,res){
    Subject
    .findAll({
        include:[model.Teacher]
    })
    .then((dataSubject)=>{
        res.render('subject.ejs', {dataSubject})
        // res.json(dataSubject)
    })
} )

// routes.get('/', (req,res) => {
//     res.send('SUBJECT')
// })

module.exports = routes

