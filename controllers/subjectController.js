const models = require('../models');
const Subject = models.Subject;
 module.exports = {
     showSubjects: (req, res) => {
        Subject.findAll({
            order: [['id', 'ASC']],
            include: [models.Teacher]
        })
        .then(subjectsData => {
            res.render('./subjects/subjects', {title: `List of Subjects`, subjectsData: subjectsData, error: null});
        })
        .catch(err => {
            res.send(err);
        })
    }, 
     getFormAdd: (req, res) => {
        res.render('./subjects/subjectadd', {title: `Add Subject Form`});
    },
     addSubject: (req, res) => {
        Subject.create({
            subjectName: req.body.subjectName
        })
        .then(subjectData => {
            res.redirect('/subjects');
        })
        .catch(err => {
            res.render('./subjects/subjectadd', {title: `Add Subject Form`, error: err.message});
        })
    },
     getSubject: (req, res) => {
        Subject.findById(req.params.id)
        .then(editSubject => {
            res.render('./subjects/subjectedit', {title: `Edit Subject Name`, editSubject: editSubject});
        })
        .catch(err => {
            res.send(err);
        })
    },
     updateSubject: (req, res) => {
        Subject.update({
            id: req.params.id,
            subjectName: req.body.subjectName
        }, {where: {id: req.params.id}
    })
    .then(() => {
        res.redirect('/subjects');
    })
    .catch(err => {
        res.send(err);
    })
    }, 
     deleteSubject: (req, res) => {
        Subject.destroy({where: {id: req.params.id}})
        .then(() => {
            res.redirect('/subjects');
        })
        .catch(err => {
            res.send(err);
        })
    }
} 
