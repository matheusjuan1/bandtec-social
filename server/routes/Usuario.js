const express = require('express');
const Usuario = express.Router();
const controllers = require('../controllers/usuario');
const login = require('../middleware/login');


Usuario.route('/cadastrar')
    .post(controllers.addUser)

Usuario.route('/autenticar')
    .post(controllers.authUser)

Usuario.route('/AUTH_JWT')
    .get(login);


module.exports = Usuario;