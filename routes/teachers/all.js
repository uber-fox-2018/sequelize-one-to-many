const models = require('../../models')

module.exports = (req, res) => {
    models.Teacher
        .findAll({ oder: [['id']] })
        .then(teachers => {
            res.render('teachers/', { teachers })
        })
        .catch(err => {
            res.status(500).json(err)
        })
}