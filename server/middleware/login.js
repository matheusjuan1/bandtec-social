const jwt = require('jsonwebtoken');

module.exports = function(req, res) {

    try {
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.JWT_KEY)
        req.usuario = decode;
        res.status(200).send(decode);
    } catch (error) {
        return res.status(401).send("Falha na autenticação")
    }
}