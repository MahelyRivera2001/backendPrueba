Documentación Prueba Técnica – Backend

1. Descripción del Proyecto
   API RESTful construida con Node.js y Express.js, diseñada para manejar el registro y gestión de colaboradores y vehículos con el objetivo de controlar las entradas y salidas de los mismos.

   El backend está pensado para ser modular, escalable y seguro, siguiendo buenas prácticas de desarrollo, como manejo de errores, validaciones y separación de responsabilidades.

2. Funcionalidades Principales

   2.1 Gestión de Vehículos
   Crear, editar, eliminar y listar vehículos.

   2.2 Gestión de Colaboradores (motoristas)
   Crear, editar, eliminar y listar colaboradores.

   2.3 Registro de Entradas y Salidas
   Registrar una entrada o salida de un vehículo.
   Campos requeridos: vehículo, motorista, fecha, hora, kilometraje y tipo (entrada/salida).
   Filtrado de registros por fecha, vehículo y motorista.

   2.4 API RESTful:
   Endpoints estructurados y documentados para consumir desde el frontend.
   Manejo de errores y respuestas (status y mensajes).
   Permite integración con cualquier cliente HTTP (React.js, Postman, etc.).

   2.5 Base de Datos (PostgreSQL)
   Modelo Vehiculo para almacenar información básica del vehículo.
   Modelo Colaborador para almacenar información básica del colaborador.
   Modelo EntradaSalida para registrar movimientos de los vehículos, relacionado con Vehiculo.

3. Tecnologías Utilizadas
   Node.js – Entorno de ejecución de JavaScript en el servidor.
   Express.js – Framework para crear la API de manera rápida y organizada.

   PostgreSQL – Base de datos relacional para almacenar vehículos, colaboradores y registros.

   Dotenv – Gestión de variables de entorno.

   Nodemon – Desarrollo más rápido con reinicio automático del servidor.

4. Estructura del Proyecto
   /backendPrueba
   │
   ├─ /config
   │ └─ db.js # Configuración de conexión con PostgreSQL
   ├─ /controllers # Lógica de cada ruta (Vehiculos, Colaboradores, Entradas/Salidas)
   ├─ /models # Modelos de datos
   ├─ /routes # Definición de rutas API
   ├─ app.js # Inicialización de Express y middlewares
   ├─ package.json
   └─ README.md

5. Instalación & configuración local
   5.1 Clonar repositorio: https://github.com/MahelyRivera2001/backendPrueba.git
   5.2 Instalar dependencias : npm install
   5.3 Crear archivo .env y definir las siguientes variables:
   DB_URL=postgresql://postgres:qLCtMtnnNSbVahQqinqEKmjOSWoOFalR@maglev.proxy.rlwy.net:12249/railway
   5.4 Ejecución servidor : npm run dev
