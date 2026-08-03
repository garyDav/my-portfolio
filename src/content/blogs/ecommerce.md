---
title: Aplicación Web Ecommerce
author: Ing. Gary Guzmán
img: ecommerce/banner-curso.webp
description: Desarrollo de una aplicación web ecommerce con NodeJS, Express, Pug, MongoDB.
readtime: 60
---

#### ©️ Por: Ing. Gary Guzmán

###### [👨‍💻 Repositorio](https://github.com/garyDav/ecommerce) mis resúmenes por [@garyDav](https://github.com/garyDav)

> 🗓️ Publicado, 01 de abril del 2022

---

## Ramas en git

Estando en la rama master.

```shell
git add .
git commit -m "new rama"
git checkout -b newRama
git push origin newRama
git checkout master
git push origin master

git checkout newRama
git merge master
```

### 01BasicStructure

Estructura básica de un proyecto en NodeJS, Express, Template engine (Pug) y MongoDB.

#### Comandos:

```shell
mkdir ecommerce
cd ecommerce
npm init -y
npm i -S express
npm i -S pug
npm i -D nodemon
```

#### Archivos añadidos:

- package.`json`
- index.`js`
- .`gitignore`
- avance.`md`

#### Archivos actualizados:

- index.`js`
- package.`json`

---

### 02PugTemplateEngine

Usando Pug como Template Engine.

#### Archivos añadidos:

- ./routes/products.`js`
- ./views/products.`pug`

#### Archivos actualizados:

- index.`js`

---

### 03ImplementBulmaInPug

Implementando el framework Bulma en el Template Engine "Pug".

Bulma solo tiene CSS, lo que lo hace muy liviano a comparación de Bootstrap.

#### Archivos añadidos:

- ./views/footer.`pug`
- ./views/navbar.`pug`
- ./views/layout.`pug`

#### Archivos actualizados:

- ./views/products.`pug`

---

### 04StaticFiles

Implementando archivos estáticos.

#### Archivos añadidos:

- ./public/assets/main.`css`
- ./public/images/hero-bg.`jpg`
- ./public/logo/octolion-white@2x.`png`
- ./public/logo/octolion@2x.`png`
- ./public/favicon.`png`

#### Archivos actualizados:

- index.`js`
- ./views/layout.`pug`
- ./views/products.`pug`
- ./views/footer.`pug`
- ./views/navbar.`pug`

---

### 05API_REST-FULL

Implementando la anatomía para una API REST-FULL.

REST, estilo de arquitectura para Web services, no es un estándar pero si existe una especificación por Roy Fielding cofundador de Apache, HTTP Server y el director de Apache Software Foundation, y actualmente trabaja para Adobe. Consiste en el envío y recibimiento de archivos `json` y `XML`, utiliza HTTP Verbs explícitamente (GET, POST, DELETE, etc...), también tiene un patrón de URI y está basado en directorios para las rutas.

![HTTP Verbs](/img/blogs/ecommerce/verbs.png)

![API Verbs](/img/blogs/ecommerce/api-verbs.png)

#### Archivos añadidos:

- ./routes/api/products.`js`
- ./utils/mocks/products.`js`

#### Archivos actualizados:

- index.`js`
- ./routes/products.`js`

---

### 06ServiceLayer

Implementando capa de servicio.

Veremos una arquitectura que está basada en MVC.

La arquitectura MVC se quedó corto, autores como Taylor Otwell creador de Laravel, habla de que no es suficiente, MVC debería ser llamado: Separación de Problemas.

Nuestro "Modelo" es parte del paquete "Librerías", este paquete es básicamente el que se encarga de conectarse con librerías externas, es decir: Base de datos, Base de datos de otros servicios, y otras APIs. La "Vista" realmente está representada por los datos que enviamos o recibimos que nos envía el "Controlador", la función de este "Controlador" es simplemente recibir y enviar datos a la "Vista". En éste caso nuestro "Controlador" está representado por los Middlewares y Router que implementamos, este "Controlador" también se encargan de las API que en este caso reciben y envían JSON. Y los **Servicios** es el corazón de nuestra aplicación, los servicios se encargan, no solo de llamar a las "Librerías", si no llamar a otros **Servicios**, básicamente la **Lógica de Negocios** centra en esta parte.

