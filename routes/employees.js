const express = require('express')
const router = express.Router()

const EmployeeController = require('../contollers/EmployeesController')

router.get('/', EmployeeController.showAllEmployees)
router.get('/getById', EmployeeController.getById)
router.post('/addEmployee', EmployeeController.addEmploee)
router.post('/update', EmployeeController.update)
router.post('/delete', EmployeeController.deleteEmploye)

module.exports = router