const model = require('../../models')

const get = (req, res) => {
    res.render('teachers/add', { validationErrors: [] })
}

const post = (req, res) => {

    let obj = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }

    model.Teacher
        .create(obj)
        .then(teacher => {
            res.redirect('/teachers')
        })
        .catch(err => {
            if (err.name == "SequelizeValidationError")
                res.render('teachers/add', { validationErrors: err.errors })
            else
                res.status(500).json(err)
        })
}

module.exports = { get, post }