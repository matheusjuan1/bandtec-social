const Post = require("../models/post");
const usuarios = require("../models/usuario");

module.exports = {
    add: function (req, res) {

        Post.create({
            conteudo: req.body.conteudo,
            usuarioId: req.body.fkUsuario
        }).then(function (Post) {
            res.status(200).json(Post)
        }).catch(function () {
            res.status(400).send();
        });

    },
    getAll: function (req, res) {
        Post.findAll({
            order: [['createdAt', 'DESC']],
            include: [{
                model: usuarios,
                as: 'usuario'
            }] 
        }).then(function (Post) {
            res.status(200).json(Post)
        }).catch(function (err) {
            res.status(400).send(err)
        })
    },
    getByFk: function (req, res) {
        Post.findAll({
            where: {
                usuarioId: req.params.id
            },
            include: {
                model: usuarios,
                as: 'usuario'
            }
        }).then(function (Post) {
            res.status(200).json(Post)
        }).catch(function (err) {
            res.status(400).send(err)
        })
    },
    delete: function (req, res) {
        Post.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (Post) {
            res.status(200).json(Post)
        }).catch(function () {
            res.status(400).send("Erro")
        })
    },
    update: function (req, res) {
        Post.update({
            conteudo: req.body.conteudo
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (Post) {
            res.status(200).json(Post)
        }).catch(function () {
            res.status(400).send("Erro")
        })
    }
}