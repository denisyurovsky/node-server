const db = require("../models/employees.model");

module.exports = async (req, res) => {
    
    try {
        const response = await db.getAll()
        res.json(response)
        
    } catch (e) {
        res.status(500).json({message: `${e.message}`});
    }
};