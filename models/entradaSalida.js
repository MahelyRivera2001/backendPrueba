// modelo para registro de entradas y salidas 
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Vehiculo = require('./Vehiculo');
const Colaborador = require('./colaborador');

const EntradaSalida = sequelize.define('EntradaSalida', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false
    },
    kilometraje: {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    tipo: {
        type: DataTypes.ENUM('ENTRADA', 'SALIDA'),
        allowNull: false
    }
}, {
    tableName: 'entradas_salidas',
    timestamps: true,
});

//relacion 1:N (vehiculo)
Vehiculo.hasMany(EntradaSalida, {foreignKey: 'vehiculoId'});
EntradaSalida.belongsTo(Vehiculo, {foreignKey : 'vehiculoId'});

//relacion 1:N (colaborador)
Colaborador.hasMany(EntradaSalida, {foreignKey: 'colaboradorId'});
EntradaSalida.belongsTo(Colaborador, {foreignKey : 'colaboradorId'});

module.exports = EntradaSalida;