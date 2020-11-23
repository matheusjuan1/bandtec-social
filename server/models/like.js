// const database = require('../config/database');
// const usuario = require('./usuario');
// const post = require('./post');

// const like = database.sequelize.define('like',{
//     coringa: {
//         type: database.Sequelize.INTEGER,
//         allowNull: false
//     }
// },{
//     //
// });

// like.belongsTo(post, {onDelete: 'CASCADE', hooks: true});

// like.belongsTo(usuario, {onDelete: 'CASCADE', hooks: true});

// like.sync({ force: true });

// module.exports = post;