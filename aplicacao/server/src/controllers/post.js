const Post = require("../models/post");

module.exports = {
    add: function (req, res) {

        Post.create({
            conteudo: req.body.conteudo,
        }).then(function (Post) {
            res.status(200).json(Post)
        }).catch(function () {
            res.status(400).send("Erro");
        });

    },
    getAll: function (req, res) {
        Post.findAll().then(function (Post) {
            res.status(200).json(Post)
        }).catch(function () {
            res.status(400).send("Erro")
        })
    },
    getById: function (req, res) {
        Post.findAll({
            where: {
                id: req.body.id
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
                id: req.body.id
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
                id: req.body.id
            }
        }).then(function (Post) {
            res.status(200).json(Post)
        }).catch(function () {
            res.status(400).send("Erro")
        })
    }
}