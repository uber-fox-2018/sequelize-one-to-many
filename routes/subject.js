const express = require('express')
const routes = express.Router()
const model = require('../models/')
const Subject = model.Subject

//tampilkan semua subject
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
// add Subject

routes.get("/add", (req, res) => {
    res.render("/addSubject.ejs");
  });
  
  routes.post("/add", (req, res) => {
    models.Subject.create(req.body)
  
      .then(() => {
        res.redirect("/subject");
      })
      .catch(err => {
        res.redirect("/subject", { show: err });
      });
  });
  
//edit (update) subject

  routes.get("/subject/edit/:id", function(req, res) {
    Subject.findById(req.params.id)
    .then(function(subjects) {
      res.render("/editSubject.ejs", { subjects: subjects });
    });
  });
  
  routes.post("/edit/:id", function(req, res) {
    let id = req.params.id;
    Subject.update(
      {
        subjectName: req.body.subjectName
      },
      { where: { id: id } 
    })
    .then(function() {
      res.redirect("/subject");
    });
  });
  

//delete subject

routes.get('/delete/:id', function(req,res){
    let id = req.params.id
    Subject.destroy({
        where: {id:id} 
    })
        .then(function(){
            res.redirect('/Subject')
        })
  
})



module.exports = routes

