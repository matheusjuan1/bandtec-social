const Post = require("../models/post");
const usuarios = require("../models/usuario");

module.exports = {
    add: function (req, res) {
        let requests = {}
        if (req.body.image == "1") {
            const { originalname: imageName = "", key: imageKey = "", location: imageUrl = "" } = req.file
            requests = {
                conteudo: req.body.conteudo,
                image: req.body.image,
                imageName,
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
                attributes: ['id', 'firstName', 'lastName', 'ftperfil']
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
    }
}