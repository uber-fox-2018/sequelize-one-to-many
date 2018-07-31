const models = require('../models')

module.exports = {
  dataTeacher: (req, res) => {
    models
      .Teacher
      .findAll({
        order: [
          ['id', 'ASC']
        ], 
        include: {
          model: models.Subject
        }
      })
      .then(teacherAll => {
        res.render('./teacher/index', {
          data: teacherAll,
          error: null
        })
        // res.json(teacherAll)
      })
      .catch(err => {
        res.render('./teacher/index', {
          data: null,
          error: err.message
        })
        // res.json(err)
      });
  },
  formTeacher: (req, res) => {
    res.render('./teacher/form-teacher', {
      message: null,
      error: null
    })
  },
  postTeacher: (req, res) => {
    models
      .Teacher
      .create(req.body)
      .then(() => {
        res.render('./teacher/form-teacher', {
          message: 'Data teacher successfully save',
          error: null
        })
      })
      .catch(err => {
        res.render('./teacher/form-teacher', {
          message: null,
          error: err.message
        })
      })
  },
  formEditTeacher: (req, res) => {
    models
      .Teacher
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(editTeacher => {
        models
          .Subject
          .findAll({
            order: [
              ['id', 'ASC']
            ]
          })
          .then(dataSubject => {
            res.render('./teacher/form-edit-teacher', {
              subject: dataSubject,
              data: editTeacher, 
              message: null,
              error: null
            })
          })
      })
      .catch(err => {
        models
          .Subject
          .findAll({
            order: [
              ['id', 'ASC']
            ]
          })
          .then(dataSubject => {
            res.render('./teacher/form-edit-teacher', {
              subject: dataSubject,
              data: editTeacher, 
              message: null,
              error: err.message
            })
          })
      });
  },
  postEditTeacher: (req, res) => {
    models
      .Subject
      .findOne({
        where: {
          subject_name: req.body.subject_name
        }
      })
      .then(subject => {
        let request = req.body
        let subjectId = subject.id
        models
          .Teacher
          .update({
            first_name: request.first_name,
            last_name: request.last_name,
            email: request.email,
            SubjectId: subjectId
          }, {
            where: {
              id: req.params.id
            }
          })
          .then(() => {
            res.redirect('/teacher')
          })
          .catch(err => {
            res.send(err)
          })
      })
  },
  deleteTeacher: (req, res) => {
    models
      .Teacher
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(() => {
        res.redirect('/teacher')
      })
  }

}