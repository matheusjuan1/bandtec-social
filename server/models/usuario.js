const database = require('../config/database');
const bcrypt = require("bcrypt");
const post = require('./post')


const usuario = database.sequelize.define('usuario', {
    email: {
        type: database.Sequelize.STRING,
        allowNull: false
    },
    password: {
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
    celular: {
        type: database.Sequelize.STRING,
        allowNull: false
    },
    sexo: {
        type: database.Sequelize.STRING,
        allowNull: false
    },
    ftperfil: {
        type: database.Sequelize.STRING,
        allowNull: false,
        defaultValue:"images/sem-perfil.jpg"
    },
}, {
    //
});

usuario.beforeCreate((usuario) => {

    return bcrypt.hash(usuario.password, 10)
        .then(hash => {
            usuario.password = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });
});

usuario.prototype.validPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

// usuario.sync({force: true})

module.exports = usuario;
