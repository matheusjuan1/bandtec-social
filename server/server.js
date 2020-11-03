const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require("body-parser");
const PostRoutes = require('./routes/Post');
const UsuarioRoutes = require('./routes/Usuario');



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


app.use('/post', PostRoutes);

app.use('/usuario', UsuarioRoutes);


app.listen(3030, function (err) {
    if (!err) {
        console.log("Servidor iniciado na porta 3030: http://localhost:3030/");
    }
    else {
        console.log(err);
    }
});