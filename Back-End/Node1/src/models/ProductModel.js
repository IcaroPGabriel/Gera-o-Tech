const connection = require('../config/database/connection')
const { DataTypes } = require('sequelize')

let ProductModel = connection.define ( 'product', { 

    description: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    color: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(15,2),
        allowNull: false
    },
    stock: {
        type: DataTypes.STRING(20),
        allowNull: false
    },



})

module.exports = ProductModel