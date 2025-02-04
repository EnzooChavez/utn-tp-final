# 🌐 Trabajo Final UTN - Diplomatura Web Full Stack

Este proyecto es una API REST desarrollada como trabajo final para la Diplomatura en Desarrollo Web Full Stack de la UTN. La API permite administrar operaciones CRUD de los siguientes modelos:

👤 **User** 
📦 **Product**
📁 **Category**

## 🚀 Tecnologías utilizadas

- **Node.js**
- **Express.js**
- **MongoDB con Mongoose**
- **JSON Web Token (JWT)**
- **Bcrypt**
- **Dotenv**
- **Cors**
---

## 📂 Pasos para correr el proyecto

### 1️⃣ Clonar el repositorio
Ejecuta el siguiente comando en la terminal:

```sh
 git clone https://github.com/EnzooChavez/utn-tp-final
```

### 2️⃣ Instalar dependencias
Navega hasta la carpeta raíz del proyecto y ejecuta:

```sh
 npm i  
```

### 3️⃣ Configurar la base de datos y variables de entorno

- Abre **MongoDB Compass** y conecta la base de datos.
- Asegúrate de que en el archivo **.env** del proyecto la conexión a MongoDB coincida con la configuración de Compass.
- Crea un archivo .env en la raíz del proyecto con las siguientes variables:
```
PORT = 3007
MONGODB_URI = mongodb://127.0.0.1:27017/backend
SECRET = mi-clave-super-secreta-y-larga-12345
```

### 4️⃣ Levantar el servidor
Ejecuta el siguiente comando para iniciar el servidor en modo desarrollo:

```sh
 npm run dev
```

---

## 📌 Endpoints disponibles

### **🔹 User**
- `GET /api/user/get` - Obtener todos los usuarios
- `POST /api/user/create` - Crear un nuevo usuario
- `POST /api/user/login` - Iniciar sesión

### **🔹 Product**
- `GET /api/product/get` - Obtener todos los productos (con token!)
- `POST /api/product/create` - Crear un nuevo producto
- `DELETE /api/product/:id` - Eliminar un producto
- `PUT /api/product/:id` - Actualizar un producto

### **🔹 Category**
- `GET /api/category/get` - Obtener todas las categorías
- `POST /api/category/create` - Crear una nueva categoría
- `DELETE /api/category/:id` - Eliminar una categoría
- `PUT /api/category/:id` - Actualizar una categoría

---

## 📌 Mocks para pruebas

Puedes utilizar los siguientes datos de ejemplo para hacer pruebas en la API a traves de un cliente web como por ejemplo "Thunder Client":

### **User**
```json
{
  "name": "gabriel",
  "password": "asd",
  "email": "gabriel@gmail.com",
  "role": "ADMIN"
}
```

### **Product**
```json
{
  "name": "barril-30lt",
  "status": "AVAILABLE",
  "price": 30000
}
```

### **Category**
```json
{
  "name": "barril-30lt",
  "description": "envase para choperas"
}
```

### 🔍 **Validaciones**
```
- Todos los campos **required** deben ser proporcionados.
- Los **emails** deben ser únicos en la base de datos.
- Los **nombres de categorías** deben ser únicos.
- Los **precios y stock** no pueden ser negativos.
- Las **contraseñas** son encriptadas automáticamente antes de guardarse.
```
# 📊Modelos de Datos

## **Usuario**
- `name` (String, **required**, único)
- `password` (String, **required**)
- `email` (String, **required**, único)
- `roles` (Array de Strings: ["ADMIN", "MERCHANT", "CUSTOMER"])
- `image` (String, default: URL de imagen aleatoria)

## **Producto**
- `nombre` (String, **required**)
- `tipo` (String, **required**)
- `relleno` (String, **required**)
- `precio` (Number, **required**, min: 0)
- `stock` (Number, **required**, min: 0)

## **Categoría**
- `name` (String, **required**, único)
- `description` (String)

