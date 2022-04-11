const jwt = require("jsonwebtoken");
exports.checkTokenValidity = (req, res, next) => {
    try {
        const token = req.headers.authorization.replace(/bearer/i, '').slice(1)

        const result = jwt.verify(token, 'secret')

        if (result) {
          return next()
        }

    } catch (error) {
        return res.status(400).json(error)
    }
}