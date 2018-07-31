const router = require('express').Router();
const bodyParse = require('body-parser');
const model = require('../models');
const TeacherController = require('../controller/teacher');

const Teacher = model.Teacher;
const Subject = model.Subject;

router.use(bodyParse.json());
router.use(bodyParse.urlencoded({extended: true}));

router.get('/', TeacherController.index);
router.get('/new', TeacherController.regist);
router.post('/new', TeacherController.post);
router.get('/edit/:id', TeacherController.edit)
router.post('/update', TeacherController.update);
router.get('/erase/:id', TeacherController.erase);

module.exports = router;