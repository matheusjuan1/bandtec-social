const express = require('express');
const Post = express.Router();
const controllers = require('../controllers/post');


Post.route('/')
    .post(controllers.add)
    .get(controllers.getAll);

Post.route('/id')
    .post(controllers.getById);

Post.route('/deletar')
    .delete(controllers.delete);
    
Post.route('/atualizar')
    .put(controllers.update);

module.exports = Post;