const subject    = require('express').Router()
const Model      = require('../../models')
const bodyParser = require('body-parser')
const urlEncodedParser = bodyParser.urlencoded({
    extended : false
})

//READ DATA

    // ALL SUBJECT WITH TEACHERS
subject.get('/pageAllSubject', (req,res) => {
    Model.Subject.findAll({
        include : [{
            model : Model.Teacher
        }]
    })
    .then( subjects => {
        res.render('page_subject_teacher.ejs', {subject : subjects})
    })
})

// // DELETE DATA


//UPDATE DATA

module.exports = subject