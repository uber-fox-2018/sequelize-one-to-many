module.exports = function checkNull (input){
  if (input.SubjectId === null){
    return 'unassigned'
  }
  return input.Subject.subject_name
}