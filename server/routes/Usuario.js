const express = require('express');
const Usuario = express.Router();
const controllers = require('../controllers/usuario');
const token = require('../middleware/token');


Usuario.route('/cadastrar')
    .post(controllers.addUser)

Usuario.route('/autenticar')
    .post(controllers.authUser)

Usuario.route('/AUTH_JWT')
    .get(token.AUTH_JWT);

Usuario.route('/VALIDATE_JWT')
    .get(token.VALIDATE_JWT);


module.exports = Usuario;