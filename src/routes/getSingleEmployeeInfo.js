const {getSingleEmployeeInfo} = require("../models/employees.model");

module.exports = async (req, res) => {
    try {
        const {id} = req.params

        const response = await getSingleEmployeeInfo(id)

        if (response.rows == 0) {
            return res.json({"msg": `no employee with ${id} was found`})
        }
        return res.status(200).json(response.rows)

    } catch (e) {
        return res.status(500).json({message: `${e.message}`});
    }
};