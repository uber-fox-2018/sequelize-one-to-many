const models = require('../models');
const Subject = models.Subject;
const Teacher = models.Teacher;

module.exports = {
    getAllSubjects : (req, res) =>{
        Subject.findAll({
            include: [Teacher]
        })
        .then(subjectWithTeacher=>{
            res.render("subjects", {subjects:subjectWithTeacher})
            })
            .catch(err=>{
                res.render("error");
            })
    },

    addForm : (req, res) =>{
        res.render("add_subject_form")
    },

    addSubject : (req, res) =>{
        let newSubject = req.body; //e.g. { subjectName: 'Math' }
        Subject.create({
            subjectName : newSubject.subjectName[0].toUpperCase() + newSubject.subjectName.slice(1)
        })
                .then(newSubject =>{
                    res.redirect("/subjects")
                })
                .catch(err =>{
                    res.render("error");
                })
    },

    getSubject : (req, res) => {
        let id = req.params.id;
            Subject.findById(id, {include: [Teacher]})
            
                .then(subject=>{
        
                    res.render("edit_subject", {subject : subject})
                })
                .catch(err =>{
                    res.render("error");
                })
    },

    updateSubject : (req, res) =>{
        let subject = req.body;
        let id = req.params.id;
        Subject.update({
            subjectName : subject.subjectName[0].toUpperCase() + subject.subjectName.slice(1)
        }, {
                where: {id: id}
            })
                .then(updatedSubject =>{
                    res.redirect("/subjects")
                })
                .catch(err =>{
                    res.render("error");
                })
    },

    deleteSubject: (req, res) =>{
        let id = req.params.id;
        Subject.destroy({
            where: {id : id}
        })
                .then(deletedSubject =>{
                    res.redirect("/subjects");
                })
                .catch(err =>{
                    res.render("error");
                })
    }
}