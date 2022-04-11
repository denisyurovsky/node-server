const express = require("express");
const router = express.Router()
const getAllEmployees = require('./routes/getAllEmployees');
const getSingleEmployeeInfo = require('./routes/getSingleEmployeeInfo');
const loginUser = require('./routes/loginUser')
const {checkTokenValidity} = require("./controllers/AuthController");
const employeeValidation = require('./middlewares/employeeValidation')
const addNewEmployee = require('./routes/addNewEmployee')
const checkCredentials = require('./middlewares/checkCredentials')
const registerNewUser = require('./routes/registerNewUser')
const deleteEmployee = require('./routes/deleteEmployee')
const checkUniqueUser = require('./middlewares/checkUniqueUser')

router.route('/employees')
    .get(getAllEmployees)
    .post(checkTokenValidity, employeeValidation, addNewEmployee)

router.route('/employees/:id')
    .get(getSingleEmployeeInfo)
    .delete(checkTokenValidity, deleteEmployee)

router.route('/login')
    .post(loginUser)

router.route('/register')
    .post(checkCredentials, checkUniqueUser, registerNewUser)

router.route('*')
    .all((req, res) => res.status(404).json('page not found'))


module.exports = router