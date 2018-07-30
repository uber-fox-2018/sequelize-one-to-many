const routes = require('express').Router()
const Controller = require('/home/vinesto/Documents/Hacktiv8/Phase-1/Week-4/sequelize-one-to-many/controller/subject.js')

routes.get('/',function(req,res){

    Controller.showAll()
    .then(function(subject){
        // res.send(subject)
        res.render('./subject/showTable',{dataSubject:subject})
    })
    .catch(function(){

    })
    // res.send('ini get subject')
})

routes.post('/',function(req,res){

    res.send('ini post subject')
})

routes.get('/add',function(req,res){

    res.send('ini form teacher')

})

routes.post('/add',function(req,res){

    res.send('ini form teacher')

})

routes.get('/edit/:id',function(req,res){
    res.send('ini form edit subject')
})

routes.post('/edit/:id',function(req,res){
    res.send('ini form edit subject')
})

module.exports = routes