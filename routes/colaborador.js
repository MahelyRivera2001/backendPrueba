//rutas CRUD para Colaboradores
const express = require('express');
const router = express.Router();
const colaboradorController = require('../controllers/colaboradorController');

router.get('/', colaboradorController.getColaborador);
router.post('/', colaboradorController.createColaborador);
router.put('/:id', colaboradorController.updateColaborador);
router.delete('/:id', colaboradorController.deleteColaborador);

module.exports = router;