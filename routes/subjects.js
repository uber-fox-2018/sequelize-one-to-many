const routes = require('express').Router();
const { getAllSubjects, addForm, addSubject, getSubject, updateSubject, deleteSubject } = require('../controllers/subject');

routes.get('/subjects', getAllSubjects);
routes.get('/subjects/add', addForm);
routes.post('/subjects/add', addSubject);
routes.get('/subjects/edit/:id', getSubject);
routes.post('/subjects/edit/:id', updateSubject);
routes.get('/subjects/delete/:id', deleteSubject);

module.exports = routes;