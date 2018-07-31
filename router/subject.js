const router = require('express').Router();
const bodyParse = require('body-parser');
const model = require('../models');
const SubjectController = require('../controller/subject');

const Subject = model.Subject;
const Teacher = model.Teacher;

router.use(bodyParse.json());
router.use(bodyParse.urlencoded({extended: true}));

router.get('/', SubjectController.index);
router.get('/new', SubjectController.add);
router.post('/new', SubjectController.post);

module.exports = router;