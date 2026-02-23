const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const Vehiculo = require('./models/Vehiculo');

const vehiculosRoutes = require('./routes/vehiculos');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/vehiculos', vehiculosRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Modelos sincronizados con la base de datos');
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
  })
  .catch(err => console.log(err));