const connection = require('../config/database/connection')
const { DataTypes } = require('sequelize')

const UserModel = require('./UserModel')

const EnderecoModel = connection.define('Address', {
    
    user_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
            model:UserModel,
            key:'id'
        },
        onDelete: 'CASCADE'
    },
    rua: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    numero: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    cidade: {
        type: DataTypes.DECIMAL(20),
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    cep: {
        type: DataTypes.STRING(20),
        allowNull: false

    }

})

module.exports = EnderecoModel
