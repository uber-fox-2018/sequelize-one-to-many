const model = require('../../models')

module.exports = (req, res) => {
    model.Subject
        .findAll({ order: [['id']] })
        .then(subjects => {
            res.render('subjects/', { subjects })
        })
        .catch(err => {
            res.send(500).json(err)
        })
}