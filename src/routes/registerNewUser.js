const bcrypt = require('bcryptjs');
const {createNewUser} = require("../models/users.model");

module.exports = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        let  {username, email, password} = req.body

        password = bcrypt.hashSync(password, salt)

        const newUser = await createNewUser(email, username, password)

        return res.status(200).json({message: 'user was successfully created'})
    } catch (e) {
        return res.status(500).json({message: `${e.message}`});
    }
};