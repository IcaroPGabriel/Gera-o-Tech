const express = require('express')
const router = express.Router()
const ProductListController = require('../controllers/ProductListController')

router.get('/', ProductListController.ProductList);
router.post('/', ProductListController.ProductCreate);

module.exports = router