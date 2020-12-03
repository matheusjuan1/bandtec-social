const express = require('express');
const Usuario = express.Router();
const controllers = require('../controllers/usuario');
const token = require('../middleware/token');
const multerConfig = require('../config/multer')
const multer = require('multer')


Usuario.route('/cadastrar')
    .post(multer(multerConfig).single("file"), controllers.addUser)

Usuario.route('/autenticar')
    .post(controllers.authUser)

Usuario.route('/AUTH_JWT')
    .get(token.AUTH_JWT);

Usuario.route('/VALIDATE_JWT')
    .get(token.VALIDATE_JWT);

Usuario.route('/')
    .get(controllers.getAll);

Usuario.route('/:id')
    .get(controllers.getById)


module.exports = Usuario;