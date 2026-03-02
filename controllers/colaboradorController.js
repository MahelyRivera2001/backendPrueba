const Colaborador = require('../models/colaborador');

exports.getColaborador = async (req, res) => {
    try {
        const colaborador = await Colaborador.findAll();
        res.json(colaborador);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createColaborador = async (req, res) => {
    const { nombre } = req.body;
    try {
        const nuevoColaborador = await Colaborador.create({ nombre });
        res.status(201).json(nuevoColaborador);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};

exports.updateColaborador = async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    try {
        const colaborador = await Colaborador.findByPk(id);
        if (!colaborador) return res.status(404).json({ message: 'Colaborador no encontrado'});
        await colaborador.update({ nombre});
        res.json(colaborador);
    } catch (error) {
        res.status(500).json({ message : error.message});
    }
};

exports.deleteColaborador = async (req, res) => {
    const { id } = req.params;
    try {
        const colaborador = await Colaborador.findByPk(id);
        if (!colaborador) return res.status(404).json({ message: 'Colaborador no encontrado'})
        await colaborador.destroy();
        res.json({ message: 'Colaborador eliminado exitosamente.'});

    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};
