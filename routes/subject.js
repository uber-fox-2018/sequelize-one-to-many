const router = require('express').Router();
const Models = require('../models')
const Subject = Models.Subject

router.get('/' ,function(req,res){
    Subject.findAll({
        include: {
            model: Models.Teacher
        }
    })
    .then((data_subjects) => {
        // res.json(data_subjects)
        res.render('../views/subject/subject', {data_subjects: data_subjects})
    })
})

module.exports = router