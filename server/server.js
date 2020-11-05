const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const PostRoutes = require('./routes/Post');
const UsuarioRoutes = require('./routes/Usuario');
const login = require('./middleware/login');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

// 

app.use('/post', PostRoutes, login);

app.use('/usuario', UsuarioRoutes);


app.listen(3030, function (err) {
    if (!err) {
        console.log("Servidor iniciado na porta 3030: http://localhost:3030/");
    }
    else {
        console.log(err);
    }
});