const {checkUniqueUser} = require("../models/users.model");
module.exports = async (req,res, next) => {

    let  { email } = req.body

    const isUserUnique = await checkUniqueUser(email)

    console.log(isUserUnique)

    if (isUserUnique.rows.length) {
        return res.status(409).json({"msg": `user with email: ${email} is already exists`})
    } else {
        return next()
    }
}