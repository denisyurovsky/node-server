const db = require("../db");
exports.getUserPassword =  (email) => {
    return db.query('SELECT password FROM users where email = $1', [email])
}

exports.createNewUser =  (email, username, password) => {
    return  db.query(`INSERT INTO users (email, username, password)
        values ($1, $2, $3)`,
        [email, username, password])
}

exports.checkUniqueUser = (email) => {
    return db.query('SELECT * FROM users WHERE email = $1', [email])
}