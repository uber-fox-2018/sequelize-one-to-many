const models =require('..models/')
const Teacher = models.Teacher
const subject = models.subject

module.exports = {
    showTeachers: ((req, res) => {
        Teacher.findAll({
            order : [['id','ASC']],
            include :[models.subject]
        })
    })
}

