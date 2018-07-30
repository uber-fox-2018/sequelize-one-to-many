const router = require('express').Router()
const { 
  dataTeacher, 
  formTeacher, 
  postTeacher, 
  formEditTeacher, 
  postEditTeacher,
  deleteTeacher
} = require('../controllers/teacher_controller')

router.get('/teacher', dataTeacher)
router.get('/teacher/add', formTeacher)
router.post('/teacher/add', postTeacher)
router.get('/teacher/edit/:id', formEditTeacher)
router.post('/teacher/edit/:id', postEditTeacher)
router.get('/teacher/delete/:id', deleteTeacher)

module.exports = router