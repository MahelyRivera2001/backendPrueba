const Vehiculo = require('../models/Vehiculo');

exports.getVehiculos = async (req, res) => {
    try {
        const vehiculos = await Vehiculo.findAll();
        res.json(vehiculos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createVehiculo = async (req, res) => {
    const { marca, modelo, placa } = req.body;
    try {
        const nuevoVehiculo = await Vehiculo.create({ marca, modelo, placa });
        res.status(201).json(nuevoVehiculo);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};

exports.updateVehiculo = async (req, res) => {
    const { id } = req.params;
    const { marca, modelo, placa } = req.body;
    try {
        const vehiculo = await Vehiculo.findByPk(id);
        if (!vehiculo) return res.status(404).json({ message: 'Vehículo no encontrado'});
        await vehiculo.update({ marca, modelo, placa});
        res.json(vehiculo);
    } catch (error) {
        res.status(500).json({ message : error.message});
    }
};

exports.deleteVehiculo = async (req, res) => {
    const { id} = req.params;
    try {
        const vehiculo = await Vehiculo.findByPk(id);
        if (!vehiculo) return res.status(404).json({ message: 'Vehículo no encontrado'})
        await vehiculo.destroy();
        res.json({ message: 'Vehículo eliminado exitosamente.'});

    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};
