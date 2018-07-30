const ejs = require('ejs');

module.exports = function loop (input){
  let str = [];
  input.Teachers.forEach(teacher => {
    const template = '<li><%= teacher.first_name %> <%= teacher.last_name %></li>'
    str.push (ejs.render(template, {teacher}))
  })
  return str.join('\n')
}
