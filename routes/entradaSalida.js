// rutas para entradas y salidas
const express = require('express');
const router = express.Router();
const entradaSalidaController = require('../controllers/entradaSalidaController');

//GET /api/entradas-salidas?fecha=&vehiculoId=&colaboradorId=&tipo=
router.get('/', entradaSalidaController.getEntradas);
router.post('/', entradaSalidaController.createRegistro);

module.exports = router;