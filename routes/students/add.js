'use strict'

const model = require('../../models')

const get = (req, res) => {
    res.render("students/add", { validationErrors: [] })
}

const post = (req, res) => {
    let obj = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }

    model
        .Student
        .create(obj)
        .then(student => {
            res.redirect('/students')
        })
        .catch(err => {
            if (err.name == "SequelizeValidationError")
                res.render('students/add', { validationErrors: err.errors })
            else
                res.status(500).json(err)
        })
}

module.exports = { get, post }