Explicando el flujo: Sea que reciba una llamada por una **_View_** o un **_API_** el **_Controllers_** recibe ésta información y su única tarea es pasarle ésta información a los **_Services_**, éstos Servicios deciden que hacer con esto, ya sea llamar a otros Servicios, si van aplicar una Lógica de Negocios, si van aplicar Reglas de Seguridad, etc., y cuándo ya tengan claro eso, ésos Servicios llaman a las **_Libraries (Lib)_**, la lógica que deberían tener las Librerías es exclusivamente para el consumo de Datos, puede que llame a las Librerías de MongoDB, en Firebase, ó para llamar a otra API que sea posible. Ésto es básicamente la arquitectura.

![Capas MVC](/img/blogs/ecommerce/MVC.png)

#### Comandos:

```shell
npm i -S body-parser
```

Para desinstalar una librería de nuestro package.`json`.

```shell
npm uninstall -S body-parse
```

#### Archivos añadidos:

- ./services/products.`js`

#### Archivos actualizados:

- ./routes/api/products.`js`
- ./routes/products.`js`
- index.`js`

---

### 07RecappingTheProject

Recapitulando el proyecto, cambiamos la estructura del proyecto y añadimos comentarios.

#### Archivos actualizados:

- index.`js`
- ./routes/views/products.`js`
- ./routes/api/products.`js`

---

### 08MongoDBconnectionExpress

Cómo conectarse a una instancia de MongoDB usando `mLab`, es un servicio de base de datos que nos ofrece conexiones a MongoDB. Para ello, lo que tenemos que hacer es:

- Crear una Cuenta.
- Crear una Base de Datos.
- Crear un usuario.

Es importante que las credenciales de la cuenta de `mLab` las creemos usando aplicativos como LastPass o 1Password.

Es importante que nuestro archivo `.env` no exista en nuestro repositorio de `github`, porque ahí tendremos toda la información necesaria, para conectarnos a nuestra `BD`.

Actualmente `mlab` es parte de `MongoDB`, así que con nuestras credenciales ya creadas accedemos a `mongodb.com`, una vez dentro creamos un Cluster gratuito, cambiamos el nombre `Cluster0` por cualquiera, en mi caso será `ggary`.

#### Configurando nuestro Cluster

1. `Crear usuario`, en la parte del menú, accedemos a `Security->Database Access`, agregamos un nuevo usuario de la `BD`, en mi caso el usuario es `mgary`, estas credenciales lo usaremos en el archivo `.env`.

2. `IP Address`, en la parte del menú, accedemos a `Security->Network Access`, añadimos un `IP Address`, pulsamos `ADD CURRENT IP ADDRESS`, nos genera una IP `0.0.0.0/0`, por medio de esta lista de IP Addresses accedemos a nuestro Clúster.

3. `BD`, en la parte del menú, accedemos a `Atlas->Clusters`, nos aparecerá una lista de nuestros Clústers, en la que creamos presionamos `COLLECTIONS`, y creamos nuestra base de datos, para este proyecto será `octolion`, con la colección `products`.

#### Conectarse a nuestra `BD` del Cluster

- Conectarse por `mongo shell`, en mi caso la versión `4.2.5`.

![shell-1](/img/blogs/ecommerce/shell/shell-1.png)

![shell-2](/img/blogs/ecommerce/shell/shell-2.png)

![shell-3](/img/blogs/ecommerce/shell/shell-3.png)

Mi cadena de conexión: `mongo "mongodb+srv://ggary-dy8z2.mongodb.net/test"  --username mgary`.

![shell-4](/img/blogs/ecommerce/shell/shell-4.png)

Ingresamos la contraseña de nuestro usuario de la `BD`.

![shell-5](/img/blogs/ecommerce/shell/shell-5.png)

Mostramos las `BD`.

![shell-6](/img/blogs/ecommerce/shell/shell-6.png)

- Conectarse por Studio 3T:

![studio-0](/img/blogs/ecommerce/studio3T/studio-0.png)

