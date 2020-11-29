const database = require('../config/database');
const usuario = require('./usuario');
const post = require('./post');

const curtidas = database.sequelize.define('curtidas', {

}, {
    // 
});

curtidas.belongsTo(post, {foreignKey: 'fkPost', ONDELETE: 'set null'});

curtidas.belongsTo(usuario, {foreignKey: 'fkUsuario', ONDELETE: 'set null'});


// curtidas.sync({ force: true });

module.exports = curtidas;