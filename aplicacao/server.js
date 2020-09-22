const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const db = require('./src/models/conexao')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static('public'));


// 

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', '/login.html'));
});

app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', '/cadastro.html'));
});



app.listen(3000, function (err) {
    if (!err) {
        console.log("Servidor iniciado na porta 3000: http://localhost:3000/");
    }
    else {
        console.log(err);
    }
});