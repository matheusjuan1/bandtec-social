const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {

    try {
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.JWT_KEY)
        req.usuario = decode;
        next();
    } catch (error) {
        return res.status(401).send("Falha na autenticação")
    }
}