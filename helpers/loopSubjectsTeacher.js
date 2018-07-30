module.exports = function loop (input){
  let str = [];
  input.Teachers.forEach(teacher => {
    str.push ('<td><%= teacher.first_name %> <%= teacher.last_name %></td>')
  })
  console.log(str)
  return str.join('')
}
