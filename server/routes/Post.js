const express = require('express');
const Post = express.Router();
const controllers = require('../controllers/post');
const login = require('../middleware/login');


Post.route('/', login)
    .post(controllers.add)
    .get(controllers.getAll);

Post.route('/:id', login)
    .post(controllers.getByFk)
    .delete(controllers.delete)
    .put(controllers.update);


module.exports = Post;