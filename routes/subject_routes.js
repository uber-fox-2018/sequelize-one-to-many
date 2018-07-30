const router = require('express').Router()
const { 
  dataSubject, 
  formSubject, 
  postSubject, 
  editSubject,
  postEditSubject,
  deleteSubject
} = require('../controllers/subject_controller')

router.get('/subject', dataSubject)
router.get('/subject/add', formSubject)
router.post('/subject/add', postSubject)
router.get('/subject/edit/:id', editSubject)
router.post('/subject/edit/:id', postEditSubject)
router.get('/subject/delete/:id', deleteSubject)

module.exports = router