![studio-1](/img/blogs/ecommerce/studio3T/studio-1.png)

![studio-2](/img/blogs/ecommerce/studio3T/studio-2.png)

Al copiar la cadena de conexión: `mongodb+srv://mgary:<password>@ggary-dy8z2.mongodb.net/test`.

Añadimos la contraseña del usuario `ggary` y pegamos en Studio 3T: `New Connection->From URI...`.

![studio-3](/img/blogs/ecommerce/studio3T/studio-3.png)

![studio-4](/img/blogs/ecommerce/studio3T/studio-4.png)

![studio-5](/img/blogs/ecommerce/studio3T/studio-5.png)

No olvidemos cambiar por la contraseña correcta.

![studio-6](/img/blogs/ecommerce/studio3T/studio-6.png)

![studio-7](/img/blogs/ecommerce/studio3T/studio-7.png)

Todos estos datos anteriores debería hallar por defecto. Una vez terminado, presionamos en `Test Connection` para asegurarnos que la conexión tiene éxito.

![studio-8](/img/blogs/ecommerce/studio3T/studio-8.png)

![studio-9](/img/blogs/ecommerce/studio3T/studio-9.png)

Como la conexión fue exitosa nos muestra las `BD` de nuestro Cloud.

![studio-10](/img/blogs/ecommerce/studio3T/studio-10.png)

- Conectarse por Robo 3T:

![robo-1](/img/blogs/ecommerce/robo3T/robo-1.png)

![robo-2](/img/blogs/ecommerce/robo3T/robo-2.png)

Editamos `Name`, en nuestro caso pondré `Octolion`.

![robo-3](/img/blogs/ecommerce/robo3T/robo-3.png)

![robo-4](/img/blogs/ecommerce/robo3T/robo-4.png)

![robo-5](/img/blogs/ecommerce/robo3T/robo-5.png)

- Conectarse por MongoDB Compass:

![compass-1](/img/blogs/ecommerce/compass/compass-1.png)

No olvidemos cambiar la contraseña.

![compass-2](/img/blogs/ecommerce/compass/compass-2.png)

---

### 09ServicesWithMongoDB

Creamos un archivo de configuración `.env.example` para que el desarrollador cree su propio archivo `.env` lo cual no debe ser añadido al repositorio, luego realizamos la conección a nuestro mongoDB de nuestro Cloud, por último comprobamos listando la colección de `products`.

#### Comandos:

```shell
npm i -S dotenv
npm i -S mongodb
```

#### Archivos añadidos:

- ./.`env.example`
- ./.`env`
- ./config/index.`js`
- ./lib/mongo.`js`

#### Archivos actualizados:

- ./avance.`md`
- ./.`gitignore`
- ./services/products.`js`

---

### 10ImplementingCRUD

Implementamos acciones CRUD de MongoDB y lo utilizamos en nuestro servicio, para realizar la prueba utilizamos `postman`.

![CRUD-MongoDB](/img/blogs/ecommerce/CRUD-MongoDB.png)

#### Archivos actualizados:

- ./avance.`md`
- ./lib/mongo.`js`
- ./services/products.`js`

---

### 11Middleware

Es nada más una función, que tiene tiene tres argumentos:

- El `request` object
- El `response` object
- Y un Callback llamado `next`, que cuando se invoca llama al siguiente middleware.

Piensen en un middleware como una serie de capas en un `request`.

#### ¿Para que sirve?

Para hacer modificaciones al `request` y al `response` object, podemos hacer cosas como validaciones, manejo de errores, etc...

Pero lo más importante del middleware es, siempre llamar a la función `next()`

![Middleware](/img/blogs/ecommerce/middleware.png)

#### Tipos de Middleware

![Middleware](/img/blogs/ecommerce/middleware-types.png)

> Ejemplos de cada uno, respectivamente.

- Body-parser: cuando lo agregamos a nuestra aplicación, lo que hace es: interceptar el `request` verificar que tenga un cuerpo (`Body`) y si necesita ser formateado a `json`, y aplicar lo necesario para que funcione.

- Router aplicadas a nuestras API o a nuestras Vistas "`routes/api`" "`routes/views`".

