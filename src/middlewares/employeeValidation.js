const employeeSchema = require("../schemas/Employees.schema.js");

module.exports = (req, res, next) => {
    const result = employeeSchema.validate(req.body, {abortEarly: false, allowUnknown: false});

    if (result.error) {
        return res.status(400).json(result.error.details.map(error => error.message));
    }

    return next()
}