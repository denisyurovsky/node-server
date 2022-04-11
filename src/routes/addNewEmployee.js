const {addNewEmployee} = require("../models/employees.model");

module.exports =  async (req, res) => {
    try {
        const {firstname, lastname, birthday, salary, position} = req.body
        const newEmployee =  await addNewEmployee(firstname, lastname, birthday, salary, position)

        return res.status(200).json(newEmployee.rows)
    } catch (e) {
        res.json(e)
    }

}