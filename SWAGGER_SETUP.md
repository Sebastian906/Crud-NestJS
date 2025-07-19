# User CRUD API with Swagger Documentation

Este proyecto es una aplicación NestJS que implementa un CRUD completo para la gestión de usuarios con documentación Swagger integrada.

## 🚀 Características Implementadas

- ✅ **Swagger UI** integrado en `/api`
- ✅ **Documentación automática** de todas las APIs
- ✅ **DTOs con validaciones** usando class-validator
- ✅ **Validaciones automáticas** en los endpoints
- ✅ **Esquemas de respuesta** detallados
- ✅ **Ejemplos** en la documentación

## 🛠️ Tecnologías Utilizadas

- **NestJS** - Framework Node.js
- **Swagger** - Documentación de APIs
- **class-validator** - Validaciones de DTOs
- **class-transformer** - Transformación de datos

## 📦 Dependencias Instaladas

```bash
npm install --save @nestjs/swagger swagger-ui-express class-validator class-transformer
```

## 🚀 Cómo Ejecutar

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm run start:dev
   ```

3. **Acceder a Swagger UI:**
   Abre tu navegador en: `http://localhost:3000/api`

## ⚠️ Solución de Problemas

### Error de Puerto Ocupado (EADDRINUSE)

Si ves el error `Error: listen EADDRINUSE: address already in use :::3000`, significa que ya hay una instancia corriendo. Puedes:

1. **Verificar si la aplicación ya está funcionando:**
   - Ve a `http://localhost:3000/api` en tu navegador
   - Si carga Swagger UI, ¡ya está funcionando!

2. **Terminar procesos existentes:**
   ```bash
   # En Windows
   netstat -ano | findstr :3000
   taskkill /PID <PID_NUMBER> /F
   
   # O simplemente reinicia el terminal
   ```

3. **Usar un puerto diferente:**
   - Modifica el archivo `.env` y agrega `PORT=3001`
   - O cambia la línea en `main.ts`: `const PORT = process.env.PORT ?? 3001;`

## 📍 Endpoints Disponibles

### 📋 Obtener todos los usuarios
- **GET** `/user/all`
- **Descripción:** Devuelve una lista con todos los usuarios registrados

### 🔍 Obtener usuario por ID
- **GET** `/user/:id`
- **Descripción:** Devuelve la información de un usuario específico
- **Parámetros:** `id` (number) - ID del usuario

### ➕ Crear nuevo usuario
- **POST** `/user/create`
- **Descripción:** Crea un nuevo usuario en el sistema
- **Body requerido:**
  ```json
  {
    "name": "Juan Pérez",
    "email": "juan.perez@email.com",
    "phone": "+57 300 123 4567",
    "imageUrl": "https://example.com/avatar.jpg"
  }
  ```

### ✏️ Actualizar usuario
- **PUT** `/user/update/:id`
- **Descripción:** Actualiza la información de un usuario existente
- **Parámetros:** `id` (number) - ID del usuario
- **Body (campos opcionales):**
  ```json
  {
    "name": "Juan Pérez Actualizado",
    "email": "nuevo.email@email.com",
    "phone": "+57 300 123 4567",
    "imageUrl": "https://example.com/new-avatar.jpg"
  }
  ```

### 🗑️ Eliminar usuario
- **DELETE** `/user/delete/:id`
- **Descripción:** Elimina un usuario del sistema
- **Parámetros:** `id` (number) - ID del usuario
- **Respuesta:** Lista actualizada de usuarios

## 📝 DTOs y Validaciones

### CreateUserDto
- `name`: String (mínimo 2 caracteres, requerido)
- `email`: Email válido (requerido)
- `phone`: String (requerido)
- `imageUrl`: URL válida (requerido)

### UpdateUserDto
- `name`: String (mínimo 2 caracteres, opcional)
- `email`: Email válido (opcional)
- `phone`: String (opcional)
- `imageUrl`: URL válida (opcional)

## 🎯 Validaciones Implementadas

- **Validación de email** con formato correcto
- **Validación de URL** para imágenes
- **Longitud mínima** para nombres
- **Campos requeridos** vs opcionales
- **Transformación automática** de tipos
- **Filtrado de propiedades** no permitidas

## 🌐 Swagger UI

La documentación de Swagger está disponible en `http://localhost:3000/api` e incluye:

- 📖 **Documentación completa** de todos los endpoints
- 🧪 **Interfaz de pruebas** interactiva
- 📋 **Esquemas de datos** detallados
- 🎯 **Ejemplos** de requests y responses
- ✅ **Códigos de respuesta** y posibles errores
- 🏷️ **Tags** organizados por funcionalidad

## 🔧 Archivos Modificados/Creados

1. **main.ts** - Configuración de Swagger y validaciones globales
2. **app.controller.ts** - Decoradores Swagger en el controlador
3. **src/dto/user.dto.ts** - DTOs con validaciones
4. **package.json** - Nuevas dependencias

## 🎨 Personalización de Swagger

La configuración de Swagger incluye:

```typescript
const config = new DocumentBuilder()
  .setTitle('User CRUD API')
  .setDescription('API para gestión de usuarios - CRUD completo')
  .setVersion('1.0')
  .addTag('users', 'Operaciones CRUD para usuarios')
  .build();
```

## 🧪 Pruebas con curl

```bash
# Obtener todos los usuarios
curl -X GET "http://localhost:3000/user/all"

# Obtener usuario por ID
curl -X GET "http://localhost:3000/user/1"

# Crear nuevo usuario
curl -X POST "http://localhost:3000/user/create" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+1234567890",
    "imageUrl": "https://example.com/avatar.jpg"
  }'
```

## 📚 Recursos Adicionales

- [Documentación oficial de NestJS Swagger](https://docs.nestjs.com/openapi/introduction)
- [Class Validator Documentation](https://github.com/typestack/class-validator)
- [Swagger UI](https://swagger.io/tools/swagger-ui/)

---

✨ **¡Tu API CRUD está completamente documentada y lista para usar con Swagger!** ✨
