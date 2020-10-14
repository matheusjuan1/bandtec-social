const Sequelize = require('sequelize');

const sequelize = new Sequelize('bandtecsocial', 'Matheus', '2601juan', {
    host: 'localhost',
    dialect:  'mysql'
});

module.exports= {
    Sequelize: Sequelize,
    sequelize: sequelize
};