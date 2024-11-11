const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/UsersController')

router.get('/', UsersController.UsersList)
router.post('/', UsersController.UsersRegister)
router.put('/:id', UsersController.UserUpdate)
router.delete('/:id', UsersController.UserDelete)

module.exports = router