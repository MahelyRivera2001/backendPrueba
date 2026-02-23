//modelo para colaboradores con el cargo de motorista
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Colaborador = sequelize.define('Colaborador', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'colaborador',
    timestamps: true
});

module.exports = Colaborador;