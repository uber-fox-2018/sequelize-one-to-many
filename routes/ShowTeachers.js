const routes = require('express')();
const Model = require('../models');

routes.get('/all-teachers-data', (req, res)=>{
    Model.Teacher.findAll({
        include:[{
            model:Model.Subject
        }]
    }).then(all=>{
        res.render('allTeachersData.ejs',{data: (all)})
    })
})

routes.get('/all-teachers-data/:id',(req,res)=>{
    let id = req.params.id = req.params.id.split(':')

    if(id[0] === 'edit'){
        res.send('EDIT')
    }else if(id[0] ==='delete'){
        let idDelete = JSON.parse(id.slice(1));
        Model.Teacher.destroy({
            where:{ id: idDelete}
        });
        res.redirect('/all-teachers-data') 
    }
})

module.exports = routes