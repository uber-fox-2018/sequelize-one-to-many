const studentsRoutes = require("express").Router();


const ejs = require("ejs");
const Model = require("../models");

// studentsRoutes.get("/", (req, res) => {
//   res.render("index");
// });

studentsRoutes.get("/students", (req, res) => {
  Model.Student.findAll().then(data => {
    res.render("student-ejs/studentList", { Students: data });
  });
});

studentsRoutes.get("/students/add", (req, res) => {
  res.render("student-ejs/addStudent");
});

studentsRoutes.post("/students/add", (req, res) => {
  Model.Student.create(req.body)

    .then(() => {
      res.redirect("/students");
    })
    .catch(err => {
      res.redirect("/students", { show: err });
    });
});

studentsRoutes.get("/students/delete/:id", (req, res) => {
  let id = req.params.id;

  Model.Student.destroy({ where: { id: id } }).then(() => {
    res.redirect("/students");
  });
});

studentsRoutes.get("/students/edit/:id", function(req, res) {
  let id = req.params.id
  Model.Student.findById(id).then(function(students) {
    res.render("student-ejs/editStudent", { Students: students });
  });
});

studentsRoutes.post("/students/edit/:id", function(req, res) {
  let id = req.params.id;
  Model.Student.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    },
    { where: { id: id } }
  ).then(function() {
    res.redirect("/students");
  });
});

module.exports = studentsRoutes;
