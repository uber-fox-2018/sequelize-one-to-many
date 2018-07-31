const model = require('../models');
const Teacher = model.Teacher;
const Subject = model.Subject;

class TeacherController {
  static index(req, res) {
    Teacher.findAll({
      include: {
        model: Subject
      }
    })
    .then(data => {
      res.render('teacher/teachers', {data:data});
    })
    .catch(err => {
      res.send(err);
    });
  }

  static regist(req, res) {
    res.render('teacher/new', {x: null});
  }

  static post(req, res) {
    Teacher.create({
      firstName: req.body.fname,
      lastName: req.body.lname,
      email: req.body.email,
      subjectId: req.body.subject
    })
    .then(data => {
      res.redirect('teacher');
    })
    .catch(err => {
      res.render('teacher/new', {x: err.message});
    });
  }

  static edit(req, res) {
    Teacher.findAll({
      where: {id: req.params.id}
    })
    .then(data => {
      res.render('teacher/edit', {x : data});
    })
    .catch(err => {
      res.send(err);
    });
  }

  static update(req, res) {
    Teacher.update({
      firstName: req.body.fname,
      lastName: req.body.lname,
      email: req.body.email,
      subjectId: req.body.subject
    }, 
    {
      where: {id: req.params.id}
    })
    .then(data => {
      res.redirect('/teacher');
    })
    .catch(err => {
      res.send(err);
    });
  }

  static erase(req, res) {
    Teacher.destroy({
      where: {id: req.params.id}
    })
    .then(data => {
      res.redirect('/teacher');
    })
    .catch(err => {
      res.send(err);
    });
  }

}

module.exports = TeacherController;