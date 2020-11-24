const database = require('../config/database');

const likes = database.sequelize.define('likes', {
    conteudo: {
        type: database.Sequelize.STRING,
        allowNull: false
    }
}, {
    // 
});


likes.sync({ force: true });

module.exports = likes;