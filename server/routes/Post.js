const Post = require('express').Router();
const controllers = require('../controllers/post');
const multer = require('multer');
const multerConfig = require('../config/multer');


Post.route('/')
    .post( multer(multerConfig).single("file"), controllers.add)
    .get( controllers.getAll);

Post.route('/:id')
    .post(controllers.getByFk)
    .delete(controllers.delete)
    .put(controllers.update);


module.exports = Post;