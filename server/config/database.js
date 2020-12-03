const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect:  'mssql',
    timezone: 'America/Sao_Paulo',
    dialectOptions: {
        timezone: 'local'
    },
    logging: false
});

module.exports= {
    Sequelize: Sequelize,
    sequelize: sequelize
};