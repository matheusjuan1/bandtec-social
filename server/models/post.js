const database = require('../config/database');
const usuario = require('./usuario')


const post = database.sequelize.define('post', {
    conteudo: {
        type: database.Sequelize.STRING(700),
        allowNull: false
    }
}, {
    //
});


usuario.hasMany(post, {
    foreignKey: 'id_usuario'
})

// post.sync({force: true});

module.exports = post;