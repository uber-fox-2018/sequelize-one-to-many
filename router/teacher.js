const router = require('express').Router();
const model = require('../models');
const Teacher = model.Teacher;
const Subject = model.Subject;

router.get('/', (req, res) => {
  Teacher.findAll({
    include: {
      model: Subject
    }
  })
  .then(data => {
    console.log(data);
    
    res.render('teachers', {data:data});
  })
  .catch(err => {
    res.send(err);
  })
});

router.get('/create', (req, res) => {
  res.render('form-teacher');

});

router.get('/edit', (req, res) => {
  // Teacher.findById({
  //   include: {
  //     model: Subject
  //   }
  // })
  // .then(data => {
    
    res.render('edit-teacher');
  // })
  // .catch(err => {
  //   res.send(err);
  // });
});

module.exports = router;