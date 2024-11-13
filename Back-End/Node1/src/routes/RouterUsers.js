const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/UsersController')
const UsersValidate = require('../middleware/UsersValidation')

router.get('/', UsersController.UsersList)
router.post('/', UsersValidate.UserCreateValidate, UsersController.UsersRegister)
router.put('/:id', UsersController.UserUpdate)
router.delete('/:id', UsersController.UserDelete)

module.exports = router