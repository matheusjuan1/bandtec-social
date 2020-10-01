const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const usuario = require('./src/models/usuario');


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

app.post('/cadastro', function(req, res) {
    
    usuario.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        celular: req.body.celular,
        cargo: req.body.cargo,
        sexo: req.body.sexo,
        dataNasc: req.body.dataNasc,
        password: req.body.senha1
    }).then(function () {
        res.redirect("/login");
    }).catch(function () {
        res.send("Erro: Cadastro não foi realizado");
    });
})



app.listen(3000, function (err) {
    if (!err) {
        console.log("Servidor iniciado na porta 3000: http://localhost:3000/");
    }
    else {
        console.log(err);
    }
});