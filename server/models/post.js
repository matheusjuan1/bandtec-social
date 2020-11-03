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


post.belongsTo(usuario);

// post.sync({ force: true });

module.exports = post;