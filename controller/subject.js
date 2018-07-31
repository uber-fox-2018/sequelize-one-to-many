const model = require('../models');
const Subject = model.Subject;
const Teacher = model.Teacher;

class SubjectController {
  static index(req, res) {
    Subject.findAll({
      include: {
        model: Teacher
      }
    })
    .then(data => {
      res.render('subject/subject', {data: data});
    })
    .catch(err => {
      res.send(err);
    });
  }

  static add(req, res) {
    res.render('subject/new');
  }

  static post() {
   Subject.create({
     subjectName: req.body.subjectName
   })
   .then(data => {
     res.redirect('subject');
   })
   .catch(err => {
     res.send(err);
   });
  }

  static edit(req, res) {
    Subject.findAll(
      
    )
  }
}

module.exports = SubjectController;