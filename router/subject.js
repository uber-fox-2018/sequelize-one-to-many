const router = require('express').Router();
const model = require('../models');
const Subject = model.Subject;

router.get('/', (req, res) => {
  Subject.findAll()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.send(err);
    });
});

router.get('/create', (req, res) => {
  res.send('masuk!')
    
});

module.exports = router;