- Express-static, por que se usa con `app.use()`.

- Integrados con Express.

- Lo veremos en el siguiente apartado.

#### Archivos actualizados:

- ./avance.`md`

---

### 12ErrorsWithMiddlewares

Las mejores formas de manejar errores en express es usando un middleware.

![ErrorMiddleware](/img/blogs/ecommerce/error-middleware.png)

#### Archivos añadidos:

- ./utils/middlewares/errorsHandlers.`js`
- ./views/error.`pug`

#### Archivos actualizados:

- ./avance.`md`
- ./routes/api/products.`js`
- ./routes/views/products.`js`
- ./index.`js`

---

### 13ValidationWithMiddlewares

Evitamos que nos envíen a nuestros **EndPoints** datos que no corresponden al **esquema** que tenemos.

Implementaremos una función de tipo **Clusure**.

![FunctionClosure](/img/blogs/ecommerce/function-closure.png)

El `schema` es simplemente las reglas, de como deben ser nuestros datos, como el tipo de dato en un campo o si es requerido, o no, etc.

En `check` diremos que parte del `request` vamos a validar, por defecto es `body`.

Luego veremos como utilizar `joi` para nuestro middleware de validación, y como utilizar `boom` para nuestros middlewares de errores.

#### Archivos actualizados:

- ./avance.`md`

---

### 14JoiAndBoom

Son librerías que vienen del ecosistema de **HapiJS**.

Joi, es básicamente un validador de esquemas de objetos.

Boom, nos permite enviar errores de una manera más agradable.

Una vez implementado `joi` realizamos pruebas:

![Validation-POST-Postman](/img/blogs/ecommerce/validation/create-schema.png)

![Validation-PUT-ID-Postman](/img/blogs/ecommerce/validation/id-schema.png)

#### Comandos:

```shell
npm i -S joi
npm i -S boom
```

#### Archivos añadidos:

- `joi` ./utils/schemas/products.`js`
- `boom` ./utils/isRequestAjaxOrAPI.`js`
- `boom` ./views/404.pug

#### Archivos actualizados:

- ./avance.`md`
- `joi` ./utils/middlewares/validationHandler.`js`
- `joi` ./routes/api/products.`js`
- `boom` ./utils/middlewares/errorsHandlers.`js`
- `boom` ./utils/middlewares/validationHandler.`js`
- `boom` ./index.`js`
- `boom` ./views/error.`pug`

---

### 15Authentication

Implementamos nuestro `access_token`

Para ejecutarlo en Postman accedemos al apartado -> Auth -> TYPE "Basic Auth" -> username: admin -> Password: \*\*\*\*\*\*

![POST token](/img/blogs/ecommerce/passport/post-token.png)

Podemos comprobar nuestro `access_token` vamos a la página https://jwt.io/

![JWT.IO](/img/blogs/ecommerce/passport/jwt-io.png)

#### JSON Web Tokens

Es un estándar que nos permite representar **claims** (reclamaciones), que podría ser traducido como peticiones o permisos entre dos partes, un JSON Web token tiene las siguientes partes:

![JWT](/img/blogs/ecommerce/passport/jwt.png)

El **Header** lo que incluye, cuál fue el algoritmo con el que se firmó y si el tipo de token es JSON Web token.

El **Payload** normalmente tiene información que queremos compartir entre esas partes, éstos son los claims, **sub** generalmente hace parte a la identificación del usuario, debemos tener mucho cuidado de no incluir información sencible, porque esto puede ser facilmente decodificado, **iat** es cuándo se genero el token "el tiempo".

El **Signature** (firma), generalmente se hace codificando el Header concatenando con un punto, más el payload y firmándolo con nuestro string secreto.

Si por alguna razón cambian el **payload** o cambian el **header**, para simular un token con permisos extras, como la firma siempre estará contruida basada en el **header** y el **payload**, dará invalido.

#### Asegurando nuestra API con JWTs

Para esto debemos crear una nueva estrategia `utils->auth->strategies->jwt.js`, por medio de este archivo comprobaremos si el JWT está bien firmado, y obtendremos la información del usuario de él.

