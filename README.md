# Desafio-api

Pasos para arrancar la api con todos sus elementos e informacion:

---



**Paso 1:** Una vez alojado la carpeta de la api, se debe correr el comando "npm i" para instalar todas las dependencias que trae.

**Paso 2:** Se debe crear una base de datos vacía llamada "landscape" de forma local.

**Paso 3:** Volviendo a la terminal, arrancar el comando "npm run dev" para que corra la api generando la arquitectura de la base de datos creada. Alfinal dira "tablas sincronizadas" y la api estará lista para escuchar peticiones en el puerto 3000 (localhost:3000).

**Importante:** Es necesario aplicar los seeders precargados para poder tener informacion en las tablas de usuario y permisos. Se debe pausar la api (recomendado), y luego arrancar el siguiente comando "npm run datos", el cual ingresara a travez de los seeders una informacion para ser utilizada.

---

Debido a tener el front incompleto, puede realizar las siguientes peticiones mediante postman el cual seran indicadas a continuacion.

Una vez instalado y abierto postman, el primer paso para poder realizar las peticiones es generar una validacion de usuario (login) para que genere un token (duracion 3 horas), el cual será utilizado para cada peticion. Caso contrario no podra devolver la informacion de la base de datos ya que tiene comprobacion JWT.

**Login:**

Metodo POST -> http://localhost:3000/login

enviando parametros (Body -> raw -> JSON)
DATO TEST -> {"email":"sanji@lanscape.cl","pass":"sanji555"} 

**Mostrar usuarios:**

Metodo GET -> http://localhost:3000/cargarUsuarios

TOKEN -> Authorization -> Bearer Token -> "Agregar token generado del login"

**Crear Usuario:** 

Metodo POST -> http://localhost:3000/crearUsuario

TOKEN -> Authorization -> Bearer Token -> "Agregar token generado del login"

DATO TEST ->{"nombre":"Jinbe","email":"jinbe@landscape.cl","password":"jinbe1"}

**Modificar Usuario:**

Metodo PUT -> http://localhost:3000/actualizarUsuario/2 (actualizará datos del usuario con id 2 )

TOKEN -> Authorization -> Bearer Token -> "Agregar token generado del login"

DATO TEST -> {"nombre":"Zoro  modificado","email":"zoroModificado@landscape.cl"}

**Eliminar Usuario:** 

Metodo DELETE: http://localhost:3000/eliminarUsuario/4 (eliminará el usuario con id 4)

TOKEN -> Authorization -> Bearer Token -> "Agregar token generado del login"

Gracias por el desafio ! :D






---
