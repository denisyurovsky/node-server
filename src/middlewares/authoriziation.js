const AuthController = require("../controllers/AuthController");
module.exports = (req,res, next) => {
    let token = req.headers.Authorization.split(' ')[1];

    if (!token) {
        next(new Error())
    }

    try {
        AuthController.checkTokenValidity(token)

        return next()
    } catch (error) {
        next(error)
    }

}