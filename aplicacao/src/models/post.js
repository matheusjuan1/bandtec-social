const database = require('../config/database');


const post = database.sequelize.define('post', {
    conteudo: {
        type: database.Sequelize.STRING(700),
        allowNull: false
    }
}, {
    //
});

//post.sync({force: true});

module.exports = post;