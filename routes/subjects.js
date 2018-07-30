const routesSubject = require('express').Router();
const subjectController = require('../controllers/subjectController');

routesSubject.get('/subjects', subjectController.showSubjects);

routesSubject.get('/subjects/add', subjectController.getFormAdd);
routesSubject.post('/subjects/add', subjectController.addSubject);

routesSubject.get('/subjects/edit/:id', subjectController.getSubject);
routesSubject.post('/subjects/edit/:id', subjectController.updateSubject);

routesSubject.get('/subjects/delete/:id', subjectController.deleteSubject);

module.exports = routesSubject;