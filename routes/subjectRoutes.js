const subjectRoutes = require("express").Router();

const ejs = require("ejs");
const models = require("../models");

subjectRoutes.get("/subjects", (req, res) => {
  models.Subject.findAll({ include: [models.Teacher] })
  .then(subjects => {
    console.log(subjects);
    
    res.render("subject-ejs/subjectList", { subjects });
  });
});

subjectRoutes.get("/subjects/add", (req, res) => {
  res.render("subject-ejs/addSubject");
});

subjectRoutes.post("/subjects/add", (req, res) => {
  models.Subject.create(req.body)

    .then(() => {
      res.redirect("/subjects");
    })
    .catch(err => {
      res.redirect("/subjects", { show: err });
    });
});

subjectRoutes.get("/subjects/delete/:id", (req, res) => {
  let id = req.params.id;
  models.Subject.destroy({ where: { id: id } }).then(() => {
    res.redirect("/subjects");
  });
});

subjectRoutes.get("/subjects/edit/:id", function(req, res) {
  let id = req.params.id;
  models.Subject.findById(id).then(function(subjects) {
    res.render("subject-ejs/editSubject", { subjects: subjects });
  });
});

subjectRoutes.post("/subjects/edit/:id", function(req, res) {
  let id = req.params.id;
  models.Subject.update(
    {
      subjectName: req.body.subjectName
    },
    { where: { id: id } }
  ).then(function() {
    res.redirect("/subjects");
  });
});

module.exports = subjectRoutes;
