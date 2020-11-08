const Usuario = require("../models/usuario");
const jwt = require('jsonwebtoken');

module.exports = {
    addUser: function(req, res) {
        Usuario.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            celular: req.body.celular,
            cargo: req.body.cargo,
            sexo: req.body.sexo,
            dataNasc: req.body.dataNasc,
            password: req.body.senha
        }).then(function (Usuario) {
            res.status(200).json(Usuario)
        }).catch(function () {
            res.status(400).send("Erro: Cadastro não foi realizado");
        });
    },

    authUser: function(req, res) {
        Usuario.findOne({
            where: {
                email: req.body.email,
            }
        }).then(async function (usuario) {
            res.status(200);
            if (!usuario) {
                res.send("Não tem usuário")
            }
            else if (!await usuario.validPassword(req.body.senha)) {
                res.send("Senha errada")
            }
            else {
                const token = jwt.sign({
                   idUsuario: usuario.id,
                   email: usuario.email,
                   firstName: usuario.firstName,
                   lastName: usuario.lastName,
                   dataNasc: usuario.dataNasc,
                   cargo: usuario.cargo,
                   celular: usuario.celular,
                   sexo: usuario.sexo
                }, process.env.JWT_KEY, {expiresIn: "1d"}) 
                res.json(token);
            }
        }).catch(function () {
            res.status(400).send("Erro")
        })
    }
}