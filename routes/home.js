const express = require('express');
const routes = express.Router();


routes.get('/',function(req,res) {
    res.render('home.ejs')
})

module.exports = routes