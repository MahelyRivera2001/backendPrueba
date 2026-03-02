const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');

const vehiculosRoutes = require('./routes/vehiculos');
const colaboradorRoutes = require('./routes/colaborador');
const entradaSalidasRoutes = require('./routes/entradaSalida');

const app = express();
app.use(cors());
app.use(express.json());

//ruta health
app.get('/', (req, res) => {
  res.status(200).send('Servidor activo');
});

// Rutas
app.use('/api/vehiculos', vehiculosRoutes);
app.use('/api/colaboradores', colaboradorRoutes);
app.use('/api/entradas-salidas', entradaSalidasRoutes)

const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Modelos sincronizados con la base de datos');
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
  })
  .catch(err => console.log(err));