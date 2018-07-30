const model = require('../../models')

const get = (req, res) => {
    id = req.params.teacherId * 1
    model.Teacher
        .find({ where: { id } })
        .then(teacher => {
            res.render('teachers/edit', { teacher, validationErrors: [] })
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

const post = (req, res) => {
    id = req.params.teacherId * 1

    let obj = {
        last_name: req.body.last_name,
        fist_name: req.body.fist_name,
        email: req.body.email
    }

    model.Teacher
        .update(obj, { where: { id } })
        .then(changes => {
            res.redirect('/teachers')
        })
        .catch(err => {
            if (err.name == "SequelizeValidationError")
                res.render('teachers/edit', { teacher: obj, validationErrors: err.errors })
            else
                res.status(500).json(err)
        })
}

module.exports = { get, post }