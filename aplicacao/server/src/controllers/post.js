const Post = require("../models/post");

module.exports = {
    add: function (req, res) {

        Post.create({
            conteudo: req.body.conteudo,
            id_usuario: req.body.idusuario
        }).then(function (Post) {
            res.status(200).json(Post)
        }).catch(function () {
            res.status(400).send("Erro");
        });

    },
    getAll: function (req, res) {
        Post.findAll({
            order: [['createdAt', 'DESC']]
        }).then(function (Post) {
            res.status(200).json(Post)
        }).catch(function () {
            res.status(400).send("Erro")
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