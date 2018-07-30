const routes = require('express').Router();
const { getAllStudents , addForm, addStudent, getStudent, updateStudent, deleteStudent} = require('../controllers/student');

routes.get('/students', getAllStudents);
routes.get('/students/add', addForm);
routes.post('/students/add', addStudent);
routes.get('/students/edit/:id', getStudent);
routes.post('/students/edit/:id', updateStudent);
routes.get('/students/delete/:id', deleteStudent);

module.exports = routes;