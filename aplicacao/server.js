const express = require('express');

const app = express();

app.get('/login', (req, res) => {
    res.send
});

app.listen(3000, function (err) {
    if (!err) {
        console.log("Servidor iniciado na porta 3000: http://localhost:3000/");
    }
    else {
        console.log(err);
    }
});