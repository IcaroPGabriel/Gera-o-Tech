const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/UsersController')

router.get('/', UsersController.UsersList)
router.post('/', UsersController.UsersRegister)

module.exports = router