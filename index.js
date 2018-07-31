const express = require('express');
const app = express();
const port = 3080;
const bodyParse = require('body-parser');
const ejs = require('ejs');

const routerTeacher = require('./router/teacher');
const routerSubject = require('./router/subject');

app.set('view engine', 'ejs');

app.use('/teacher', routerTeacher);
app.use('/subject', routerSubject);
app.use(express.static('style'))

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});