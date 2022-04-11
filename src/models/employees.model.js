const db = require("../db");

exports.getAll = () => {
    return db.query('SELECT * FROM employees')

}

exports.getSingleEmployeeInfo =  (id) => {
    return db.query(`SELECT * FROM employees WHERE id = $1`, [id])
}

exports.addNewEmployee =  (firstname, lastname, birthday, salary, position) => {
    return db.query(`INSERT INTO Employees (id, firstname, lastname, birthday, salary, position)
                                            values ($1, $2, $3, $4, $5)
                                            RETURNING *`,
        [firstname, lastname, birthday, salary, position])
}

exports.deleteEmployee =  (id) => {
    return db.query(`DELETE
                                                FROM employees
                                                where id = $1
                                                RETURNING *`,
        [id])
}