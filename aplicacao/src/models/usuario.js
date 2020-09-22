const database = require('./database')

const usuario = database.sequelize.define('usuario', {
    email: {
        type: database.Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: database.Sequelize.STRING,
        allowNull: false
    },
    firstName: {
        type: database.Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: database.Sequelize.STRING,
        allowNull: false
    },
    dataNasc: {
        type: database.Sequelize.DATEONLY,
        allowNull: false
    },
    cargo: {
        type: database.Sequelize.STRING,
        allowNull: false
    },
    sexo: {
        type: database.Sequelize.STRING,
        allowNull: false
    },
    ftperfil: {
        type: database.Sequelize.STRING,
        allowNull: false
    },
}, {
    // Other model options go here
});

// usuario.sync({force: true})

module.exports = usuario;
