const jwt = require('jsonwebtoken');

module.exports = {
    AUTH_JWT: function(req, res) {

    try {
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.JWT_KEY)
        res.status(200).send(decode);
    } catch (error) {
        return res.status(401).send("Falha na autenticação")
    }
    },
    VALIDATE_JWT: function(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            jwt.verify(token, process.env.JWT_KEY)
            res.status(200).send("jwt_auth_valid_token");
        } catch (error) {
            return res.status(403).send("jwt_auth_invalid_token")
        }
    }
}