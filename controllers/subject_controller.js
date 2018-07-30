const models = require('../models')

module.exports = {
  formSubject: (req, res) => {
    res.render('./subject/form-subject', {
      message: null,
      error: null
    })
  },
  postSubject: (req, res) => {
    models
      .Subject
      .create(req.body)
      .then(() => {
        res.render('./subject/form-subject', {
          message: 'Successfully save',
          error: null
        })
      })
      .catch(err => {
        res.render('./subject/form-subject', {
          message: null,
          error: err.message
        })
      })
  },
  dataSubject: (req, res) => {
    models
      .Subject
      .findAll({
        include: {
          model: models.Teacher
        },
        order: [
          ['id', 'ASC']
        ]
      })
      .then(dataSubject => {
        res.render('./subject/index', {
          data: dataSubject
        })
      })
      .catch(err => {
        
      })
  },
  editSubject: (req, res) => {
    models
      .Subject
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(dataSubject => {
        res.render('./subject/form-edit-subject', {
          data: dataSubject,
          message: null,
          error: null
        })
      })
      .catch(err => {
        res.json(err)
      })
  },
  postEditSubject: (req, res) => {
    models
      .Subject
      .update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(() => {
        res.redirect('/subject')
      })
      .catch(err => {
        res.json(err)
      })
  },
  deleteSubject: (req, res) => {
    models
      .Subject
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(() => {
        res.redirect('/subject')
      })
  }
}