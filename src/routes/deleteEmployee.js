const {deleteEmployee} = require("../models/employees.model");

module.exports = async (req, res) => {

    try {
        const {id} = req.params
        const deletedEmployee = await deleteEmployee(id)
        if (!deletedEmployee.rows.length) {
            res.json({"error": `no employee with id: ${id} was found`})
        }

        return res.status(200).json(deletedEmployee.rows)
    } catch (e) {
        res.json(e)
    }
}