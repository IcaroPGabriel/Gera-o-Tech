const connection = require('../database/connection')
const { DataTypes } = require('sequelize')

let CategoryModel = connection.define ('category', {
    
    name: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    use_in_menu: {
        type: DataTypes.BOOLEAN(0),
        allowNull: true
    }
})


module.exports = CategoryModel