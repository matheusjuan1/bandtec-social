const Sequelize = require('sequelize');

const sequelize = new Sequelize('bandtecsocial', 'Matheus', '2601juan', {
    host: 'localhost',
    dialect:  'mysql',
    timezone: 'America/Sao_Paulo',
    dialectOptions: {
        timezone: 'local'
    }
});

module.exports= {
    Sequelize: Sequelize,
    sequelize: sequelize
};