//controlador para registro de entradas y salidas
const Colaborador = require('../models/colaborador');
const EntradaSalida = require('../models/entradaSalida');
const Vehiculo = require('../models/Vehiculo');

exports.getEntradas = async (req, res) => {
    const { fecha, vehiculoId, colaboradorId, tipo} = req.query;
    const where = {};
    if (fecha) where.fecha = fecha; 
    if (vehiculoId) where.vehiculoId = vehiculoId;
    if (colaboradorId) where.colaboradorId = colaboradorId;
    if (tipo) where.tipo = tipo;

    try {
        const entradas = await EntradaSalida.findAll({
            where,
            include: Vehiculo
        });
        res.json(entradas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createRegistro = async (req, res) => {
    const { fecha, hora, vehiculoId, colaboradorId, kilometraje, tipo} = req.body;

    //validación de campos obligatorios
    if (!vehiculoId || !colaboradorId || !tipo || !kilometraje) {
        return res.status(400).json({ message: 'Faltan datos requeridos'});
    }

    //validación los tipos (ENTRADA O SALIDA)
    const tiposValidos = ['ENTRADA', 'SALIDA'];
    if (!tiposValidos.includes(tipo)) {
        return res.status(400).json({ message: 'Tipo inválido. Debe ser "ENTRADA" o "SALIDA"'})
    }

    try {
        //verificación de existencia del vehículo
        const vehiculo = await Vehiculo.findByPk(vehiculoId);
        if (!vehiculo) {
            return res.status(404).json({ message: 'Vehículo no encontrado '});
        }

        //creacion de registro
        const registro = await EntradaSalida.create({
            fecha: fecha || new Date(), //toma la fecha automaticamente
            hora: hora || new Date().toTimeString().split(' ')[0], //toma la hora automaticamente
            vehiculoId,
            colaboradorId,
            kilometraje,
            tipo
        });

        const registroCompleto = await EntradaSalida.findByPk(registro.id, {
            include: [Vehiculo, Colaborador]
        });

        res. status(201).json(registro);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};