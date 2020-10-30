const Post = require("../models/post");
const Usuario = require("../models/usuario");

module.exports = {
    add: function (req, res) {

        Post.create({
            conteudo: req.body.conteudo,
            id_usuario: req.body.idusuario
        }).then(function (Post) {
            res.status(200).json(Post)
        }).catch(function () {
            res.status(400).send();
        });

    },
    getAll: function (req, res) {
        Post.findAll({
            // include: {
            //     model: Usuario
            // },
            order: [['createdAt', 'DESC']]  
        }).then(function (Post) {
            res.status(200).json(Post)
        }).catch(function (err) {
            res.status(400).send(err)
        })
    },
    getById: function (req, res) {
        Post.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (Post) {
            res.status(200).json(Post)
        }).catch(function () {
            res.status(400).send("Erro")
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