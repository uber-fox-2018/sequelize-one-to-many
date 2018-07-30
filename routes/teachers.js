const router = require ('express').Router();
const controller = require ('../controllers/teacher');
const checkNull = require('../helpers/checkSubject');

router.get('/', (req, res) => {
  controller.showAll()
  .then( teachers => {
    
    res.render('teachers', {teachers, checkNull})
  })
  .catch( err => {
    res.send(err.message);
  })
})

router.get('/add', (req, res) => {
  res.render('teachers-add', {error:null})
})

router.post('/add', (req, res) => {
  let newTeacher = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
  }
  controller.add(newTeacher)
  .then(()=> {
    res.render('teachers-add', {error:null})
  })
  .catch(error => {
    res.render('teachers-add', {error})
  })
})

router.get('/edit/:id', (req, res) => {
  controller
  .findById(req.params.id)
  .then((teacher) => {
    res.json(teacher)
    // res.render('teachers-edit', {teacher})
  })
  .catch(err => {
    res.send(err.message);
  })
})

router.post('/edit/:id', (req, res) => {
  let newTeacher = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
  }
  controller.update(newTeacher, req.params.id)
  .then(() => {
    res.redirect('/teachers')
  })
  .catch(err => {
    res.send(err.message);
  })
})

router.get('/delete/:id', (req, res)=> {
  controller.delete(req.params.id)
  .then(()=> {
    res.redirect('/teachers');
  })
  .catch(err => {
    res.send(err.message);
  })
})

module.exports = router

