const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'Matheus',
    password: '2601juan',
    database: 'bandtecsocial'
});

conexao.connect(function(err){
    if(err) throw err;
});

module.exports = conexao;