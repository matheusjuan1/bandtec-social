const database = require('../config/database');
const usuario = require('./usuario');
const aws = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const s3 = new aws.S3();


const post = database.sequelize.define('post', {
    conteudo: {
        type: database.Sequelize.STRING(700),
        allowNull: true
    },
    image: {
        type: database.Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0
    },
    imageKey: {
        type: database.Sequelize.STRING(350),
        allowNull: true
    },
    imageUrl: {
        type: database.Sequelize.STRING(350),
        allowNull: true
    }
}, {
    // 
});

post.beforeCreate((post) => {
    if (post.image) {
        if (!post.imageUrl) {
            post.imageUrl = `${process.env.APP_URL}/files/${post.imageKey}`
        }
    }
    
});

post.beforeDestroy((post) => {
    if (process.env.STORAGE_TYPE === 's3') {
         s3.deleteObject({
            Bucket: 'upload-bandtec-social',
            Key: post.imageKey
        })
    } else {
        promisify(fs.unlink)(path.resolve(__dirname, "..", "tmp", "uploads", post.imageKey))
    }
})

post.belongsTo(post, {onDelete: 'CASCADE', hooks: true});

post.belongsTo(usuario, { onDelete: 'CASCADE', hooks: true});

// post.sync({ force: true });

module.exports = post;