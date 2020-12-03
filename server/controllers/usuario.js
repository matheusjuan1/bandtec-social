const Usuario = require("../models/usuario");
const jwt = require('jsonwebtoken');

module.exports = {
    addUser: function(req, res) {
        let requests = {
            name: req.body.name,
            email: req.body.email,
            celular: req.body.celular,
            cargo: req.body.cargo,
            sexo: req.body.sexo,
            dataNasc: req.body.dataNasc,
            password: req.body.senha
        }
        if (req.file) {
            const {key: imageKey = "", location: imageUrl} = req.file
            requests.ftperfil = imageUrl
            requests.imageKey = imageKey
        }

        Usuario.create(requests).then(function (Usuario) {
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
            if (!usuario) {
                res.status(404).send("Email e/ou senha inválidos!")
            }
            else if (!await usuario.validPassword(req.body.senha)) {
                res.status(401).send("Email e/ou senha inválidos!")
            }
            else {
                const token = jwt.sign({
                   idUsuario: usuario.id,
                   email: usuario.email,
                   name: usuario.name,
                   dataNasc: usuario.dataNasc,
                   cargo: usuario.cargo,
                   celular: usuario.celular,
                   sexo: usuario.sexo,
                   ftperfil: usuario.ftperfil
                }, process.env.JWT_KEY, {expiresIn: "1d"}) 
                res.status(200).json(token);
            }
        }).catch(function () {
            res.status(400).send("Erro")
        })
    },

    getAll: async function(req, res) {
        await Usuario.findAll({
            attributes: ['id', 'name', 'email', 'cargo', 'ftperfil']
        }).then(function (req) {
            res.status(200).json(req)
        }).catch(function (erro) {
            res.status(400).send(erro)
        })
    },
    getById: function(req,res) {
        Usuario.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id','name','email','cargo','dataNasc','ftperfil', 'celular']
        }).then(function (requ) {
            res.status(200).json(requ)
        }).catch(function (erro) {
            res.status(400).send(erro);
        })
    } 
}