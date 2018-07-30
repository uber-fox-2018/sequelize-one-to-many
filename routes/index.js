const router = require ('express').Router();
const students = require ('./students')
const teachers = require ('./teachers')
const subjects = require ('./subjects')

router.get ('/', (req, res) => {
  res.render('index');
})

router.use('/students', students);
router.use('/teachers', teachers);
router.use('/subjects', subjects);

module.exports = router;