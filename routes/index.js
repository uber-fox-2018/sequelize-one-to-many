const router = require('express').Router()

const routesSubject = require('./subject_routes')
const routesTeacher = require('./teacher_routes')

router.get('/', (req, res) => {
  res.render('index')
})

router.use(routesSubject)
router.use(routesTeacher)


module.exports = router