const Sequelize = require('sequelize');

const sequelize = new Sequelize('bandtecsocial', 'Matheus', '2601juan', {
    host: 'localhost',
    dialect:  'mysql',
    timezone: 'America/Sao_Paulo',
    dialectOptions: {
        timezone: 'local'
    },
    "JWT_KEY": "segredo"
});

module.exports= {
    Sequelize: Sequelize,
    sequelize: sequelize
};