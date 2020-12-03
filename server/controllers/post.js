const Post = require("../models/post");
const usuarios = require("../models/usuario");
const likes = require('../models/like')

module.exports = {
    add: function (req, res) {
        let requests = {}
        if (req.body.image == "1") {
            const { key: imageKey = "", location: imageUrl = "" } = req.file
            requests = {
                conteudo: req.body.conteudo,
                image: req.body.image,
                imageKey,
                imageUrl,
                usuarioId: req.body.fkUsuario
            }
        } else {
            requests = {
                conteudo: req.body.conteudo,
                image: req.body.image,
                usuarioId: req.body.fkUsuario
            }
        }

        Post.create(requests)
            .then(function (Post) {
                res.status(201).json(Post)
            }).catch(function () {
                res.status(400).send();
            });

    },
    getAll: function (req, res) {
        Post.findAll({
            order: [['createdAt', 'DESC']],
            include: [{
                model: usuarios,
                as: 'usuario',
                attributes: ['id', 'name', 'ftperfil']
            }]
        }).then(function (Post) {
            res.status(200).json(Post)
        }).catch(function (err) {
            res.status(400).send(err)
        })
    },
    getByFk: function (req, res) {
        Post.findAll({
            order: [['createdAt', 'DESC']],
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
            res.status(202).json(Post)
        }).catch(function (err) {
            res.status(400).send(err)
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
    },
    // addComment: function (req, res) {
    //     Post.create({
    //         conteudo: req.body.conteudo,
    //         postId: req.body.fkpost,
    //         usuarioId: req.body.fkusuario
    //     }).then(function (response) {
    //         res.status(201).json(response);
    //     }).catch(function (error) {
    //         res.status(400)
    //     })
    // }
    // like: function (req, res) {
    //     // likes.create({
    //     //     usuarioId: req.body.fkusuario,
    //     //     postId: req.body.fkpost
    //     // }).then(function (response) {
    //     //     res.status(200).send(curtidas)
    //     // }).catch( function () {
    //     //     res.status(400).send("Erro")
    //     // })
    //     likes.findAll();
    // }
}