const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require("body-parser");
const usuario = require('./models/usuario');
const PostRoutes = require('./routes/Post');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static('public'));

app.use(cors());

// 

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', '/login.html'));
});

app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', '/cadastro.html'));
});

app.post('/cadastro', function (req, res) {

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
});

app.post('/login', function (req, res) {

    usuario.findOne({
        where: {
            email: req.body.email,
        }
    }).then(async function (usuario) {
        res.status(200);
        if (!usuario) {
            res.send("Não tem usuário")
        }
        else if (!await usuario.validPassword(req.body.senha)) {
            res.send("Senha errada")
        }
        else {
            res.json(usuario)
        }
    }).catch(function () {
        res.status(400).send("Erro")
    })

});

app.use('/api', PostRoutes);



app.listen(3030, function (err) {
    if (!err) {
        console.log("Servidor iniciado na porta 3030: http://localhost:3030/");
    }
    else {
        console.log(err);
    }
});