Luego nos toca incluir ésta estrategia en nuestro end-point, para así asegurar nuestras rutas de actualizar producto y eliminar.

![Unauthorized](/img/blogs/ecommerce/passport/unauthorized.png)

![Access Token](/img/blogs/ecommerce/passport/access_token.png)

![Authorizarion](/img/blogs/ecommerce/passport/authorizarion.png)

#### Comandos:

```shell
npm i -S passport passport-http passport-jwt jsonwebtoken bcrypt
npm i -D chalk
```

#### Archivos añadidos:

- ./scripts/mongo/seed-admin.`js`
- ./utils/auth/strategies/basic.`js`
- ./routes/api/auth.`js`

- ./utils/auth/strategies/jwt.`js`

#### Archivos actualizados:

- ./.`env.example`
- ./.`env`
- ./config/index.`js`
- ./index.`js`

- ./routes/api/products.`js`

---

### 16Test

Cuando hacemos el llamado de las rutas, y las agregamos a nuestra aplicación, estamos diciendo practicamente a nuestra aplicación que rutas usar, en la inversión de control que aplicaremos, consiste en que la ruta decide qué aplicación usar.

El siguiente paso es crear una utilidad para levantar un servidor de pruebas, donde implementamos la inversión de control.

Luego empezamos a crear nuestras sentencias de test, creamos una ruta que estará intervenida con `proxyquire`, para la ruta de servicio lo remplazamos por Mock, lo que queremos probar es que los controladores (reciben y envían datos) den correctamente.

El paso siguiente es probar los servicios, y de igual manera como hicimos para probar los end-points tuvimos que hacer Mock para nuestros servicios, los servicios que llaman a nuestras librerías, éstas tienen que ser Mockeadas.

Para hacer estos Mock y los llamados, usaremos la librería `sinon`, nos permite hacer Mocks, stub's y una serie de cosas que pueden encontrar en la página de `sinon`.

Con nuestro `getAllStub.withArgs()` cuando se le pase ciertos argumentos retorne ciertas cosas.

#### Comandos:

```shell
npm i -D supertest mocha sinon proxyquire
```

#### Archivos añadidos:

- ./test
- ./utils/testServer.`js`
- ./test/routes.api.products.`test.js`
- ./utils/mocks/mongoLib.`js`
- ./test/services.products.test.`js`
- ./test/utils.isRequestAjaxOrApi.test.js

#### Archivos actualizados:

- ./package.`json`
- ./routes/api/products.`js`
- ./index.`js`
- ./utils/mocks/products.`js`

---

### 17Debuggin-Inspect

**Debug** nos muestra en consola el mensaje de nuestro work space, con colores e incluso el tiempo que demora.

**Inspect** en nuestro navegador abrimos el google developer tools y nos aparece el ícono de node, precionamos, nos habre una nueva ventana, precionamos Sources y podemos crear puntos de interrupción y poder depurar nuestro código.

#### Comandos:

```shell
npm i -S debug
```

#### Archivos añadidos:

#### Archivos actualizados:

- ./package.`json`
- ./index.`js`
- ./lib/mongo.`js`
- ./utils/middlewares/errorsHandlers.`js`

---

### 18GoodPractices

#### Middlewares populares

- body-parser
- cors
- morgan
- helmet
- express-debug
- express-slash
- passport

##### body-parser:

No solo nos permite transformar `body` a tipo `json`, también recibe `raw`, puede ser un buffer, un binario, también recibe texto y url encode.

##### cors:

Nos sirve para verificar los `request`, que hace un cliente desde un navegador, sea del mismo dominio ó que permitamos a todos. Esto es por temas de seguridad, para evitar que nos hagan `request` desde clientes que no pertenecen al mismo dominio, es una muy buena practica activar el `cors` en el mismo dominio, ó dominios que sabemos que van a consumir nuestros `end-points` para producción.

##### morgan:

Es un loguer de `request`, si por ejemplo, queremos hacer un `console.log(req)` de nuestro objeto `request` para explorar que tiene, ya nó sería necesario hacerlo, instalando morgan podemos hacer esto automaticamente.

##### helmet:

---
