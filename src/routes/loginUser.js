const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const {getUserPassword} = require("../models/users.model");


module.exports = async  (req, res) => {

        const {email, password} = req.body

        const userPassword = await getUserPassword(email)

        if(userPassword.rows == 0) {
            return res.json({"msg": `no user with ${email} was found`});
        }

        if(!bcrypt.compareSync(password, userPassword.rows[0].password)) {
        return res.status(401).send({
            success: false,
            message: "Incorrect username or password"
        })
    }
        const payload = {
            email,
        }

        const token = jwt.sign(payload, 'secret', { expiresIn: 60 * 5 });

        return res.status(200).send({
            success: true,
            message: "Logged in successfully!",
            token: "Bearer " + token
        })
    }
