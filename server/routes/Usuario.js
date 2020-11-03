const express = require('express');
const Usuario = express.Router();
const controllers = require('../controllers/usuario');


Usuario.route('/cadastrar')
    .post(controllers.addUser)

Usuario.route('/autenticar')
    .post(controllers.authUser)


module.exports = Usuario;