---
title: FullStack Titans
author: Ing. Gary Guzmán
img: fullstack/banner-curso.webp
description: Curso especializado en desarrollo web FullStack, con tecnologías modernas y prácticas recomendadas.
readtime: 720
---

#### ©️ Por: Ing. Gary Guzmán

###### [👨‍💻 Repositorio](https://github.com/garyDav/Blogs/blob/master/WindowsServer2012/teoria.md) mis resúmenes por [@garyDav](https://github.com/garyDav)

> 🗓️ Publicado, 12 de agosto del 2025

---

##### Requisito: Fundamentos de Programación en **C++**

- [Fundamentos de Programación](/blog/fundamentos)

#### Contenido de la materia

1. [**Fundamentos Web**](#fundamentos-web)

2. [**Fundamentos de JavaScript**](#fundamentos-de-javascript)

3. [**Call Stack**](#callstack-pila-de-ejecución)

4. [**Tipos de Datos**](#tipos-de-datos-primitivos)

5. [**Use Strict**](#use-strict)

6. [**Introducción a MongoDB**](#introducción-a-mongodb)

7. [**Workload**](#workload)

8. [**Relaciones**](#relaciones)

9. [**Computted Pattern**](#patron-computed-pattern-en-mongodb)

10. [**Documentación PNPM**](#comandos-pnpm)

11. [**Introducción NEXT.js**](#nextjs)

12. [**Resumen Typescript**](#resumen-typescript)

13. [**TailwindCSS V4**](#tailwindcss-v4)

#### Enlaces destacados

- [Cheat sheet HTML5](https://htmlcheatsheet.com)

- [Cheat sheet CSS3](https://htmlcheatsheet.com/css)

- [Aprende Flexbox Jugando](https://flexboxfroggy.com/#es)

- [Aprende CSS Grid Layout Jugando](https://cssgridgarden.com/#es)

- [Talk by Gary Bernhardt from CodeMash 2012](https://www.destroyallsoftware.com/talks/wat)

#### FrontEnd

- [Creative Tim](https://www.creative-tim.com/ 'creative-tim.com')

- [Next Image](https://nextjs.org/docs/app/api-reference/components/image 'Doc. Next Image')

- [React Icons](https://react-icons.github.io/react-icons/icons/io5/ 'react-icons.github.io')

- [Fetching Data](https://nextjs.org/docs/app/getting-started/fetching-data 'Doc. Next Feching Data')

- [Pokemon API](https://pokeapi.co/ 'API')

- [Quicktype](https://quicktype.io/ 'Convert JSON to typesafe')

- [Tailwind Card](https://www.creative-tim.com/twcomponents/component/user-card-7 'TW component Card')

---

## Fundamentos Web

[timeLine]: /img/blogs/fullstack/fundamentos-web/timeLine.png 'Linea de tiempo tecnologías'
[textos]: /img/blogs/fullstack/fundamentos-web/textos.png 'textos'
[sonidos]: /img/blogs/fullstack/fundamentos-web/sonidos.png 'sonidos'
[imagenes]: /img/blogs/fullstack/fundamentos-web/imagenes.png 'imagenes'
[timBernersLee]: /img/blogs/fullstack/fundamentos-web/timBernersLee.png 'timBernersLee'
[http]: /img/blogs/fullstack/fundamentos-web/http.png 'protocolo http'
[http-vista]: /img/blogs/fullstack/fundamentos-web/http-vista.png 'http en el navegador'
[url]: /img/blogs/fullstack/fundamentos-web/url.png 'url'
[url-vista]: /img/blogs/fullstack/fundamentos-web/url-vista.png 'url en el navegador'
[html]: /img/blogs/fullstack/fundamentos-web/html.png 'url en el navegador'
[html-vista]: /img/blogs/fullstack/fundamentos-web/html-vista.png 'url en el navegador'
[primeraPagina]: /img/blogs/fullstack/fundamentos-web/primeraPagina.png 'primera página'
[css-vista-1]: /img/blogs/fullstack/fundamentos-web/css-vista-1.png 'Vista CSS 1'
[css-vista-2]: /img/blogs/fullstack/fundamentos-web/css-vista-2.png 'Vista CSS 2'
[css_html]: /img/blogs/fullstack/fundamentos-web/css_html.png 'Vista CSS y HTML'
[DOM_CSSOM_RENDERTREE]: /img/blogs/fullstack/fundamentos-web/DOM_CSSOM_RENDERTREE.png 'DOM CSSOM RENDER TREE'
[css_tips]: /img/blogs/fullstack/fundamentos-web/css_tips.webp 'Tips CSS'

![Imagen][timeLine]

**Internet** nació en 1983, y es la combinación de dos palabras:

1. Interconnected
2. Network

Es una red inmensa de computadoras, conectadas entre sí, al rededor del mundo. Nos permite compartir información unos con otros:

<center>

![Imagen][textos] ![Imagen][sonidos] ![Imagen][imagenes]

![Imagen][timBernersLee]

</center>

Tim Berners-Lee, inventor de la World Wide Web, formó el consorcio W3C, para estandarizar y supervisar el desarrollo de las tecnologías en base a internet: **HTTP**, **URL**, **HTML**.

![Imagen][http] ![Imagen][http-vista]

![Imagen][url] ![Imagen][url-vista]

![Imagen][html] ![Imagen][html-vista]

Con estas Tres tecnologías, se creó la primera pagina Web: http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html

<center>

![Imagen][primeraPagina]

</center>

Por eso, surgió la necesidad la aparencia de los sitios Web, naciendo en 1994 el primer borrador del **CSS** (Cascade Style Sheets).

**CSS** son unas series de reglas que describen la aparencia de una página web, incluido los colores, la tipografía, el margen y el tamaño de los elementos, inclusive adaptanto la página web a pantallas grandes o pequeñas, esto es conocido como **Responsive Design**.

<center>

![Imagen][css-vista-1]

![Imagen][css-vista-2]

</center>

El navegador se encarga de tomar estos estilos y agregarlos a cada elemento que nosotros tengamos en nuestro HTML.

<center>

![Imagen][css_html]

</center>

### HTML

Es un lenguaje de marcado, usado para decirle a tu navegador cómo estructurar las páginas que visitas.

### CSS

Es un lenguaje que permite crear páginas web con un diseño agradable a los usuarios.

1. [HTML Reference](https://htmlreference.io/)
2. [CSS reference](https://cssreference.io/)

---

### DOM, CSSOM, Render Tree y proceso de renderizado de la web

<center>

![Imagen][DOM_CSSOM_RENDERTREE]

</center>

- **DOM:** Document Object Model. Es una transformación del código HTML escrito por nosotros a objetos entendibles para el navegador.

- **CSSOM:** así como el DOM para el HTML, EL CSSOM es una representación de objetos de nuestros estilos en CSS.

- **Render Tree:** es la unión entre el DOM y el CSSOM para renderizar todo el código de nuestra página web.

Pasos que sigue el navegador para construir las páginas web:

1. Procesa el HTML para construir el DOM.
2. Procesa el CSS para construir el CSSOM.
3. El DOM se une con el CSSOM para crear el Render Tree.
4. Se aplican los estilos CSS en el Render Tree.
5. Se **pintan** los nodos en la pantalla para que los usuarios vean el contenido de la página web.

<center>

![Imagen][css_tips]

</center>

### Anatomía de un Elemento HTML: Atributos, Anidamiento y Elementos vacíos

Nuestros elementos HTML se componen de:

- **Etiqueta de apertura:** el nombre de nuestra etiqueta encerrado entre símbolos de mayor o menor. Por ejemplo: `<h1>`.
- **Contenido:** dentro de nuestras etiquetas podemos añadir texto u otros elementos HTML, lo que conocemos como **anidamiento**.
- **Etiqueta de cierre:** son casi iguales que las etiquetas de apertura, pero también necesitan un slash (/) antes del nombre de la etiqueta. Por ejemplo: `</h1>`.

Las etiquetas de apertura también pueden tener atributos. Los atributos nos permiten definir características especiales para nuestros elementos: **\<etiqueta atributo="valor del atributo">**. Por ejemplo: `<h1 class="saludo">`.

También existen elementos vacíos. Estos elementos no tienen contenido ni etiqueta de cierre, solo etiqueta de apertura y atributos. Por ejemplo: `<img src="puppy.png" alt="mi mascota">`.

---

## Fundamentos de JavaScript

### Variables

En JavaScript, las variables pueden guardar cualquier tipo de dato. El tipo se asigna automáticamente según el valor que le pongas.

- Los nombres pueden tener letras, números, `$` y `_`, pero **no pueden empezar con números**.
- Se **declaran** con `var`, `let` o `const`, por ejemplo:

```js
var a
var b, c, d

let name, lastName

const FECHA_CINE = '20-08-2025'
```

- Luego puedes **asignarles** valores:

```js
a = 4.23 // número decimal
b = 'Javascript' // texto
c = 125 // número entero
d = [1, 2, 3, 4] // arreglo
```

- También puedes **declarar** y **asignar** en una sola línea:

```js
var a = 4.23,
  b = 'Javascript',
  c = 125,
  d = [1, 2, 3, 4]
```

> ⚠️ Si no usas `var`, la variable se vuelve global, lo que puede causar errores difíciles de detectar. ¡Siempre usa `var`!

### 2. Operadores aritméticos

| Operador | Significado      |
| -------- | ---------------- |
| `+`      | Suma             |
| `-`      | Resta            |
| `*`      | Multiplicación   |
| `/`      | División         |
| `%`      | Residuo (módulo) |
| `++`     | Incrementa en 1  |
| `--`     | Decrementa en 1  |

#### Prefijo vs Sufijo

```js
++x // primero incrementa, luego usa el valor
x++ // primero usa el valor, luego incrementa
```

### 3. Operadores de asignación compuesta

| Operador | Equivalente     |
| -------- | --------------- |
| `+=`     | `x = x + valor` |
| `-=`     | `x = x - valor` |
| `*=`     | `x = x * valor` |
| `/=`     | `x = x / valor` |
| `%=`     | `x = x % valor` |

### 4. Condicional `if-else`

```js
if (condición) {
  // instrucciones si es verdadero
} else {
  // instrucciones si es falso
}
```

> Si solo hay una instrucción, puedes omitir las llaves `{}`.

### 5. Operadores relacionales y lógicos

#### Relacionales

| Operador | Significado                  |
| -------- | ---------------------------- |
| `>`      | Mayor que                    |
| `<`      | Menor que                    |
| `==`     | Igual (sin importar el tipo) |
| `===`    | Igual y del mismo tipo       |
| `!=`     | Diferente                    |
| `!==`    | Diferente o distinto tipo    |
| `<=`     | Menor o igual                |
| `>=`     | Mayor o igual                |

#### Lógicos

| Operador | Significado                 |
| -------- | --------------------------- | --- | --------------------------------- |
| `!`      | Negación                    |
| `&&`     | Y lógico (ambos verdaderos) |
| `        |                             | `   | O lógico (al menos uno verdadero) |

> En JS, `0` y `""` (texto vacío) se consideran falsos. Todo lo demás es verdadero.

### 6. Condicional con operador ternario `?`

```js
r = condición ? valor_si_verdadero : valor_si_falso
```

Ejemplo:

```js
let mensaje = edad >= 18 ? 'Mayor de edad' : 'Menor de edad'
```

> Si tienes varias instrucciones, mejor usa `if-else`.

### 7. Ciclo `while`

```js
while (condición) {
  // instrucciones mientras la condición sea verdadera
}
```

### 8. Ciclo `do-while`

```js
do {
  // instrucciones
} while (condición)
```

> Este ciclo **siempre se ejecuta al menos una vez**, porque la condición se evalúa al final.

### 9. Ciclo `for`

```js
for (inicialización; condición; incremento) {
  // instrucciones
}
```

Ejemplo:

```js
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```

### 10. Ciclo `for-in`

```js
for (let propiedad in objeto) {
  // instrucciones
}
```

> Si el objeto es un arreglo o texto, `propiedad` serán los índices (0, 1, 2...).

### 11. Comandos `break` y `continue`

- `break`: sale del ciclo inmediatamente.
- `continue`: salta al siguiente ciclo, ignorando el resto de instrucciones.

Ejemplo:

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) break
  console.log(i) // imprime 0, 1, 2
}
```

### 🔁 1.6.12. Ciclos infinitos

Un ciclo infinito suele indicar que algo salió mal: una condición que nunca se vuelve falsa. Pero a veces, por lógica del problema, **necesitamos salir del ciclo desde algún punto intermedio**, no al inicio ni al final. En esos casos, se puede crear un ciclo infinito a propósito usando `true` como condición, y luego salir con `break`.

#### Ejemplo con `while`:

```js
while (true) {
  // instrucciones antes de evaluar
  if (condición) break
  // instrucciones después
}
```

#### También se puede hacer con `do-while`:

```js
do {
  // instrucciones antes
  if (condición) break
  // instrucciones después
} while (true)
```

#### O con `for` sin parámetros:

```js
for (;;) {
  // instrucciones
  if (condición) break
  // más instrucciones
}
```

> En el `for`, dejar vacíos los campos de inicialización, condición e incremento crea un ciclo infinito.

### 🧩 Funciones en JavaScript

En JavaScript, hay **tres formas principales** de crear funciones. Vamos con la más común:

#### ✅ Forma estándar

```js
function nombreFuncion(parámetros) {
  // instrucciones
  return resultado
}
```

- `nombreFuncion`: sigue las mismas reglas que los nombres de variables.
- `parámetros`: separados por comas.
- `return`: devuelve un valor, que puede ser un número, texto, variable o expresión.

> Si no se usa `return`, la función simplemente termina sin devolver nada.

#### 🧪 Forma literal (función anónima o asignada)

Esta forma se usa cuando queremos guardar la función en una variable:

```js
var alias = function nombreOpcional(parámetros) {
  // instrucciones
}
```

O más comúnmente, como función anónima:

```js
var alias = function (parámetros) {
  // instrucciones
}
```

> Puedes llamar a la función usando el nombre de la variable (`alias`). El nombre interno (`nombreOpcional`) suele omitirse.

#### 🧠 Forma dinámica (constructor `Function`)

Esta forma permite crear funciones en tiempo de ejecución:

```js
var f = new Function("par1", "par2", ..., "código JS");
```

Ejemplo:

```js
var suma = new Function('a', 'b', 'return a + b;')
```

> Estas funciones **siempre son globales** y no se usan muy seguido. Son útiles en casos muy específicos donde el código se genera dinámicamente.

#### 🔄 Funciones anidadas

En JavaScript (a diferencia de C), **sí puedes crear funciones dentro de otras funciones**:

```js
function externa() {
  function interna() {
    // lógica interna
  }
  interna()
}
```

> Excepto en el caso del constructor `Function`, que siempre crea funciones globales.

---

## CallStack (Pila de ejecución)

La **CallStack** está intamamente relacionado con conceptos más avanzados como el **Event Loop**, **Closures**, y los distintos **Scopes** que existen en las funciones. Estos conceptos son fundamentales para entender cómo JavaScript maneja la ejecución de código, especialmente en un entorno asíncrono.

Cuando se llama a una función, se agrega un nuevo marco (frame) a la pila. Cuando la función termina, su marco se elimina de la pila. Si una función llama a otra función, el marco de la función llamada se agrega encima del marco de la función que la llamó.

#### ¿Qué es el Call Stack?

La **CallStack** es una estructura de datos que sigue el principio LIFO (Last In, First Out), lo que significa que el último elemento agregado es el primero en ser eliminado. En JavaScript, la CallStack se utiliza para gestionar las funciones que se están ejecutando en un momento dado.

El motor de JavaScript utiliza una **pila** para representar el CallStack, podemos pensar en una pila de platos donde el último plato en aplilar o colocar es el primero en ser retirado, no podemos poner un plato por el medio o debajo. De la misma manera si queremos sacar un elemento de la pila, debemos sacar el elemento que está arriba del todo, a las pilas también se lo conoce como **LIFO** (Last In First Out), el último en entrar, es el primero en salir. Lo que significa que cuando queremos sacar un elemento de la pila, tenemos que sacar el que está encima de todo, que fue el último que pusimos.

La pila de ejecución que tiene los motores de JavaScript, es como la pila de platos, pero en vez de platos, vamos a tener otra cosa, ¿Qué es lo que se vá apilar? y ¿Cómo funciona?.

![Script JavaScript CallStack](/img/blogs/fullstack/01-script-callstack.png)

```js
// ↳ Juego de escondidas
const ocultarJugador = nombre => {
  // [1] if (nombre === 'Pepito') throw new Error('Pepito no puede jugar hoy 🤕');

  console.log(`🧍‍♂️ El jugador ${nombre} se está escondiendo...`)
}

function conteoRegresivo(num) {
  if (num <= 0) {
    console.log('🕵️‍♂️ ¡Listos o no, allá voy!')
    return
  }

  console.log(`⏳ ${num}`)
  conteoRegresivo(num - 1)
}

function buscando() {
  console.log('👀 Buscando a los jugadores escondidos...')
  console.log('🚶‍♂️ Caminando por el parque...')
  console.log('😮 ¡Encontrado detrás del árbol! 🌳')
  console.log('🏁 Fin del juego.')
}

function jugarEscondidas() {
  ocultarJugador('Juan')
  ocultarJugador('Pepito')
  ocultarJugador('María') // [2]

  conteoRegresivo(10) // [3]
  buscando() // [4]
}

console.log('🎮 ¡Vamos a jugar a las escondidas!')
jugarEscondidas() // breakpoint
```

Con el breakpoint puesto ejecutamos nuestro script, como podemos observar la ejecución está detenida en `jugarEscondidas()`, damos un paso mas en nuestro programa se pocisiona en `ocultarJugador("Juan")`.

> ⚠️ **Importante:** Si en este punto miramos la CallStack, veremos parte de la pila de ejecución (CallStack) en ese preciso momento acá podemos ver en que orden se fue llamando nuestro programa, la función que está arriba del todo es la que se está ejecutando en ese preciso momento `jugarEscondidas`, podemos ver su nombre, el nombre del archivo al que pertenece y el número de la próxima línea de código a ejecutar, en este caso `ocultarJugador('Juan')` **_que todavía no se ejecutó_**.

Y ¿Qué es eso que dice `(anonymous)` entre paréntesis?. Cuando ejecutamos un programa en JavaScript la primer función que se agrega a la pila, es un función anónima que engloba a todo el programa, es como si fuese el **hilo principal** del programa, y cuando ésta función salga de la pila, significa que se terminó la ejecución del **programa principal**.

> 👀 Prestar atención (CallStack) cada vez que avancemos en el programa, presionar `Esc` para abrir la **consola**.

[1] Si ejecutamos el siguiente paso, veremos que el error aparece en la consola, nos muestra la misma información que está en el CallStack, de esta manera podemos saber cómo se fueron llamando las funciones hasta que sucedió el error que no esperábamos.

1. La función global (anónima) que engloba todo el programa, en la línea ## llamó a la función `jugarEscondidas`.

2. La cual en la línea ## llamó a la función `ocultarJugador`.

3. Y ésta última en la línea ## 🐞**Disparó un error**.

4. A ésta información también se la conoce como **traza de pila** (stack trace), la secuencia de llamadas que se fueron dando durante la ejecución de un programa hasta que sucedió una excepción o un error inesperado, y es muy útil para depurar errores en el código o buscar bugs.

[2] Estando ya en este punto `ocultarJugador('María')`, si miramos la CallStack es similar a la primera llamada, pero algo cambió, pero esa información no la podemos ver en la CallStack, tenemos que acceder desde otro lugar, desglozamos el apartado `Scope` tenemos acceso a las variables locales y globales.

Y ¿Qué es el Scope? el **Scope** es el **contexto actual de ejecución** en el que se definen las variables y funciones, y determina su visibilidad y accesibilidad, cuando se están ejecutando. En JavaScript, existen diferentes tipos de Scope: global, local (dentro de una función), y bloque (dentro de un bloque de código como un `if` o un `for`).

El Scope Local de la variable `nombre` con el valor `María` y tabmién hay otra variable con el valor `this`, esta variable es muy especial que tiene JavaScript hace referencia al **_Objeto que sería como el "dueño" de la función_** y el valor que tiene `this` determina lo que se llama el **_"contexto" de la función_**, si aveces es confuso, el nombre es similar al **contexto de ejecución** pero tenemos que saber que son cosas distintas, y hay que aprender a vivir con ello.

Existe una variable extra en el contexto local, que se ve en Mozilla es `arguments`, hay que saber que `arguments` no es un array, pero es un **objeto** muy similar al array, que tienen todas la funciones en su scope local, menos en las `arrow functions`, Éste **objeto** contiene todos los parámetros que recibe la función cuando fue invocada. En la función `anónima` que engloba todo nuestro programa **no tenemos arguments**, por que todavía no se llamó a ninguna **función**.

Pero en `anonymous` si tenemos otra cosa, una referencia al objeto global, que en el caso del navegador éste objeto es llamado `window`, en el caso de **NodeJS** éste objeto se llama `global`. Éste objeto tiene un montón de **propiedades** y **métodos** y otros **objetos** que son muy útiles y que podemos acceder desde cualquier función de nuestro programa. Por ejemplo `console.log` hacemos referencia al objeto global `window` que está **implícito** no hace falta que escribamos `window.console.log` o `global.console.log` en **NodeJS**. Tódo esto está en el Scope o contexto de ejecución.

**Contexto de ejecución [Scope]**, El conjunto de variables que tiene acceso la función, el contexto (this), arguments u objeto global (window o global).

Por eso al seleccionar una función del CallStack, podemos ver su contexto de ejecución, eso es por que cada vez que se llama a una función se crea un **nuevo scope** (contexto de ejecución) para esa función y también se lo guarda en el registro asociado al llamado a esa función en la _pila de ejecución_. Entonces en esta pila se guarda el: **Nombre de la función**, **El archivo al que pertenece**, **El número de la próxima línea a ejecutar**, y el **contexto de ejecución (scope)**.

[3] Cada vez que ejecutemos la función `conteoRegresivo`, se van apilando cada una con su contexto de ejecución local propia como: `(10), (9), ..., (1), (0)`, hasta que el proceso **recursivo** no termine, estas funciones no se van a salir de la pila hasta que `num=0`, y una vez finalidado cada función, se empiezan a quitar de la pila de ejecución.

> ⚠️ Importante, alguna vez escuchaste la frace "volar la pila de ejecución", si nos olvidamos de añadir la semilla a nuestra función recursiva `num <= 0`, esta función siempre resivirá el mismo número `num=10` y nunca podrá terminar de terminar esta función recursiva, por mas que sea la misma función, con la misma variable y en el mismo archivo, de igual manera se creará por cada uno, un registro en la pila de ejecución, como si apilaramos platos hasta que llega al techo.

Cada motor define un límite para la cantidad de entradas que puede almacenar la pila de ejecución, y por suerte los motores de JavaScript tienen éste límite, porque si no nuestro programa se ejecutaría infinitamente, podríamos ver el error `Maximum call stack size exceeded`, esto es algo que tenemos que tener presente al momento de escribir nuestros programas.

[4] ¿Qué crees que pasará ahora? si colocamos un `breakpoint` en la función `buscando()` y volvemos a ejecutar nuestro programa, cuando demos un paso y ejecutamos la función `buscando()` se agrega un nuevo **frame** o **registro** en la pila `buscando` al dar el siguiente paso ➡️ tal como indica el `callstack` se ejecuta la línea ## imprimiento los siguientes mensajes en consola (👀, 🚶‍♂️, 😮, 🌳, 🏁), una vez ubicados en la última línea de la función, en el siguiente paso ➡️ se retira `buscando` de la pila, y lo mismo sucederá con la referencia `jugarEscondidas`, una vez parados en la ultima lína de nuestro programa, ya no quedan instrucciones de funciones para ejecutar, cuando realizemos el proximo y último paso ➡️ se va a sacar a la función **global anónima** de la pila, dejándola vacía y marcando el final de ejecución de nuestro programa.

---

## Tipos de Datos Primitivos

#### ¿Qué es un tipo de dato primitivo?

Es un tipo de dato básico como números, cadenas de texto, booleanos, `null`, `undefined`, y símbolos. Los tipos de datos **Primitivos** no son **objetos** y no tienen **propiedades ni métodos**.

Otra característica que tienen los datos primitivos es que son **inmutables**, lo que significa que no pueden ser cambiados. Si intentas modificar un dato primitivo, en realidad estás creando uno nuevo.

```js
var texto = 'Cocina'
texto[0] = 'B'

console.log(texto) // 'Cocina'

// La única manera de modificar una variable es asignándole un nuevo valor
texto = 'Bocina'
console.log(texto) // 'Bocina'
```

### Tipos de datos primitivos

- `string`: Cadenas de texto, como `"Hola"`, `'Mundo'`.

- `number`: Números, como `42`, `3.14`, `-1`.

- `boolean`: Valores lógicos, `true` o `false`.

- `null`: Representa la ausencia intencional de valor.

- `undefined`: Indica que una variable no ha sido asignada.

- `symbol`: Un identificador único y inmutable, útil para propiedades de objetos.

- `bigint`: Números enteros grandes, como `1234567890123456789012345678901234567890n`, se incorpora desde la versión "ECMAScript 2020".

En JavaScript **todo valor que no sea de alguno de estos tipos es un objeto**, exacto los array son objetos, las funciones son objetos, las funciones tipo fecha también son objetos, las expresiones regulares y cualquier objeto literal también lo es.

#### 🔗 Cadenas

Para las cadenas de texto, JavaScript utiliza una codificación llamada **UTF-16**, que permite representar caracteres de muchos idiomas y símbolos incluso emojis.

> 👀 **Nota**: en `"Gary".length`, podemos saber cuantos caracteres tiene la cadena, en este caso `4`.
> ¿Notas algo raro?, exacto antes dijimos que el típo primitivo no posee propiedades ni métodos, explicaremos eso más adelante.

Para obtener un string a partir de una variable podemos:

```js
var edad = 30
edad.toString() // "30"

// ó

edad + '' // "30"
```

Pero cuidado si utilizamos el método `toString()`, debemos asegurarnos que la variable no sea `null` o `undefined`, ya que esto generará un error.

#### 🔢 Números

Los números en JavaScript son de tipo `number`, y pueden ser enteros positivos o negativos y también decimales. JavaScript utiliza el estándar IEEE 754 para representar números de punto flotante.

```js
var entero = 42
var negativo = -7
var decimal = 3.14

0 === -0 // true, ambos son considerados iguales
```

> 👀 **Nota**: En JavaScript, al momento de representar números decimales no es muy preciso.

```js
0.1 +
  0.2(
    // 0.30000000000000004
    0.1 + 0.2,
  ).toFixed(100) // 😩
```

En `Rubi`, `Python`, y en `Java` pasa lo mismo, esto tiene que ver como están diseñado los números dentro del lenguaje, en estos lenguajes se utiliza un formato llamdo **IEEE 754**, en este formato cáda número ocupa 64 bits en la memoria (8 Bytes).

```js
var numero = +(0.1 + 0.2).toFixed(2) // 😄
var numeroMinimo = -(2 ** 53) + 1
var numeroMaximo = 2 ** 53 - 1
```

#### 🧠 ¿Qué significa “operador unario”?

Un operador unario actúa sobre **un solo operando**. En este caso:

```js
typeof 'Hola' // "string"
```

Aquí, `typeof` opera sobre `"Hola"` y devuelve `"string"`.

#### 🔍 ¿Qué devuelve `typeof`?

| Valor            | Resultado de `typeof`         |
| ---------------- | ----------------------------- |
| `"texto"`        | `"string"`                    |
| `42`             | `"number"`                    |
| `true` / `false` | `"boolean"`                   |
| `undefined`      | `"undefined"`                 |
| `null`           | `"object"` ⚠️ (histórico bug) |
| `{}`             | `"object"`                    |
| `[]`             | `"object"`                    |
| `function() {}`  | `"function"`                  |

#### ⚠️ Curiosidades y trampas

- `typeof null` → `"object"`  
  Esto es un bug heredado de las primeras versiones de JS.

- `typeof NaN` → `"number"`  
  Aunque es “Not a Number”, su tipo es `number`.

- `typeof typeof 1` → `"string"`  
  Porque `typeof 1` devuelve `"number"`, y `typeof "number"` es `"string"`.

### ✅ ¿Cómo usarlo?

```js
let x = 10
console.log(typeof x) // "number"

if (typeof x === 'string') {
  console.log('Es una cadena')
}
```

### 🧠 ¿Qué es la coerción de tipos?

La **coerción** es el proceso mediante el cual un lenguaje de programación **convierte automáticamente (o explícitamente) un valor de un tipo a otro**. Por ejemplo, convertir un número a una cadena, o un booleano a un número.

#### 🔍 Tipos de coerción

| Tipo          | Descripción                                                               |
| ------------- | ------------------------------------------------------------------------- |
| **Implícita** | El lenguaje lo hace automáticamente sin que tú lo indiques.               |
| **Explícita** | Tú le dices al lenguaje que convierta el tipo usando funciones o métodos. |

### 🧪 Ejemplos en JavaScript

#### 🔸 Coerción implícita

```js
let resultado = '5' + 5 // "55"
```

JavaScript convierte el número `5` en cadena `"5"` y concatena.

```js
let resultado = '5' - 1 // 4
```

Aquí convierte `"5"` en número y realiza la resta.

#### 🔸 Coerción explícita

```js
let numero = Number('42') // 42
let texto = String(100) // "100"
let booleano = Boolean(0) // false
```

Tú decides qué tipo quieres obtener.

#### ⚠️ ¿Por qué es importante entenderla?

- Evita errores inesperados como `NaN`, `undefined`, o resultados lógicos incorrectos.
- Te ayuda a escribir código más predecible y seguro.
- Es clave para entender cómo funciona el **call stack**, el **scope**, y las **comparaciones**.

### 🧩 Coerción Implícita en JavaScript

La coerción implícita ocurre cuando JavaScript **convierte automáticamente** un tipo de dato en otro durante operaciones como comparaciones, concatenaciones o cálculos.

### 🔢 Número (`Number`)

#### 🔁 Convertido a:

| Tipo destino | Ejemplo              | Resultado | Explicación                                           |
| ------------ | -------------------- | --------- | ----------------------------------------------------- |
| **String**   | `5 + "5"`            | `"55"`    | El número se convierte en cadena para concatenar.     |
| **Boolean**  | `Boolean(0)`         | `false`   | `0`, `NaN` → `false`; cualquier otro número → `true`. |
| **Object**   | `5 == new Number(5)` | `true`    | El objeto se convierte a primitivo para comparar.     |

### 🧵 Cadena (`String`)

#### 🔁 Convertida a:

| Tipo destino | Ejemplo                          | Resultado | Explicación                                      |
| ------------ | -------------------------------- | --------- | ------------------------------------------------ |
| **Number**   | `"42" - 2`                       | `40`      | `"42"` se convierte a número para operar.        |
| **Boolean**  | `Boolean("")`                    | `false`   | Cadena vacía → `false`; cualquier otra → `true`. |
| **Object**   | `"hello" == new String("hello")` | `true`    | El objeto se convierte a primitivo.              |

### 🎭 Boolean (`true` / `false`)

#### 🔁 Convertido a:

| Tipo destino | Ejemplo                     | Resultado | Explicación                            |
| ------------ | --------------------------- | --------- | -------------------------------------- |
| **Number**   | `true + 1`                  | `2`       | `true` → `1`, `false` → `0`.           |
| **String**   | `true + "!"`                | `"true!"` | Se convierte a cadena para concatenar. |
| **Object**   | `true == new Boolean(true)` | `true`    | El objeto se convierte a primitivo.    |

### 🧼 `null` y `undefined`

#### 🔁 Convertidos a:

| Tipo destino | Ejemplo                                                        | Resultado | Explicación                        |
| ------------ | -------------------------------------------------------------- | --------- | ---------------------------------- |
| **Boolean**  | `Boolean(null)` / `Boolean(undefined)`                         | `false`   | Ambos son falsy.                   |
| **Number**   | `null + 1` → `1`<br>`undefined + 1` → `NaN`                    | —         | `null` → `0`, `undefined` → `NaN`. |
| **String**   | `null + "!"` → `"null!"`<br>`undefined + "!"` → `"undefined!"` | —         | Se convierten a cadena.            |

### 🧱 Object (`{}`, `[]`, `new Date()`, etc.)

#### 🔁 Convertido a:

| Tipo destino | Ejemplo                       | Resultado               | Explicación                          |
| ------------ | ----------------------------- | ----------------------- | ------------------------------------ |
| **String**   | `{} + "test"`                 | `"[object Object]test"` | El objeto se convierte a cadena.     |
| **Number**   | `[] - 1`                      | `-1`                    | `[]` → `""` → `0`; `{} - 1` → `NaN`. |
| **Boolean**  | `Boolean({})` / `Boolean([])` | `true`                  | Todos los objetos son truthy.        |

### 🧪 Comparaciones con coerción

```js
0 == false        // true
"" == 0           // true
null == undefined // true
[] == false       // true
[] == ![]         // true
{} == {}          // false (referencias distintas)
```

#### 📌 Reglas clave

- **Operadores como `+`, `-`, `==` pueden disparar coerción.**
- **`==` compara con coerción; `===` compara sin coerción.**
- **Objetos se convierten a primitivos usando `valueOf()` o `toString()`.**

#### 🧠 Visual: Truthy vs Falsy

```js
// Valores falsy
;(false, 0, '', null, undefined, NaN)

// Todo lo demás es truthy
;(true, '0', [], {}, function () {}, Infinity)
```

---

## Use Strict

#### ¿Que es Use Strict?

Es una instrucción dirigida al **intérprete** de JavaScript. Le indica que el código que sigue a continuación está en "**Modo estricto**", cambiando la manera en que se ejecutan algunas instrucciones.

En éste modo estámos más restringidos, no podemos realizar ciertas acciones que en el modo normal sí se permiten. El objetivo de éste modo es **hacer el código más seguro y evitar errores comunes**.

Si intentamos realizar lo siguiente:

```js
'use strict'

nombre = 'Juan' // Error: nombre no está definido
```

Esto es algo bueno, JavaScript convertirá nuestras equivocaciones como desarrolladores como errores, así podremos detectarlos antes de que lleguen a producción.

Modo estricto (strict mode) y modo descuidado (sloppy mode). Veremos las 10 caractrerísticas que tiene el modo estricto de JavaScript:

**ECMASCRIPT**
Es una especificación, un estándar para crear lenguajes de programación. JavaScript es una implementación de esa especificación.

![ECMAScript](/img/blogs/fullstack/02-ecmascript.png)

<p align="center">
  <img src="/img/blogs/fullstack/03-use-strict.png" alt="Script JavaScript CallStack" width="300" />
</p>
<p align="center"><em>Solo aplicará el modo estricto dentro de la función.</em></p>

1. Arregla la creación accidental de variables globales.

```js
let nombre = 'Gary'
let edad = 30

if (edad > 20) {
  nmbre = 'Pepito'
}

// Se agragará una variable global llamada nmbre
// Y como propiedad del objeto global
// window.nmbre = 'Pepito'
```

En modo estricto veremos un error de referencia por consola.

```js
'use strict'
let nombre = 'Gary'
let edad = 30

if (edad > 20) {
  nmbre = 'Pepito' // Error: nmbre is not defined
}
```

2. Los atributos de sólo lectura.

```js
const estudiante = {}

Object.defineProperty(estudiante, 'nombre', {
  value: 'Pepito',
  writable: false, // No se puede modificar
})

estudiante.nombre = 'Juan'
console.log(estudiante.nombre) // Pepito
```

Seguimos teniendo el mismo valor pero 👁️ en modo estricto veremos un error de tipo por consola.

```js
'use strict'
const estudiante = {}
Object.defineProperty(estudiante, 'nombre', {
  value: 'Pepito',
  writable: false, // No se puede modificar
})
estudiante.nombre = 'Juan' // ❌ Error: Cannot assign to read only property 'nombre' of object '#<Object>'
console.log(estudiante.nombre) // Pepito
```

3. Objetos no extendibles.

Algo similar sucede con los objetos no extendibles.

```js
const estudiante = {}
Object.preventExtensions(estudiante) // No se pueden agregar nuevas propiedades
estudiante.nombre = 'Pepito' // No se puede agregar
console.log(estudiante.nombre) // undefined
```

En modo estricto veremos un error de tipo por consola.

```js
'use strict'
const estudiante = {}
Object.preventExtensions(estudiante) // No se pueden agregar nuevas propiedades
estudiante.nombre = 'Pepito' // ❌ Error: Cannot add property nombre, object is not extensible
console.log(estudiante.nombre) // undefined
```

4. Variables primitivas.

```js
let nombre = 'Pepito'
nombre.edad = 30 // No se puede agregar propiedades a una cadena de texto
console.log(nombre.edad) // undefined
```

En modo estricto veremos un error de tipo por consola.

```js
'use strict'
let nombre = 'Pepito'
nombre.edad = 30 // ❌ Error: Cannot create property 'edad' on string 'Pepito'
console.log(nombre.edad) // undefined
```

5. No podemos tener **Parámetros duplicados en una función**

```js
function saludar(nombre, apellido, nombre) {
  console.log(`Hola ${nombre} ${apellido}`)
}
saludar('Juan', 'Pérez') // Hola undefined Pérez
```

En modo estricto veremos un error de sintaxis por consola.

```js
'use strict'
function saludar(nombre, apellido, nombre) {
  // ❌ SyntaxError: Duplicate parameter names not allowed in this context
  console.log(`Hola ${nombre} ${apellido}`)
}

// Veremos incluso el error antes de invocar a la función
```

6. Sistema octal

El sistema octal es el sistema de números con base 8. En él podemos representar cualquier número con **dígitos del 0 al 7**.

```js
console.log(011) // 1 + 1 * 8 = 9
console.log(023) // 3 + 2 * 8 = 19
```

En modo estricto veremos un error de sintaxis por consola.

```js
'use strict'
console.log(011) // ❌ SyntaxError: Octal literals are not allowed in strict mode.
...
```

Desde ES6 podemos usar el prefijo `0o` para representar números en base octal.

```js
console.log(0o11) // 1 + 1 * 8 = 9
console.log(0o23) // 3 + 2 * 8 = 19
```

7. Arreglamos errores silenciosos con el operador `delete`

El operador `delete` se utiliza para eliminar **propiedades de un objeto** o **elementos de un array** devolviéndonos `true` o `false` si se eliminó o no.

```js
function saludar() {
  console.log('Hola')
}

const nombre = 'Pepito'

delete nombre // No se puede eliminar una variable
delete saludar // No se puede eliminar una función
delete window // No se puede eliminar el objeto global
```

En modo estricto cualquiera de las instrucciones anteriores nos daría error si intentamos ejecutarlas.

```js
'use strict'
function saludar() {
  console.log('Hola')
}
const nombre = 'Pepito'

delete nombre // ❌ Error: Delete of an unqualified identifier in strict mode.
delete saludar // ❌ Error: Delete of an unqualified identifier in strict mode.
delete window // ❌ Error: Delete of an unqualified identifier in strict mode.
```

8. `arguments` y `eval` son keywords reservados (palabras reservadas)

```js
'use strict'
let arguments = 'Hola' // ❌ Error: Unexpected eval or arguments in strict mode
let eval = 123 // ❌ Error: Unexpected eval or arguments in strict mode
```

9. `with` no está permitido

El bloque `with` sirve para **extender la cadena de scopes** en JavaScript temporalmente.

Se usaba cuando teníamos que poner varias variables a un objeto que estaba muy anidado dentro de otro.

```js
with (document.forms[0]) {
  email.value = ''
  password.value = ''
}
```

Para no tener que repetir tanto código.

```js
// with (document.forms[0]) {
document.forms[0].email.value = ''
document.forms[0].password.value = ''
// }
```

Antes de ejecutar nuestro programa el **intérprete de JavaScript** lo analiza y arma **_la cadena de scopes_** sabiendo exáctamente a que lugar del código tiene que ir a buscar cada variable cuando la queremos usar.

De esta manera el motor de JavaScript puede ejecutarlo mucho mas rápido, pero como ésto depende de un objeto `document.forms[0]` que puede cambiar, el intérprete de JavaScript no puede saber a que lugar va a tener que buscar cada variable, antes de ejecutar el programa. La búsqueda la tendrá que hacer cuando se esté **ejecutando el programa**, no lo va a poder optimizar de antemano.

Por eso no está permitido utilizar `with` en modo estricto, para no perder ésa optimización.

De todas maneras esto lo podemos realizar guardando una referencia al objeto antes.

```js
const form = document.forms[0]
form.email.value = ''
form.password.value = ''
```

10. Nuevas **Palabras Reservadas**

En **ECMAScript5** se introdujeron nuevas palabras reservadas al lenguaje, es decir **_(No se pueden utilizar para nombrar `variables` ni `métodos`)_**. Y en modo estricto se incorporan otras más.

**ECMAScript5 - Palabras Reservadas**

| class     | enum       | extends    | super |
| --------- | ---------- | ---------- | ----- |
| **const** | **export** | **import** |       |

**`use strict`**

| implements    | package    | interface   |
| ------------- | ---------- | ----------- |
| **public**    | **static** | **private** |
| **protected** | **yield**  | **let**     |

Si intentamos nombrar una variable con éstas palabras reservadas como:

```js
'use strict'
let package = 'paquete 1' // ❌ Error: SyntaxError: Unexpected strict mode reserved word
// Incluso en la actualidad aunque package no se utiliza para nada en el lenguaje
```

> 👀 Funciones libres (sin dueños)

```js
const estudiante = {
  nombre: 'Pepito',
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}`)
  },
}

estudiante.saludar() // `estudiante` es -> `this`

// Si copiamos una referencia de la función a otra variable
const saludar = estudiante.saludar
saludar() // Pasa al objeto global `window.saludar()`, `window` -> `this`

// en Modo estricto el dueño no estará definido `this` -> `undefined`
```

🚨 Para el modo `module` esta habilitado por defecto `use strict`.

---

## Introducción a MongoDB

En el universo del desarrollo moderno, los datos ya no se almacenan únicamente en tablas rígidas y relaciones complejas. Hoy exploraremos **MongoDB**, una base de datos **NoSQL** que rompe con los esquemas tradicionales y nos invita a pensar en estructuras más flexibles, escalables y adaptadas a la realidad de las aplicaciones web actuales.

MongoDB no usa filas ni columnas. En su lugar, trabaja con **documentos JSON**, lo que permite modelar la información de forma más natural, como si estuviéramos organizando objetos en JavaScript. Esto lo convierte en una herramienta ideal para proyectos dinámicos, desde redes sociales hasta sistemas de videovigilancia y plataformas educativas.

### 🧩 ¿Por qué aprender MongoDB?

- 📦 Porque permite almacenar datos de forma **modular y escalable**.
- 🚀 Porque se integra fácilmente con tecnologías modernas como Node.js, Express y React.
- 🔐 Porque ofrece herramientas robustas de **seguridad, autenticación y replicación**.
- 🧑‍🏫 Porque como futuros desarrolladores, necesitamos dominar tanto el enfoque relacional como el no relacional.

Los beneficios que se pueden obtener son:

- Buen rendimiento

- Productividad en desarrollo → Al tener una buena arquitectura y un buen modelado nos permite como desarrolladores hacer consultas mas simples y mucho mas eficientes.

- Minimizar costos → Un buen modelado nos permite minimizar costos, por ejemplo, en operaciones de lectura y escritura.

MongoDB es categorizada como una base de datos NoSQL y en base a documentos, convirtiéndose así en una base de datos muy poderosa y flexible. Pero por ser flexible no significa que no tenga una estructura, ya que al igual que otras bases de datos existen patrones y estructuras que nos ayudan a modelar nuestros datos.

Otra característica muy especial de MongoDB es que podemos desarrollar nuestro modelo de datos de forma iterativa, esto quiere decir, que si nuestra aplicación va creciendo a nivel de características y funcionalidades paralelamente podemos ir iterando nuestro modelado de datos sin perjudicar al negocio.

La flexibilidad de Mongo nos permite hacer esto de forma dinámica haciendo uso de unos determinados patrones, mientras que otro tipo de base de datos como lo son las relacionales o tabulares tendríamos que correr todo un proceso de migraciones si deseamos modificar a nivel de estructura nuestra base de datos.

![Objetos y Documentos](/img/blogs/fullstack/04-documento-mongodb.png)

Mongo forma parte de la familia de bases de datos documentales y se ha posicionado como una herramienta clave en el ámbito del almacenamiento y gestión de datos. La principal característica de Mongo es su capacidad para organizar la información de manera legible a través de JSON, un estándar que permite representar datos en pares clave-valor, haciendo que sea natural trabajar con documentos estructurados. Aunque internamente usa BSON, un formato binario optimizado para eficiencia, todas las interacciones externas se realizan mediante JSON, facilitando la lectura y manipulación de datos.

![Documentos en mongoDB](/img/blogs/fullstack/05-documento-mongodb.png)

Mongo no solo destaca por su estructura de datos innovadora, sino también por cómo se almacenan los documentos en colecciones. Esto permite agrupar datos relacionados de manera intuitiva.

![Colecciones MonogDB](/img/blogs/fullstack/06-colecciones-mongodb.png)

Por ejemplo, una "colección de usuarios" almacenaría los perfiles de los usuarios, mientras que una "colección de productos" contendría los detalles relevantes de cada producto.

### Diagrama Entidad Relación (ER)

El diagrama entidad-relación (ERD, por sus siglas en inglés) es una herramienta esencial para modelar, visualizar y comprender cómo se interrelacionan los datos en una base de datos. Al utilizar este tipo de diagramas, se identifican claramente las entidades, atributos y las conexiones entre ellas. Esto se representa con cajas donde se listan los detalles de cada entidad con sus respectivos tipos de datos como ObjectId, fechas o strings.

![Diagrama Entidad Relacion](/img/blogs/fullstack/07-diagrama-ER.png)

También lo podemos representar de la siguiente manera:

![ERD Tabla](/img/blogs/fullstack/08-diagrama-ER-tabla.png)

### Tipos de relaciones en el ERD

Las líneas que conectan las entidades en el diagrama representan las relaciones.

![Relaciones Cardinalidades](/img/blogs/fullstack/09-relaciones-cardinalidades.png)

Estas relaciones pueden ser de:

- **Uno a uno**: una única entidad está asociada con otra única entidad.
- **Uno a muchos**: una entidad puede vincularse a múltiples entidades.
- **Muchos a muchos**: múltiples entidades de ambos lados están relacionadas entre sí.

MongoDB propone ajustes a estos diagramas para adaptarse mejor a las bases de datos no relacionales.

### ¿Qué metodologías elegir para un buen modelado en Mongo?

El modelado adecuado de los datos es crucial para maximizar el desempeño y la efectividad de una base de datos. Existen diversas metodologías que ayudan a conceptualizar y estructurar mejor los datos en Mongo. Es importante conocer:

1. **Denormalización frente a normalización**: Aunque la normalización es esencial para eliminar redundancias, Mongo a menudo se beneficia de la denormalización al almacenar duplicados de datos para mejorar el tiempo de respuesta.

2. **Uso eficiente de subdocumentos y arrays**: Si bien los subdocumentos ofrecen una estructura interna rica dentro de un solo documento, su uso debe ser optimizado para no aumentar el tamaño del documento más de lo necesario.

3. **Elección adecuada de índices**: El uso estratégico de índices puede mejorar significativamente las velocidades de búsqueda y consulta, pero también hay que ser conscientes de los recursos que estos consumen.

A medida que avanzamos, veremos cómo cada metodología se adapta a diferentes necesidades y cómo seleccionar la más adecuada para cada caso particular.

### ¿Por qué es crucial seguir una metodología de modelamiento de datos?

Para obtener un modelamiento de datos efectivo, es indispensable seguir una metodología bien estructurada. Esta aborda patrones y arquitectura tanto para bases de datos relacionales como NoSQL. La importancia de estas estrategias radica en adaptarse a restricciones de sistemas, optimizando recursos y rendimiento.

![Recurso aire](/img/blogs/fullstack/10-recursos.png)

### ¿Cuáles son las restricciones comunes en los sistemas de datos?

Las restricciones en un sistema son fundamentales al modelar datos. Se presentan limitaciones tales como:

- **Recursos de hardware**: Como el espacio en la RAM, discos de estado sólido o discos mecánicos. Por ejemplo, información histórica puede almacenarse en discos mecánicos, mientras que datos de consulta rápida deberían estar en discos de estado sólido o directamente en la memoria RAM.

- **Tamaño de documentos**: En MongoDB, los documentos tienen un límite de 16 MB.

- **Latencia**: Influye en dónde se almacena la base de datos para minimizar el tiempo de espera de los usuarios, utilizando redes de entrega de contenido (CDN).

![Recursos MongoDB](/img/blogs/fullstack/11-recursos-mongodb.png)

### ¿Cómo afecta la latencia al acceso de datos?

La latencia es el tiempo que tarda una solicitud en llegar al servidor y regresar con una respuesta. Puede ser crucial en la experiencia del usuario, ya que la ubicación del servidor respecto al usuario afecta este tiempo. Por eso, aplicaciones como MongoATLAS ofrecen configuraciones de réplicas geográficas para disminuir la latencia.

**¿Qué fases componen la metodología de modelamiento?**

El modelamiento se divide en tres fases esenciales: escenarios, relaciones y patrones.

## ¿Cómo identificar los escenarios adecuados?

Primero, es esencial definir el escenario en el que operará el modelo de negocio. Un correcto reconocimiento de los contextos y reglas de negocio es crucial. Por ejemplo, en un e-commerce, es importante comprender cómo los usuarios interactúan con un carrito de compras. En un proyecto de IoT, el manejo y registro de los sensores difiere completamente.

### ¿Por qué son relevantes los expertos en el tema?

Los expertos en el tema son críticos para entender a fondo el negocio. Ya sea un especialista en e-commerce o en el clima, su conocimiento detallado es esencial. Adicionalmente, familiarizarse con el sistema actual, incluso si solo son hojas de cálculo, permite una mejor adaptación y optimización del nuevo diseño de base de datos.

### ¿Qué es el "workload" y cómo se construye?

El "workload" o carga de trabajo es un documento que se genera a partir de la interacción de expertos en la materia, los escenarios definidos y el sistema actual. Aquí se identifican relaciones y operaciones comunes, facilitando un modelo de datos óptimo.

**¿Cuáles son los pasos finales en el modelamiento de datos?**

Una vez definidos los escenarios y construida la carga de trabajo, queda considerar las relaciones y seguir los patrones adecuados para garantizar un sistema eficiente.

![Workload](/img/blogs/fullstack/12-workload.png)

### ¿Cómo determinar las relaciones adecuadas entre datos?

Las relaciones se basan en las restricciones identificadas por el experto en modelado. Es vital definir entidades y atributos, además de decidir si se referencian o se embeben las relaciones en bases de datos NoSQL.

![Relaciones](/img/blogs/fullstack/13-relaciones.png)

### ¿Cuán importante es aplicar patrones en el modelamiento?

Los patrones son útiles para mejorar el rendimiento y adecuar el sistema a necesidades específicas. Aunque son opcionales, aplicarlos puede llevar a bases de datos más rápidas y eficaces.

![Patrones](/img/blogs/fullstack/14-patrones.png)

### ¿Qué resultado final se busca al aplicar esta metodología?

El resultado es un diseño de bases de datos estructurado que optimiza rendimiento, escalabilidad y costo. Esto asegura que la aplicación funcione de manera eficiente y se adapte a las necesidades futuras del negocio.

![Modelamiento](/img/blogs/fullstack/15-modelamiento.png)

#### Workload: [Documento workload](./06-Workload.md)

En el desarrollo de sistemas de datos, entender y aplicar los conceptos de workload es esencial para modelar adecuadamente la base de datos. En este contenido, exploraremos un caso de estudio de sensores climáticos, centrándonos en la estructura necesaria para identificar los requerimientos correctos y obtener un diseño óptimo.

![Sensores](/img/blogs/fullstack/16-sensores.png)

### ¿Cuáles son los tipos de relaciones en bases de datos?

Las bases de datos, ya sean relacionales o no, manejan tres tipos básicos de relaciones:

- **One to One (1:1)**: Una entidad está asociada a otra entidad única. Ejemplo clásico: un usuario y su credencial única.

- **One to Many (1:N)**: Una entidad está relacionada con muchas otras. Por ejemplo, un usuario puede poseer varios libros.

- **Many to Many (N:N)**: Varias entidades están relacionadas con múltiples entidades. Un claro ejemplo es un autor que ha escrito múltiples libros y un libro que puede tener varios autores.

![Tipos Relaciones](/img/blogs/fullstack/17-tipos-relaciones.png)

Ejemplo:

![Ejemplo Librería](/img/blogs/fullstack/18-ej-libreria.png)

Otro Ejemplo:

![Ejemplo Ecommerce](/img/blogs/fullstack/19-ej-ecomerce.png)

### ¿Cómo se expresan estas relaciones en bases de datos documentales?

En bases de datos documentales como MongoDB, las relaciones se pueden expresar de dos maneras: embebidas o referenciadas.

#### ¿Qué significa embeber documentos?

Embeber documentos implica incluir un subdocumento dentro de otro documento. Esto es útil cuando se desea simplificar el acceso y cuando las relaciones son intrínsecamente cercanas. Por ejemplo:

```json
{
  "usuario": {
    "nombre": "Juan Pérez",
    "contacto": {
      "email": "juan@example.com",
      "telefono": "123456789"
    }
  }
}
```

En este caso, el contacto del usuario está embebido dentro del documento del usuario, representando una relación uno a uno.

![Relación embebida](/img/blogs/fullstack/20-embebido.png)

### ¿Cuándo es preferible utilizar la referencia?

Referenciar documentos significa mantener los documentos separados, utilizando un campo para conectar entre ellos. Es benéfico cuando los datos cambian con frecuencia o cuando se requiere acceder a los componentes individualmente. Un ejemplo básico sería tener documentos de usuario y contacto por separado, utilizándose un ID para referenciarlos:

```json
// Documento de usuario
{
  "id": "1",
  "nombre": "Juan Pérez"
}

// Documento de contacto
{
  "usuarioId": "1",
  "email": "juan@example.com",
  "telefono": "123456789"
}
```

Aquí, la referencia a través de `usuarioId` en el documento de contacto conecta ambos documentos indicándonos que pertenecen al mismo usuario.

![Relación referencial](/img/blogs/fullstack/21-referencial.png)

Diagrama relación embebida.

![Diagrama Embebido](/img/blogs/fullstack/22-diagrama-embebido.png)

### ¿Cómo decidir entre embeber o referenciar?

Existen tres preguntas claves que deben guiar tu decisión:

1. **Frecuencia de consulta**: ¿Con qué frecuencia se consulta esa información? Si la respuesta es frecuentemente, es probable que sea beneficioso embeber los documentos.

2. **Frecuencia de actualización**: ¿Con qué frecuencia se actualiza la información? Un alto ritmo de cambio favorece el uso de referencias, ya que se evita reestructurar conjuntos de datos embebidos.

3. **Consulta conjunta o separada**: ¿La información se consulta en conjunto o de manera aislada? Si los datos se suelen necesitar conjuntamente, consideraría embeberlos; de lo contrario, referencia puede ser una mejor opción.

### ¿Cómo se representan estas relaciones visualmente?

Para las bases de datos documentales, la visualización de las relaciones es fundamental. En un diagrama entidad-relación, una entidad embebida podría representarse directamente dentro de otra. Por el contrario, los documentos referenciados se conectan a través de líneas indicando la relación.

Adoptar este enfoque flexible te permitirá optar por la mejor estrategia para cada tipo de relación considerando tus necesidades específicas. Las bases de datos documentales como MongoDB ofrecen esta dualidad de modos de relación, permitiendo elegir la opción más eficaz según el contexto y requerimientos de tus datos.

![Auto Desarmado](/img/blogs/fullstack/23-auto-desarmado.png)

![Auto Armado](/img/blogs/fullstack/24-auto-armado.png)

---

## Workload

##### 📊 Plantilla de Carga de Trabajo — Caso de Sensores Meteorológicos

### 🧩 Casos de Uso

- Una organización ha desplegado **100 millones de sensores meteorológicos**.
- El objetivo es **recolectar los datos transmitidos por todos los dispositivos en una base de datos central** para realizar predicciones y análisis de tendencias.

### 📌 Datos Principales

- **Cantidad de dispositivos:** `100,000,000`
- **Analistas:** `10`
- **Periodo de análisis:** `10 años`

### 📐 Supuestos

- Los datos **por hora** son suficientes para análisis de tendencias.
- Se requiere conservar los datos **por minuto** para análisis más profundos.

### ⚙️ Operaciones

#### 🔹 Actor: Dispositivo Sensor

- **Descripción:** Envía datos meteorológicos al servidor.
- **Tipo de operación:** `write`
- **Datos involucrados:** `device ID`, `timestamp`, `métricas del dispositivo`
- **Frecuencia:** Cada minuto
- **Tasa:** `100,000,000 / minuto`

#### 🔹 Actor: Científico de Datos

- **Descripción:** Ejecuta consultas analíticas sobre métricas de temperatura.
- **Tipo de operación:** `read`
- **Datos involucrados:** `métricas de temperatura`
- **Frecuencia:** ~10 consultas analíticas por hora
- **Tasa:** `10 científicos * 10 consultas = 100 / hora`

### 🧱 Entidades

- `Usuarios`
  - `Perfiles`
- `Dispositivos`
  - `Categorías de dispositivos`
- `Datos de dispositivos`
  - `Temperatura del aire`
  - `Presión`
  - `Viento` (dirección, velocidad)

### 🔍 Observaciones

- Hay **más operaciones de escritura** que de lectura.

---

## Relaciones

#### 📘 Relaciones 1 a 1 Embebidas en Bases de Datos NoSQL

### 🧠 ¿Qué son y para qué sirven?

Las relaciones 1 a 1 embebidas permiten **agrupar información relacionada dentro de un mismo documento**, lo que mejora la coherencia y simplifica las consultas. Son especialmente útiles cuando los datos se consultan juntos con frecuencia.

Ejemplo Documento User.

![Documento User](/img/blogs/fullstack/25-doc-user.png)

Documento User con los campos address y shipping address embebidas.

![Documento User con campos embebidos](/img/blogs/fullstack/26-doc-user-emb.png)

> 🛒 Ejemplo típico: En un sistema de e-commerce, un usuario puede tener dos direcciones (residencial y de envío). En lugar de crear colecciones separadas, se embeben como subdocumentos dentro del documento del usuario.

### 🧱 Estructura de Subdocumentos

```json
{
  "nombre": "Juan",
  "email": "juan@example.com",
  "address": {
    "calle": "Carrera 87",
    "ciudad": "Bogotá",
    "zip": "111111"
  },
  "shipping_address": {
    "calle": "Avenida Siempre Viva",
    "ciudad": "Bogotá",
    "zip": "222222"
  }
}
```

🔍 Aquí, `address` y `shipping_address` son subdocumentos embebidos. Esto permite mantener la información agrupada y facilita su acceso.

### 🔎 Consultas sobre Subdocumentos

Puedes realizar búsquedas directamente sobre los atributos internos:

```js
db.users.find({ 'address.ciudad': 'Bogotá' })
```

✅ Esto devuelve todos los usuarios cuya dirección residencial está en Bogotá, sin necesidad de hacer joins o consultar múltiples colecciones.

### ✅ ¿Cuándo usar relaciones embebidas?

Usa este enfoque cuando:

- **Los datos se consultan juntos**: Si siempre necesitas la dirección al consultar el usuario.
- **Existe dependencia directa**: La dirección no tiene sentido sin el usuario.
- **Deseas simplificar el modelo**: Evitas referencias innecesarias y reduces la complejidad.

📊 Se estima que el 90% de las relaciones 1 a 1 se benefician de este enfoque.

### ⚠️ ¿Cuándo evitarlo?

Evita embeber si:

- El subdocumento tiene **significado propio** o se reutiliza en otros contextos.
- Necesitas **consultarlo de forma independiente** o compartirlo entre varios documentos.

📌 Ejemplo: En un sistema de inventario o e-commerce, múltiples productos pueden pertenecer a una misma categoría.

#### 🔗 Relaciones 1 a 1 Referenciadas en MongoDB

### 🧠 ¿Qué son y cuándo se usan?

Las relaciones 1 a 1 referenciadas se utilizan cuando **no es viable embeber la información** directamente en un documento, ya sea por limitaciones técnicas o por necesidades de rendimiento.

#### ⚠️ Casos típicos donde se recomienda referenciar:

- **📦 Tamaño máximo de documento (16MB)**: Si el subdocumento contiene imágenes, videos o binarios pesados.
- **🐢 Consultas lentas**: Cuando se procesan datos innecesarios en cada petición.
- **🚀 Optimización de rendimiento**: Si se requiere consultar grandes volúmenes de datos rápidamente, dejando los detalles aparte.

### 🧱 Ejemplo de estructura referenciada

```js
// Documento principal: tienda
db.stores.insertOne({
  storeId: 'ST001',
  name: 'PamplonaStore',
  address: 'Calle falsa 123',
  city: 'Sprinfield',
  state: 'Londres',
  zip: '1234',
})

// Documento relacionado: detalles de tienda
db.stores_details.insertOne({
  storeId: 'ST001', // clave compartida para la relación
  description: 'PamplonaStore asdasdasd',
  services: ['Ropa', 'Deportivo'],
  manager: {
    name: 'Mario',
    cellphone: '123412412',
  },
})
```

🔗 Ambos documentos están relacionados por el campo `storeId`, pero viven en colecciones separadas.

### 🔍 Consultas por separado

```js
db.stores.findOne({ storeId: 'ST001' }) // tienda
db.stores_details.findOne({ storeId: 'ST001' }) // detalles
```

✅ Esto permite consultar solo lo necesario, sin cargar datos pesados o irrelevantes.

### 🔄 Consulta conjunta con `$lookup`

Para unir los datos de ambas colecciones:

```js
db.stores.aggregate([
  {
    $lookup: {
      from: 'stores_details', // agregamos cual coleccion queremos conectar
      localField: 'storeId', // que campo los enlaza, en stores
      foreignField: 'storeId', // que campo los enlaza, en stores_details
      as: 'detail', // donde dejara la relacion
    },
  },
])
```

📦 Resultado:

```json
{
  "storeId": "ST001",
  "name": "PamplonaStore",
  "detail": [
    {
      "description": "PamplonaStore asdasdasd",
      "services": ["Ropa", "Deportivo"],
      "manager": { "name": "Mario", "cellphone": "123412412" }
    }
  ]
}
```

### ⚠️ Consideraciones técnicas

- Si los campos no coinciden o están ausentes, `$lookup` puede devolver **datos inesperados o nulos**.
- MongoDB puede generar **matrices vacías o 2D** si hay inconsistencias en los campos relacionados.
- Es importante validar que los campos clave (`storeId`) estén presentes y correctamente indexados.

#### 📚 Relaciones Uno a Muchos Embebidas en MongoDB

### 🧠 ¿Qué significa una relación uno a muchos embebida?

En bases de datos NoSQL como MongoDB, una relación uno a muchos embebida se utiliza cuando **un documento principal contiene múltiples elementos relacionados**, almacenados como un array. Es ideal cuando esos datos se consultan juntos y tienen una dependencia lógica fuerte.

> 🛒 Ejemplo típico: Un usuario con múltiples órdenes de compra, donde cada orden contiene varios productos.

![Documento User](/img/blogs/fullstack/27-doc-Order-User-N-M.png)

### 🧱 ¿Qué significa “embebido”?

Embebido significa que los datos relacionados **se almacenan dentro del mismo documento**, en lugar de en colecciones separadas. Se representa como un array (`[]`) de subdocumentos.

#### 🔧 Ejemplo en código

```js
db.order.insertOne({
  userID: ObjectId('...'),
  date: '2023-11-05',
  items: [
    {
      product: 'Camiseta',
      price: 120,
      quantity: 1,
    },
    {
      product: 'Pantalón',
      price: 200,
      quantity: 2,
    },
  ],
})
```

✅ Aquí, el array `items` representa una relación uno a muchos embebida: una orden con varios productos.

### 🚀 Ventajas de usar relaciones embebidas

- **Consultas rápidas**: Toda la información está en un solo documento.
- **Consistencia de datos**: Se reduce el riesgo de desincronización.
- **Eficiencia**: Ideal para datos que se consultan como un conjunto lógico (como los capítulos de un libro o los ítems de una orden).

### 📌 ¿Cuándo es recomendable?

Usa relaciones embebidas cuando:

- Hay **dependencia intrínseca**: Los datos embebidos no tienen sentido por sí solos.
- La relación es **uno a pocos**: El número de elementos es limitado y no crecerá indefinidamente.
- Se requiere **consultar todo junto**: Por ejemplo, mostrar una orden completa con todos sus ítems.

### ⚠️ ¿Cuándo evitarlo?

Evita embeber si:

- El volumen de datos puede **crecer sin control** (como comentarios en un producto).
- Los elementos embebidos deben ser **consultados o modificados individualmente** con frecuencia.
- Existe riesgo de **superar el límite de 16MB** por documento en MongoDB.

> Pipeline => Permite omitir campos del otro documento que no quiero traer, es de buen uso cuando por ejemplo quiero traer una order y usuario, pero por seguridad no retornar el password del usuario.

```js
db.inventory2.aggregate([
  {
    $match: ObjectId('12e21j321321'),
  },
  {
    $lookup: {
      pipeline: [
        {
          $project: {
            identification_number: 0,
            password: 0,
            createdAt: 0,
            updatedAt: 0,
            token: 0,
          },
        },
      ],
      from: 'inventory1',
      localField: 'iduser',
      foreignField: 'iduser',
      as: 'detail',
    },
  },
  {
    $unwind: '$detail',
  },
])
```

#### 🔗 Relaciones Uno a Muchos Referenciadas en MongoDB

### 🧠 ¿Qué son?

Una relación uno a muchos referenciada ocurre cuando **un documento principal está vinculado a múltiples documentos secundarios**, pero cada uno vive en su propia colección. Es útil cuando los datos secundarios tienen independencia o pueden crecer significativamente.

> 🛒 Ejemplo clásico: Un usuario con varias órdenes de compra. Cada orden pertenece a un único usuario, pero se almacena en una colección separada.

### 🧱 ¿Cómo se expresa en MongoDB?

Se utiliza una **clave de referencia** (como `userID`) para conectar documentos entre colecciones.

#### 🔧 Ejemplo en código

```js
// Documento en la colección de órdenes
{
  userID: ObjectId("507f1f77bcf86cd799439011"),
  product: "Zapatos",
  quantity: 1,
  price: 90
}
```

✅ Aquí, `userID` referencia al documento del usuario en la colección `users`.

### 🔍 Consultas efectivas

#### 🔸 Consulta simple

```js
db.orders.find({ userID: ObjectId('507f1f77bcf86cd799439011') })
```

🔎 Devuelve todas las órdenes asociadas al usuario especificado.

#### 🔸 Consulta con `$lookup`

Para obtener los datos del usuario junto con sus órdenes:

```js
db.orders.aggregate([
  {
    $lookup: {
      from: 'users',
      localField: 'userID',
      foreignField: '_id',
      as: 'userDetails',
    },
  },
])
```

📦 Resultado: Cada orden incluirá un array `userDetails` con la información del usuario.

### ✅ ¿Cuándo conviene usar referencias?

Usa referencias cuando:

- **📈 Los datos secundarios pueden crecer mucho** (como comentarios, logs, transacciones).
- **🔁 Se actualizan frecuentemente** (como direcciones o perfiles).
- **🔄 Se reutilizan en varios documentos** (como categorías, etiquetas, autores).

### ⚠️ Consideraciones

- Las referencias requieren **consultas adicionales o agregaciones** para unir datos.
- Es importante **indexar correctamente** los campos referenciados para mantener consistencia en la base de datos.
- Evita referenciar si los datos son pequeños, dependientes y siempre se consultan juntos.

#### 🔄 Relaciones Muchos a Muchos Referenciadas en MongoDB

### 🧠 ¿Qué son?

Las relaciones muchos a muchos permiten conectar **varios elementos de una colección con varios elementos de otra**. Son esenciales para modelar escenarios complejos y realistas.

> 🛍️ Ejemplo clásico: Una tienda puede vender múltiples productos, y un producto puede estar disponible en varias tiendas.

### 🔗 ¿Por qué usar referencias?

Las relaciones muchos a muchos **no deben embeberse**, ya que:

- Limitan la flexibilidad.
- Impiden que ambas entidades se refieran mutuamente.
- Generan redundancia y dificultan actualizaciones.

✅ Lo ideal es usar **referencias mediante ObjectId** para vincular documentos entre colecciones.

### 🧱 Ejemplo práctico: Tiendas y productos

#### 1️⃣ Insertar productos

```json
[
  { "nombre": "Producto 1", "tamaño": ["L", "M"], "precio": 30 },
  { "nombre": "Producto 2", "tamaño": ["L"], "precio": 45 },
  { "nombre": "Producto 3", "tamaño": ["M"], "precio": 90 }
]
```

📦 Cada producto tiene propiedades como nombre, tallas disponibles y precio.

#### 2️⃣ Relacionar tiendas con productos

```json
[
  {
    "nombre": "Store1",
    "productsIDs": [
      ObjectId("5f50c31aa06a6b3f79138c49"),
      ObjectId("5f50c31aa06a6b3f79138c50")
    ]
  },
  {
    "nombre": "Store2",
    "productsIDs": [
      ObjectId("5f50c31aa06a6b3f79138c51"),
      ObjectId("5f50c31aa06a6b3f79138c52")
      ObjectId("5f50c31aa06a6b3f79138c49"),
    ]
  }
]
```

🔗 Aquí, cada tienda contiene un array de referencias a productos.

### 🔍 Consultas enriquecidas con `$lookup`

Para unir tiendas con sus productos:

```js
db.stores.aggregate([
  {
    $lookup: {
      from: 'products',
      localField: 'productsIDs',
      foreignField: '_id',
      as: 'productos',
    },
  },
])
```

📊 Resultado: Cada tienda incluirá un array `productos` con los detalles completos de cada producto.

```js
[
  {
    nombre: "Store1",
    productsIDs: [
      ObjectId("5f50c31aa06a6b3f79138c49"),
      ObjectId("5f50c31aa06a6b3f79138c50")
    ],
    productos: [
      { _id: ObjectId("5f50c31aa06a6b3f79138c49"), nombre: "Producto 1", tamaño: ["L", "M"], precio: 30 },
      { _id: ObjectId("5f50c31aa06a6b3f79138c50"), nombre: "Producto 2", tamaño: ["L"], precio: 45 },
    ]
  },
  ...
]
```

### 🎯 Escenarios reales

#### 🎤 Conferencias y speakers

- Un **speaker** puede participar en varias **sesiones**.
- Una **sesión** puede tener varios **speakers**.

🔁 Ambas entidades se refieren mutuamente, lo que requiere una relación muchos a muchos referenciada.

### ✅ Ventajas del enfoque referenciado

- **Escalabilidad**: Ideal para grandes volúmenes de datos.
- **Reutilización**: Evita duplicar información.
- **Actualización eficiente**: Cambios en un documento se reflejan en todos los relacionados.

![Usa referencia cuando la realción es n-n](/img/blogs/fullstack/28-cuando-N-M.png)

#### 🔁 Relaciones Muchos a Muchos con Referencias Bidireccionales en MongoDB

### 🧠 ¿Qué son?

Las relaciones muchos a muchos permiten que **varios documentos de una colección se vinculen con varios documentos de otra**. Cuando ambos lados mantienen referencias entre sí, hablamos de una **relación bidireccional**.

> 🛍️ Ejemplo: Un producto puede estar disponible en varias tiendas, y una tienda puede vender múltiples productos. Ambos documentos se refieren mutuamente.

![n-n referencia bidireccional](/img/blogs/fullstack/29-n-n-referencial-bidireccional.png)

#### 🔧 ¿Cómo actualizar un producto para incluir tiendas?

Para reflejar esta relación desde el lado del producto:

#### 1️⃣ Identificar los IDs

- Consulta el producto que deseas actualizar.
- Obtén el `_id` de las tiendas que quieres vincular.

#### 2️⃣ Actualizar el documento

```js
db.productos.updateOne(
  { _id: ObjectId('ID_del_producto') },
  {
    $set: {
      StoreIDs: [ObjectId('ID_tienda_1'), ObjectId('ID_tienda_2')],
    },
  },
)
```

✅ Esto añade el campo `StoreIDs` al producto, con una lista de tiendas asociadas.

### 🔍 ¿Cómo verificar la relación?

#### 🔸 Consulta directa

```js
db.productos.findOne({ _id: ObjectId('ID_del_producto') })
```

🔎 Verifica que el campo `StoreIDs` contenga los IDs esperados.

#### 🔸 Consulta enriquecida con `$lookup`

```js
db.productos.aggregate([
  {
    $lookup: {
      from: 'stores',
      localField: 'StoreIDs',
      foreignField: '_id',
      as: 'DetalleStores',
    },
  },
])
```

📦 Resultado: El producto incluirá un array `DetalleStores` con los datos completos de cada tienda.

### 🔄 ¿Desde el lado de la tienda también?

Sí. Para una relación verdaderamente bidireccional, cada tienda también debe tener un array `productIDs` con los productos que ofrece.

Esto permite:

- Consultar desde **productos hacia tiendas**.
- Consultar desde **tiendas hacia productos**.

### ✅ ¿Cuándo usar referencias bidireccionales?

Usa este enfoque cuando:

- La información se consulta **frecuentemente desde ambos lados**.
- Se requiere **navegación cruzada** en la aplicación (ej. ver productos por tienda y tiendas por producto).
- Se busca **optimizar la experiencia del usuario** con vistas completas.

### ⚠️ ¿Y si solo se consulta desde un lado?

En ese caso, puedes usar **referencias unilaterales**. Por ejemplo:

- Si solo necesitas saber qué productos tiene una tienda, pero no desde el producto hacia la tienda.
- Esto reduce redundancia y simplifica el modelo.

#### 🧩 Desnormalización en Bases de Datos Documentales (MongoDB)

### 🧠 ¿Qué es la desnormalización?

La desnormalización consiste en **duplicar ciertos datos dentro de un documento** para evitar consultas adicionales y mejorar el rendimiento. Aunque contradice los principios de normalización en bases relacionales (como PostgreSQL o MySQL), en MongoDB puede ser una estrategia muy eficiente.

> 🔄 En lugar de evitar la redundancia, se **acepta y controla** para acelerar el acceso a la información.

![Desnormalización](/img/blogs/fullstack/30-desnormalizacion.png)

![Uno a muchos](/img/blogs/fullstack/31-Order-Product-User.png)

![Aplicar desnormalización](/img/blogs/fullstack/32-Product-Order-items.png)

### 🛒 Ejemplo práctico: Órdenes de compra en un e-commerce

#### 🔧 Estructura desnormalizada

```js
const order = {
  items: [
    {
      productId: '12345',
      title: 'Product 1',
      price: 12,
      quantity: 2,
    },
    {
      productId: '67890',
      title: 'Product 2',
      price: 45,
      quantity: 1,
    },
  ],
  userId: 'user123',
}
```

✅ Aquí, cada ítem incluye el `productId`, pero también **replica el título y precio** del producto. Esto evita tener que consultar la colección `products` para generar una factura o mostrar el historial de compras.

### 🎯 Ventajas de la desnormalización

1. **🚀 Consultas más rápidas**: No necesitas hacer `$lookup` ni múltiples llamadas para obtener datos clave.
2. **📜 Registro histórico**: Conservas el precio y detalles del producto **tal como estaban al momento de la compra**, incluso si luego cambian.

### 🔍 Verificación en MongoDB

```js
db.orders.find({ _id: ObjectId('orderId') })
```

🔎 Esta consulta permite revisar cómo quedó estructurada la orden y confirmar que los datos desnormalizados están presentes.

### ⚙️ ¿Cómo afecta la estructura de tu base?

- Requiere **automatizar el proceso** desde tu aplicación o servicio web.
- Debes definir reglas claras para **cuándo y qué datos duplicar**.
- Implica **mantener coherencia** entre datos originales y duplicados si se actualizan.

---

## Patrón Computed Pattern en MongoDB

### 🧠 ¿Qué es?

El **Computed Pattern** consiste en **precalcular valores** (como totales o promedios) en el momento de la escritura, para evitar cálculos costosos durante las consultas de lectura.

> 🔄 En lugar de calcular el total de una orden cada vez que se consulta, se actualiza automáticamente al agregar ítems.

### 🛒 Ejemplo práctico: Órdenes de compra en un e-commerce

#### 🔧 Estructura inicial

Al crear una orden, se incluye:

- El usuario que la genera.
- La fecha de creación.
- Un array vacío de ítems.

Este modelo simula un **carrito de compras dinámico**, donde los productos se agregan gradualmente.

#### ➕ Agregar ítems y actualizar el total

```js
db.orders.updateOne(
  { _id: ObjectId('orden_id') },
  {
    $push: {
      items: {
        producto: 'producto1',
        precio: 12,
        cantidad: 1,
      },
    },
    $inc: { total: 12 }, // precio * cantidad
  },
)
```

✅ Se usa `$push` para añadir el ítem y `$inc` para actualizar el total precalculado.

### 🚀 Ventajas del patrón

- **Consultas más rápidas**: El total ya está disponible, sin necesidad de recorrer el array.
- **Menor carga de CPU**: Evita cálculos en tiempo real.
- **Historial confiable**: Conserva el valor exacto al momento de la operación.

### 🎯 ¿Cuándo aplicarlo?

Este patrón es ideal cuando:

- Las **lecturas son más frecuentes** que las escrituras.
- Se requiere **respuesta rápida** en interfaces de usuario.
- Se manejan **grandes volúmenes de datos**.

### 📚 Casos de uso

#### 📝 Sistema educativo

En un examen nacional, el puntaje total se calcula al finalizar el examen. Así, las listas de resultados se generan rápidamente sin recalcular.

#### 🎬 Industria del entretenimiento

Cada sesión de una película genera ingresos. Al finalizar, se suma al total de la película, evitando sumar manualmente en cada consulta.

![Computed Pattern CPU](/img/blogs/fullstack/33-Computed-Pattern-CPU.png)

#### 🛠️ Consejos para implementarlo

1. **Analiza las frecuencias**: ¿Se consulta más de lo que se actualiza?
2. **Define reglas claras**: Implementa la lógica en el backend (Python, JS, .NET, etc.).
3. **Piensa en escalabilidad**: Este patrón reduce la carga en sistemas con muchos usuarios o transacciones.

![Computed Pattern CPU](/img/blogs/fullstack/34-Patterns-UseCase.png)

---

## Comandos PNPM

```fish
pnpm init # Crea el archivo package.json
pnpm add [package] # Instalar modulos, esto crea un archivo 'pnpm-lock.yaml'
pnpm add -D [package] # Instalar dependencias de desarrollo
# Al añadir dependencias nos pone unas sugerencias de que otras dependencias necesitamos

pnpm add @[package]/cli -g # Instalar modulos globales, que estén disponibles en todo el Sistema
pnpm setup # En caso de error ejecutar, antes de -g
pnpm i | pnpm install # Instalar todas las dependencias del package.json
pnpm remove [package] # Eliminar dependencias del package.json
pnpm exec [script] # En caso de ejecutar localmente un script, ej: pnpm exec tsc --init es como npx tsc --init
pnpm dlx create-react-app # Si queremos ejecutar un modulo sin la necesidad de instalarlo globalmente, ej: pnpm create vite
pnpm import # Si utilizabamos npm, luego podemos eliminar el package-lock.json
```

---

## NEXT.js

##### Recomendaciones

- [Introducción a React](https://react.dev/blog/2023/03/16/introducing-react-dev)

- [Youtube - React + Typescript](https://www.youtube.com/watch?v=dNxaP_BTtwQ&list=PLCKuOXG0bPi26-eawizqyLOgM7j66H_4M)

- [Next.js Docs](https://nextjs.org/docs)

#### Configurar Ubuntu (Opcional)

Para seguir este tutorial en caso de trabajar con Ubuntu, necesitará lo siguiente:

- Un servidor de desarrollo con Ubuntu 22.04, un usuario no root con privilegios `sudo` y un firewall activo. Consulte esta [guía de configuración inicial para servidores](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-22-04).

- Docker instalado en su servidor, siguiendo los pasos 1 y 2 de [How To Install and Use Docker on Ubuntu 22.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04).

- Docker Compose instalado en su servidor conforme el paso 1 de [How To Install and Use Docker Compose on Ubuntu 22.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-22-04).

- Una Alternativa a S.O. Linux se utilizará WSL2 con Windows 11 Pro, es lo que utilizaré en el curso.

#### Conocimientos previos

- JasaScript Básico o Intermedio (ECMAScript 6).

- Manejo de la terminal Básico

### Sección 1: Introducción

En esta sección, se revisan distintos puntos de como utilizar la plataforma del curso en sí, rescataremos las instalaciones necesarias:

#### Instalaciones Recomendadas

##### Instalaciones recomendadas - Curso de Next.js

##### Instalaciones Necesarias

- [Visual Studio Code](https://code.visualstudio.com/)

- [Postman](https://www.postman.com/downloads/)

- [Mongo Compass](https://www.mongodb.com/try/download/compass)

- [Git](https://git-scm.com/)

```
git config --global user.name "Tu nombre"
git config --global user.email "Tu correo"
```

- [Node](https://nodejs.org/es/)

```opcional - Yarn
npm install --global yarn
```

- [Google Chrome](https://www.google.com.mx/intl/es-419/chrome/?brand=CHBD&gclid=Cj0KCQiAtrnuBRDXARIsABiN-7AAMm13Ae3KDIib46Laxfe6tzD_w4yvDdpq5XsPw1eNlOkZ_0-3x3IaAvLEEALw_wcB&gclsrc=aw.ds)

- [Docker Desktop](https://www.docker.com/get-started)

Descargar imagen de Mongo 5.0.0

```
docker pull mongo:5.0.0
```

### Introducción a Next.js

**Next.js**, es un Framework poderoso para servir contenido estático y generado desde el lado del servidor, todo lo que puedes hacer en React.js lo puedes hacer en Next.js.

Al ser un marco de trabajo hay ciertos lineamientos, ciertas herramientas, que ya vienen al abrirlo de la caja, es bastante poderoso.

En pocas palabras, puedes hacer todo o que sabes en **React** + Mejoras de rendimiento, SEO, separación de código, router, dependencias, y más.

En el sitio oficial de React, menciona que si ustedes quieren incluir aplicaciones renderizadas del lado del servidor, recomiendan que ustedes prueben Next.js, también hay otro popular que es Gatsby, si quieren crear contenido estático, por ejemplo páginas web estáticas, pero Next.js también ofrece ese servicio, de hecho Next.js y Gatsby son cierta competencia una entre otra.

Otro punto importante que se mira desde la documentación oficial de React.js es que se asume que nuestro entorno de trabajo, o lo que tenemos en el backend por ejemplo es Node.js, esto no significa que necesariamente tienen que utilizar Node.js en el Backend para realizar nuestras API, pueden utilizar lo que guste, péro traten de dar una oportulidad a Node.js, pueden hacer todo con Node.js acceder al FileSystem del Servidor, etc. es súmamente poderoso.

Next.js cambia el paradigma de los **SPA** (Single Page Application), y te da opciones para trabajar tus aplicaciones. Por ejemplo pueden tener dos características principales como ser el **_Server-Side Rendering_** y/o **_Generación Estática_**. Al mismo tiempo, Next.js ofrece:

- **SSR:** Server-side rendering.
- **SSG:** Static-site generation.
- **CSR:** Client Side Rendering.
- **ISR:** Incremental Static Regeneration.
- **DR:** Dynamic Routing.

#### Un SPA funciona así

1. El usuario entra a una [URL](#) el cual inicial la primera solicitud, lo llamamos (request).

2. Luego el servidor responde con un (reponse).

3. Ahí es donde el cliente recibe esa solicitud, ésta tiene la información de diferentes dependencias que vamos a ocupar, los estilos hay que cargarlos de este URL, etc. Usualmente viene un documento **HTML** con todas sus referencias, que son necesarias para mostrar la aplicacion como nosotros queremos.

4. Si estamos trabajando con un SPA, todo el sitio web o la mayor parte de él. La computadora cliente (Navegador) interpreta la respuesta y aquí viene nuestro contenido de React.js, React empieza a generar la aplicación, empieza a usar el `useState`, los `useEffect`, los `useLayoutEffect`, el `useReducer`, crea el `context`, ahí empieza a generar toda esa parte, esto no es malo es sumamente poderos y útil que podamos crear **SPA**. Especialmente si son aplicaciones que están en la intranet, aplicaciones que no importa que sean **SEO friendly**.

**¿Qué pasaría si una persona (Cliente) sólo quiere ver el `About` de nuestro sitio web?**, entonces cargaría absolumamente todo, cargaría completamente toda la aplicación y eso implica módulos que posiblemente nunca usará, pero quizá lo peor de todo es que el **SPA no** es **SEO friendly**, los SPA tienen SEO, pero sólo en una pantalla, por que es la única página que se está generando, se puede hacer difierentes alteraciones, y el equipo de Google dijo que pronto los bots puedan renderizar la aplicación en memoria para así analizar meta tags y otra información, por el momento los SPA son conciderados no SEO friendly.

**¿Y qué es eso del SEO (Search Engine Optimization)?**, esto ayuda mucho a los bots que rondan el internet, analizando nuestros sitios web y ver que enlaces tienen, van siguiendo cada uno de esos enlaces y lo indexan todo, para cuando buscamos en google rápidamente tengamos resultado, esto es sumamente importante para algunos tipos de aplicaciones, si son aplicaciones que estarán en la intranet posiblemente el SEO no lo ocupemos jamás, pero hay ciertas aplicaciones que no pueden ser concebidas si no son SEO friendly.

**¿Por que es tan importante el SEO?**, es el impacto que esa aplicación tendrá en el internet. es lo que tenemos que ofrecer a los buscadores mas importantes del mundo, que es lo que hace su aplicación, en determinado URL.

#### Primer proyecto de NextJS

Pueden consultar en <https://nextjs.org/docs>

```fish
pnpm create next-app initial-demo
mv initial-demo 01-initial-demo
cd 01-initial-demo
pnpm dev # En caso de error realizar lo siguiente
pnpm add -D autoprefixer
# --- Error:
touch postcss.config.json
```

```json
{
  "plugins": ["autoprefixer"]
}
```

```fish
# Fin Error ---
Ctrl + c # Cancelen la terminal y vuelvan a iniciar
pnpm dev # ingresar a localhost:3000
```

Dentro de `./pages/`, es obligatorio que las páginas sean la exportación por defecto, y que los archivos estén en minúsculas.
Si el archivo es `index.jsx` la URL buscará un `index.html`, si el arhivo `jsx` tiene otro nombre como: `home.jsx` la URL reconocerá `localhost:3000/home`.

Así como definamos los `path's` es como usaremos en la navegación, y creando las rutas de manera implícita basada en **fileSystem**.

Al ejecutar `pnpm dev` ó `pnpm build`, genera unos archivos en la carpeta `.next`.

El archivo `./pages/_app.js` es un archivo común que comparte todas las páginas, ideal para incluir `navbar` y/o `footer`.

#### Explicación de archivos y directorios

```
.
├── README.md
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
└── tsconfig.json

3 directories, 17 files
```

**`tsconfig.json:`** Es el archivo de compilación, de como queremos que el compilador de TypeScript trabaje, como viene el archivo por defecto, no es necesario realizar cambios.

**`tailwind.config.js:`** luego tenemos en archivo de configuración de Tailwind CSS.

**`Readme.md:`** Podemos establecer la descripción de la aplicación, añadiendo procedimientos de como levantar y como construir su aplicación.

**`postcss.config.js:`** Como establecimos trabajar con Tailwind CSS, es necesario este archivo, en este archivo no tiene nada que ver Next.js.

**`package.json:`** Básicamente es el archivo de configuración de nuestro proyecto, aquí se encuentran las dependencias, scripts, y configuraciones de nuestro proyecto, y alguna información extra de nuestro proyecto como el nombre, la versión, privada si no queremos que se suba a NPM.

**`package-lock.json:`** Nó deberían de modificarlo, es un archivo que se genera automáticamente, y es el que se encarga de las versiones exactas de las dependencias que se instalan.

**`next.config.js:`** Son configuaraciones de como funciona y como se crea nuestro proyecto de Next.

**`next-env.d.ts:`** Si los archivos terminan con `d.ts` son archivos de definición de TypeScript, son archivos que no se compilan, pero que le dicen a TypeScript como se comportan ciertas librerías, este archivo no se modifica.

**`.gitignore:`** No tiene nada que ver Next, pero como nuestro proyecto va a seguir un control de versiones basado en git, el gitignore son todos los archivos y directorios y extensiones de archivos que nosotros no queremos que se le de seguimiento.

**`eslint.config.mjs:`** Es el archivo de configuración de ESLint, que es una herramienta que nos ayuda a mantener un código limpio y ordenado, y que siga ciertas reglas de estilo.

**`public/:`** Es el directorio donde podremos subir contenido estático, que no queremos que sea procesado de ninguna manera, solo queremos que se suba, como imágenes, archivos, etc.

**`node_modules/:`** Tiene todos los módulos que tengamos instalados en `dependencies` y `devDependencies`, en estos módulos pueden tener mas dependencias implísitas dentro del mismo, no realizaremos ninguna modificación, simplemente los añadimos o removemos a partir de los comando de `npm`, `yarn`, `pnpm`.

**`app/:`** Aquí es donde pasaremos la mayor parte del tiempo, es donde vamos a tener nuestros componentes, nuestros estilos, nuestras páginas, nuestros layouts, etc. Dentro de esta carpeta tenemos un `global.css` como su nombre indica es el estilo global de la aplicación, un `favicon.ico` que es el ícono que se visualiza en la pestaña del navegador, un `layout.tsx` que es el layout de nuestra aplicación, y un `page.tsx` que es la página principal de nuestra aplicación.

Eso es básicamente todo lo que tenemos, realmente lo que es propio de Next es `app/`, `public/`, y el archivo de configuración de Next `next.config.js`, todo lo demás son archivos de configuración adicionales, que nos ayudarán a escribir un mejor código, o a las dependencias que dijimos que queríamos.

Luego tenemos la carpeta `.next/` tampoco le daremos seguimiento a esta carpeta, es una carpeta que se genera automáticamente, y es donde se guarda todo el código compilado de nuestra aplicación, es decir, todo el código que se va a subir al servidor, y que se va a ejecutar en el navegador.

#### Rutas adicionales

Las rutas en Next v13 no son solo archivos, sino que también son directorios, y esto es gracias a la nueva característica de Next que se llama Dynamic Routing, que nos permite tener rutas dinámicas, y que se generan en tiempo de compilación.

Ejemplo: deberemos crear un directorio como `app/about/page.tsx` y ya tendremos una ruta `/about` en nuestra aplicación.

Por defecto todo lo que está dentro de `app/*` serán generados del lado del servidor (Server Components).

#### Convertir JSX a TSX

Pueden consultar el proyecto `02-initial-demo`.

#### Desplegando nuestra aplicación

**Desplegar la aplicación en Local.**

```fish
cd 02-initial-demo
pnpm install
yarn build
yarn start
```

**Desplegar la aplicación en Vercel.**

- Crear una cuenta con GitHub en [Vercel](https://vercel.com).

- Crear un repositorio en GitHub (en mi caso `next-vercel`)

> Si ya tenías un repositorio en la carpeta `02-initial-demo`, o sea, hiciste `git init` y `git remote add origin <repo>` en dicha carpeta.
> Entonces realizar lo siguiente:

```fish
git add .
git commit -m "Pre-deployment Vercel"
git remote add upstream git@github.com:<user>/next-vercel.git # upstream solo es un nombre
git push upstream main
git remote -v # Podras ver los repositorios ligados a tu directorio
```

> Si el `git init` y `git remote add origin <repo>` está en un directorio superior como `curso-next/02-initial-demo`.
> Entonces realizar lo siguiente:

```fish
# Estando en curso-next
cd 02-initial-demo
git init
git add .
git commit -m "Pre-deployment Vercel"
git remote add origin git@github.com:<user>/next-vercel.git
git push -u origin main
```

- Crear un nuevo proyecto que Vercel y añadir nuestro repositorio y dejamos que compile y termine el despliegue.

- Ingresamos a nuestra página ya desplegada y eso es todo les creará una dirección parecida a esta `https://next-vercel-zeta.vercel.app/`

**Desplegar la aplicación en Docker.**

- Revisar: `02-initial-demo/.dockerignore`

- Revisar: `02-initial-demo/Dockerfile`

```fish
# Ejecutar
docker build -t nextjs-initial .
docker run --name=next-app -p 3000:3000 nextjs-initial
```

---

## Resumen Typescript

TypeScript es JavaScript con una sintaxis para tipos.

![TypeScript contiene a JavaScript](/img/blogs/fullstack/35-typescript-javascript.png)

Éste **superset** de **TypeScript** es un lenguaje que utiliza como base **JavaScript**.

Si tenemos código en **JavaScript** es totalmente compatible con Typescript a no ser que se trate de problemas de compatibilidad por versión oh probar algún **feature** nuevo de JavaScript.

Lo importante de **TypeScript** es que no funciona en **tiempo de ejecución**, eso quiere decir que al final lo que llevaremos al navegador (cliente) es **JavaScript plano**.

Para probarlo ingresa a: [Playground Typescript](https://www.typescriptlang.org/play)

#### ¿Por que aprenderlo?

Primeramente por popularidad según la [Encuesta 2024](https://2024.stateofjs.com/en-US/usage/ 'stateofjs')

> ¿Eso que quiere decir?. Sí mas gente lo está usando, pues hay mas trabajos que lo requieren.

TypeScript fué creado por Microsoft por el **2012**, claro que pasaron varios años trabajandolo.

Justamente nació de la necesidad de realizar proyectos mucho mas grandes y fiarnos de **JavaScript** no era lo mas viable, se necesita un grado de seguridad poder trabajar con este lenguaje. Como tal **JavaScript** en un lenguaje **débil y dinámica**.

```js
let a = 'hola' // string
a = 2 // number

console.log(typeof a) // -> number
```

Lo que nos dá TypeScript es tener tipos de datos **fuertes y estáticos**, ya sea añadiendo los tipos de forma explícita o inferida.

TypeScript nos advierte que si realizamos cambios de tipos en el código, pues nos lo marca como un error y ya no ejecuta esto en tiempo de compilación y en tiempo real utilizando algun editor o el `playground` que vimos antes.

Una de las razones mas relevantes por el porque se utiliza, es por el cambio de tipos de datos que el motor de JavaScript lo realiza, o sea la `coerción de tipos`.

```js
3 * "3" // 9
1 + "2" + 1 // "121""
(1_ + 2) + "1" // "31""

true + true // 2
10 - true // 9


const foo = {
  valueOf: () => 2
}
3 + foo // 5
4 * foo // 8

const bar = {
  toString: () => " promise is a boy :)"
}
1 + bar // "1 promise is a boy :)"


4 * [] // 0
4 * [2] // 8
4 + [2] // "42"
4 + [1, 2] // "41,2"
4 * [1, 2] // NaN
4 + [1,2,3] // "41,2,3"

"string" ? 4 : 1 // 4
undefined ? 4 : 1 // 1

"name" + {} // "name[object Object]

//similar to: 4 * [] // 0
4 * Number([].toString())
4 * Number("")
4 * 0
//similar to: 4 / [2] // 2
4 / Number([2].toString())
4 / Number("2")
4 / 2

// Values Falsy: (false, 0, null, undefined, "", NaN, -0)
// Values Truthy: if (-1) if ("0") if ({}) if ([])
```

> 🚨 TypeScript no funciona en tiempo de ejecución, solo el tiempo de compilación y aumenta nuestro código final justamente para validar y aplicar las reglas de TypeScript.

Inferencia de tipos, solo utilizarlo para los tipos de datos primitivos o básicos.

```ts
function saludar(name) {
  console.log(`Hola ${name.toLowerCase()}`) // ❌ la propiedad no existe para 'number'
}

saludar(2)
```

En este caso el error está en tiempo de **ejecución** el compilador puede dejarlo pasar pero el error se verá cuando se invoque la **función**.

```ts
function saludar({ name, age }: { name: string; age: number }) {
  console.log(`Hola ${name}, tienes ${age} años`)
}

saludar({ name: 'Pepe', age: 22 })
```

Para tipar funciones, el tipo `Function` es el `any` de las funciones:

```ts
// const sayHiFromFunction = (fn: Function) => { // En lo posible no utilizar Function
const sayHiFromFunction = (fn: (name: string) => void) => {
  // `void` -> No tiene por que devolver nada la función, aunque haya un `return` (no me importa lo que devuelva)
  fn('Miguel')
}

const sayHi = (name: string) => {
  // Puedes ponerle `pepito` al parámetro `name`
  console.log(`Hola ${name}`)
}

sayHiFromFunction(sayHi)
```

Tipar `arrow function`:

```ts
const sumar = (a: number, b: number): number => {
  return a + b
}
// 🗒️ siempre que puedas evitar tipar la función y puede ser inferido, pues evitarlo
```

Otra forma de tipar una función `arrow`:

```ts
const restar: (a: number, b: number) => number = (a, b) => {
  return a - b
}
```

Un tipo para indicar que nunca devolverá nada `never`:

```ts
// - Nunca retorna (por ejemplo, lanza una excepción o entra en un bucle infinito).
// - Maneja casos imposibles o inalcanzables en estructuras de control.

// Funciones que lanzan errores
function throwError(message: string): never {
  throw new Error(message)
}

// Funciones con bucles infinitos
function bucleInfinito(): never {
  while (true) {
    // proceso continuo
  }
}

// Verificación de exhaustividad en `switch`
type Rol = 'admin' | 'usuario'

function manejarRol(rol: Rol) {
  switch (rol) {
    case 'admin':
      // lógica para admin
      break
    case 'usuario':
      // lógica para usuario
      break
    default:
      const error: never = rol // TypeScript lanza error si aparece un nuevo valor
  }
}
```

Inferencia de funciones anónimas según el `contexto`.

```ts
// La inferencia a partir de métodos o librerías es gracias a los `genéricos`
const avengers = ['Spidey', 'Hulk', 'Iron Man']

avengers.forEach(function (avenger) {
  // No es necesario añadir tipo
  console.log(avenger.toUpperCase()) // Reconoce el autocompletado
})
```

Para `object` utilizamos **alias type**:

```ts
type Hero = { // Importante utilizar `PascalCase`
  name: string
  age: number
}

let hero: Hero {
  name: 'Thor',
  age: 1500
}

// function createHero(name: string, age: number): Hero { // 01: se puede hacer de esta manera o:
function createHero(hero: Hero): Hero {
  const { name, age } = hero
  // code ...
  return { name, age }
}

// const thor = createHero('Thor', 1500) // 01: para esta opción
const thor = createHero({ name: 'Thor', age: 1500})
```

Manejando `Optional properties`:

```ts
type Hero = {
  readonly id?: number // Evita la `Mutabilidad`
  name: string
  age: number
  isActive?: boolean
}

let hero: Hero = {
  name: 'Thor',
  age: 1500,
}

function createHero(hero: Hero): Hero {
  const { name, age } = hero
  // code ...
  return { name, age, isActive: true }
}

const thor = createHero({ name: 'Thor', age: 1500 })
console.log(thor.id?.toString()) // Los valores opcionales pueden ser `undefined`

thor.id = 923748741037457 // Error: gracias a `readonly`
```

> 🚨 `readonly` no evita la `Inmutabilidad` solo nos advierte gracias a `typescript`.
> Si quisieramos evitar cambios en nuestras `properties` podríamos utilizar `Object.freeze({...})
> Pero eso ya es otro tema.

Utilizando `Template union types`:

```ts
type HeroId = `${string}-${string}-${string}-${string}-${string}`
type Hero = {
  readonly id?: HeroId
  name: string
  age: number
  isActive?: boolean
}

let hero: Hero {
  name: 'Thor',
  age: 1500
}

function createHero(hero: Hero): Hero {
  const { name, age } = hero
  // code ...
  return {
    id: crypto.randomUUID(), // `crypto` es nativo
    name,
    age,
    isActive: true
  }
}

const thor = createHero({ name: 'Thor', age: 1500})
console.log(thor)
```

Otro ejemplo:

```ts
type HeadecimalColor = `#${string}`

const color: HeadecimalColor = '0033ff' // Error del bueno 😄
const color2: HeadecimalColor = '#0033ff'
```

> 🚨 Recuerda que estas "`validaciones`" solo es para que salte nuestro `linter`.<br />
> ❗ Si queremos validar realmente utilizar librerías apropieadas.

Utilizando `Union types`:

```ts
type HeroId = `${string}-${string}-${string}-${string}-${string}`
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

// let am: number | string
// am = 123 // ✅
// am = '123abc' // ✅
// am = true // ❌
// let amm: string | 2
// amm = 3 // ❌
// am = 2 // ✅

type Hero = {
  readonly id?: HeroId
  name: string
  age: number
  isActive?: boolean
  powerScale?: HeroPowerScale
}

let hero: Hero {
  name: 'Thor',
  age: 1500
}

function createHero(hero: Hero): Hero {
  const { name, age } = hero
  // code ...
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true
  }
}

const thor = createHero({ name: 'Thor', age: 1500})
// thor.powerScale = 'MUY FUERTE' // ❌
thor.powerScale = 'universal'
```

Utilizando `Intersection Types`:

```ts
type HeroBasicInfo = {
  name: string
  age: string
}

type HeroProperties = {
  readonly id?: HeroId
  isActive?: boolean
  powerScale?: HeroPowerScale
}

type Hero = HeroBasicInfo & HeroProperties

let hero: Hero {
  name: 'Thor',
  age: 1500
}

function createHero(input: HeroBasicInfo): Hero {
  const { name, age } = input
  // code ...
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true
  }
}

const thor = createHero({ name: 'Thor', age: 1500})
```

Utilizando `Type Indexing`

```ts
type HeroProperties = {
  isActive: boolean
  address: {
    planet: string
    city: string
  }
}

const addressHero: HeroProperties['address'] = {
  planet: 'Earth',
  city: 'Madrid',
}
```

Utilizando `Type from value`

```ts
const address = {
  planet: 'Earth',
  city: 'Madrid',
}

type Address = typeof address // { planet: string, city: string }

const addressTwitch: Address = {
  planet: 'Mars',
  city: 'Twitch',
}
```

Ejemplo con función:

```ts
function crearConexion() {
  return { host: 'localhost', puerto: 5432 }
}

type Conexion = ReturnType<typeof crearConexion> // utility `ReturnType`
// Conexion es: { host: string; puerto: number }
```

> ⚠️ Limitaciones
>
> - Solo puedes usar `typeof` en identificadores (variables, funciones), no en expresiones complejas.
> - No puedes usarlo para verificar interfaces en tiempo de ejecución
> - Otros `utilities` de **TypeScript**: `typeof`, `keyof`, `infer`, y algunos adicionales como `ReturnType`, `Parameters`, `InstanceType`,

Utilizando types para `Arrays`:

```ts
// const languages: string[] = []
const languages: (string | number)[] = []

languages.push('JavaScript')
languages.push('Python')
languages.push(2)
languages.push(true) // ❌
```

Otro ejemplo:

```ts
type CellValue = 'X' | 'O' | ''
// type GameBoy: string[][]
// type GameBoy: Array<string[]>
// type GameBoy: Array<Array<string>>
type GameBoy = [
  // Tupla
  [CellValue],
  [CellValue],
  [CellValue],
  [CellValue],
  [CellValue],
  [CellValue],
  [CellValue],
  [CellValue],
  [CellValue],
]

const gameBoy: GameBoy = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', '', 'O'],
]

// En caso de usar React
type State = [string, (newName: string) => void]
const [hero, setHero]: State = useState('thor')

// En caso de códigos RGB
type RGB = [number, number, number]

const rgb: RGB = [255, 0, 106]

// Un problema que existe con las **tuplas**:
rgb.push(4) // Se lo come com Patatas Fritas!!!

// La forma de arreglarlo
type RGB = readonly [number, number, number]
```

Utilizando `emums`

```ts
// Automáticamente lo maneja como índices desde el 0 al 2 una vez compilado
enum ERROR_TYPES {
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN,
}

function mostrarMensaje(tipoError: ERROR_TYPES) {
  if (tipoError === ERROR_TYPES.NOT_FOUND) {
    console.log('No se encuentra el recurso')
  } else if (tipoError === ERROR_TYPES.UNAUTHORIZED) {
    console.log('Debe iniciar sesión primero')
  } else if (tipoError === ERROR_TYPES.FORBIDDEN) {
    console.log('No tienes permisos para acceder')
  }
}
```

> 🗒️ Ésto genera código demás compilado a `JavaScript`

```ts
// En caso que quiera tener exactamente esos valores
enum ERROR_TYPES {
  NOT_FOUND = 'notFound',
  UNAUTHORIZED = 'unauthorized',
  FORBIDDEN = 'forbidden',
}

function mostrarMensaje(tipoError: ERROR_TYPES) {
  if (tipoError === ERROR_TYPES.NOT_FOUND) {
    console.log('No se encuentra el recurso')
  } else if (tipoError === ERROR_TYPES.UNAUTHORIZED) {
    console.log('Debe iniciar sesión primero')
  } else if (tipoError === ERROR_TYPES.FORBIDDEN) {
    console.log('No tienes permisos para acceder')
  }
}
```

Su Compilado sería esto:

```js
'use strict'
var ERROR_TYPES
;(function (ERROR_TYPES) {
  ERROR_TYPES['NOT_FOUND'] = 'notFound'
  ERROR_TYPES['UNAUTHORIZED'] = 'unauthorized'
  ERROR_TYPES['FORBIDDEN'] = 'forbidden'
})(ERROR_TYPES || (ERROR_TYPES = {}))
function mostrarMensaje(tipoError) {
  if (tipoError === ERROR_TYPES.NOT_FOUND) {
    console.log('No se encuentra el recurso')
  } else if (tipoError === ERROR_TYPES.UNAUTHORIZED) {
    console.log('Debe iniciar sesión primero')
  } else if (tipoError === ERROR_TYPES.FORBIDDEN) {
    console.log('No tienes permisos para acceder')
  }
}
```

Ahora si utilizamos `const`:

```ts
const enum ERROR_TYPES {
  NOT_FOUND = 'notFound',
  UNAUTHORIZED = 'unauthorized',
  FORBIDDEN = 'forbidden',
}

function mostrarMensaje(tipoError: ERROR_TYPES) {
  if (tipoError === ERROR_TYPES.NOT_FOUND) {
    console.log('No se encuentra el recurso')
  } else if (tipoError === ERROR_TYPES.UNAUTHORIZED) {
    console.log('Debe iniciar sesión primero')
  } else if (tipoError === ERROR_TYPES.FORBIDDEN) {
    console.log('No tienes permisos para acceder')
  }
}
```

Generaría:

```js
'use strict'
function mostrarMensaje(tipoError) {
  if (tipoError === 'notFound' /* ERROR_TYPES.NOT_FOUND */) {
    console.log('No se encuentra el recurso')
  } else if (tipoError === 'unauthorized' /* ERROR_TYPES.UNAUTHORIZED */) {
    console.log('Debe iniciar sesión primero')
  } else if (tipoError === 'forbidden' /* ERROR_TYPES.FORBIDDEN */) {
    console.log('No tienes permisos para acceder')
  }
}
```

> ❗ Utilizaremos `const enum ...` siempre que sea posible.<br />
> ❗ Utilizaremos solo `enum ...` cuando la funcionalidad se consume desde afuera o estemos realizando una librería.

Utilizaremos **Aserciones de tipos**.

Imaginemos que estamos trabajando con `canvas` y `typescript`.

```ts
const canvas = document.getElementById('canvas')

// ¿Cómo sabe TypeSCript que realmente estas recuperando un elemento <canvas />?

if (canvas !== null) {
  const ctx = canvas.getContext('2d') // Se queja por `getContext` no existe en HTMLElement
  // Pero necesitamos un tipo más específico: HTMLCanvasElement
}
```

Para decirle que este elemento lo trate como `HTMLCanvasElement`:

```ts
// Básicamente le estamos diciendo a `TypeScript` que se fie de nosotros
const canvas = document.getElementById('canvas') as HTMLCanvasElement

if (canvas !== null) {
  const ctx = canvas.getContext('2d')
}
```

Lo mejor que podríamos hacer, es que la aserción lo hagamos despues de la comprobación.

```ts
// Aún así si mandamos otro elemento que no sea canvas TypeScript no se daría cuenta.
const canvas = document.getElementById('canvas')

if (canvas !== null) {
  const ctx = (canvas as HTMLCanvasElement).getContext('2d')
}
```

Lo que se puede hacer es comprobar si ese elemento es igual que un `HTMLCanvasElement`.

```js
// Esto es JavaScript pero en TypeScript usa la inferencia para darse cuenta.
const canvas = document.querySelector('canvas')

if (canvas instanceof HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')
}
```

Vamos a codi.link y probamos.

`Fetching` de datos en TypeScript.

```mts
// Usar .mts para nodejs
const API_URL = 'https://api.github.com/search/repositories?q=javasript'

const response = await fecth(API_URL)

if (!response.ok) {
  throw new Error('Request failed')
}

// Aquí TypeScript no tiene ni idea que tipo de datos sería
// Para esto se utiliza las aserciones
const data = await response.json()
```

Ingresamos a https://quicktype.io/ pegamos la respuesta de la API y obtenemos los tipos checkamos: `Interfaces only`, `Verify JSON.parse results at runtime`, `Use types instead of interfaces`.

```mts
export type GitHubAPIResponse = {
  items: []
  ...
}
// ...

const API_URL = 'https://api.github.com/search/repositories?q=javasript'

const response = await fecth(API_URL)

if (!response.ok) {
  throw new Error('Request failed')
}

const data = await response.json() as GitHubAPIResponse
data.items.// aparece todos los tipos.
```

Para realizar validaciones y detectar los tipos en tiempo de ejecución podríamos habilitar `TypeScript Zod`, esto sí genera código en tiempo de ejecución.

Hay otra forma de definir tipos y es con `interface`, es muy similar al `type`, diría que mas del `95%` podrían ser intercambiables.

```ts
type heroe = {
  id: string
  name: string
  age: number
}

interface heroe {
  id: string
  name: string
  age: number
}
```

Tiene ligerias diferencias, define la forma que debe tener un objeto, sería cómo definir el contrato de un objeto para especificar sus propiedades y métodos.

Se puede añadir que tenga métodos:

```ts
interface heroe {
  id: string
  name: string
  age: number

  saludar: () => void
}
```

Lo interesante es que en las interfaces se pueden anidar.

```ts
interface Producto {
  id: number
  nombre: string
  precio: number
  quantity: number
}

// Algo propio de las `interface` se puede extender con `extends`
interface Zapatilla extends Producto {
  talla: number
}

interface CarritoDeCompras {
  totalPrice: number
  productos: (Producto | Zapatilla)[] // Se puede utilizar union types con las interfaces
}

const carrito: CarritoDeCompras = {
  totalPrice: 100,
  productos: [
    {
      id: 1,
      nombre: 'Producto 1',
      precio: 100,
      quantity: 1,
    },
  ],
}
```

Hay dos formas de tipar métodos con interfaces.

```ts
// Opción 1
interface CarritoOps {
  add: (product: Producto) => void
  remove: (id: number) => void
  clear: () => void
}

// Opción 2
interface CarritoOps {
  add(product: Product): void
  remove(id: number): void
  clear(): void
}
```

Algo que podemos hacer con las interfaces es reescribir la interfaz y dividir los tipos internos, si lo dejamos así se queja por tener las propiedades repetidas.

```ts
interface CarritoOps {
  add: (product: Producto) => void
  remove: (id: number) => void
}

interface CarritoOps {
  clear(): void
}

const ops: CarritoOps = {
  add: (product: Producto) => {},
  remove: (id: number) => {},
  clear: () => {},
}
```

¿`Interfaces` o `Types`?

Podemos ver las diferencias de utilizar uno o el otro desde la documentación y apartir de esto escoger cual utilizar.

[Doc. TypeScript - Handbook - EverydayTypes](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

Otra diferencia es que las interfaces no pueden declarar tipo primitivo, ej:

```ts
type HeroId = `${number}-${string}`
```

Por lo general siempre que puedas usar `type` utilizalos, para objetos o clases utilizaría `interface`.

### Narrowing

```ts
function mostrarLongitud(objeto: number | string) {
  if (typeof objeto === 'string') {
    return objeto.length
  }

  return objeto.toString().length
}

mostrarLongitud('1')
```

```ts
interface Mario {
  company: 'Nintendo'
  nombre: string
  saltar: () => void
}

interface Sonic {
  company: 'Sega'
  nombre: string
  correr: () => void
}

type Personaje = Mario | Sonic

function jugar(personaje: Personaje) {
  if (personaje.company === 'Nintendo') {
    personaje.saltar() // <--- Este es Mario!!
    return
  }

  // Seguro que solo llega a sonic
  personaje.correr()
}
```

```ts
interface Mario {
  nombre: string
  saltar: () => void
}

interface Sonic {
  nombre: string
  correr: () => void
}

type Personaje = Mario | Sonic

// Type Guard
// Déjame comprobar si personaje es sonic
// y esta función determina si es sonic o no
function checkIsSonic(personaje: Personaje): personaje is Sonic {
  return (personaje as Sonic).correr === undefined
}

function jugar(personaje: Personaje) {
  if (checkIsSonic(personaje)) {
    personaje.correr()
  }
}
```

### Tipo Never

```ts
function fn(x: string | number) {
  if (typeof x === 'string') {
    // x es string
    x.toUpperCase()
  } else if (typeof x === 'number') {
    // do something
    x.toFixed(2)
  } else {
    x // never
  }
}
```

```ts
class Avenger {
  readonly name: string
  // #powerScore: number en todos tendríamos que añadir #
  private powerScore: number // no puedes acceder a partir de la instancia
  private readonly wonBattles: number = 0
  // public age: number = 0
  // age: number = 0 // por defecto es public
  protected age: number = 0 // podrías acceder a clases que hereden esta propiedad

  constructor(name: string, powerScore: number) {
    this.name = name
    this.powerScore = powerScore
  }

  get fullName() {
    return `${this.name}, de poder ${this.powerScore}`
  }

  set power(newPower: number) {
    if (newPower <= 100) {
      this.powerScore = newPower
    } else {
      throw new Error('Power score cannot be more than 100')
    }
  }
}

const avengers = new Avenger('Spidey', 80)
// avengers.name
```

```ts
interface Avenger {
  name: string
  powerScore: number
  wonBattles: number
  age: number

  battle: (enemy: Avenger, win: boolean) => void
}

class Avenger implements Avenger {
  constructor(name: string, powerScore: number) {
    this.name = name
    this.powerScore = powerScore
  }

  get fullName() {
    return `${this.name}, de poder ${this.powerScore}`
  }

  set power(newPower: number) {
    if (newPower <= 100) {
      this.powerScore = newPower
    } else {
      throw new Error('Power score cannot be more than 100')
    }
  }
}

const avengers = new Avenger('Spidey', 80)
```

---

## TailwindCSS V4

### Styling with Utility Classes

Tailwind CSS funciona con un enfoque muy simple pero poderoso: **usar pequeñas clases llamadas “utilities”** para aplicar estilos directamente en tu HTML.

En lugar de escribir CSS tradicional como:

```css
.btn {
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
}
```

Y luego usarlo así:

```html
<button class="btn">Guardar</button>
```

En Tailwind lo haces directamente con **clases utilitarias** 👇

```html
<button class="bg-blue-600 text-white px-4 py-2 rounded-md">Guardar</button>
```

🎯 **Idea principal:** cada clase hace una sola cosa (color, margen, padding, tipografía, etc.), y tú las combinas para construir el diseño.

#### 🧱 Composición de clases

Las utility classes son como piezas de LEGO: las combinas para crear cualquier estilo.

Por ejemplo:

```html
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
  <h1 class="text-xl font-bold text-gray-900">Hola, mundo</h1>
  <p class="text-gray-500">Tailwind es rápido y flexible.</p>
</div>
```

👉 Aquí combinamos:

- `p-6` → padding de 1.5 rem
- `max-w-sm` → ancho máximo pequeño
- `bg-white` → fondo blanco
- `rounded-xl` → bordes redondeados grandes
- `shadow-md` → sombra media
- `space-y-4` → separación vertical entre hijos

#### 🎨 Ventajas de usar utilities

1. **Rápido de escribir y modificar**
   Cambias estilos directamente en tu HTML sin saltar entre archivos.

2. **Evitas CSS repetido**
   No necesitas inventar nombres de clases o duplicar reglas.

3. **Diseños consistentes**
   Usas siempre los mismos tamaños, colores y espaciados definidos en tu configuración de Tailwind.

#### 💡 Ejemplo práctico

Supón que quieres una **tarjeta de producto**:

```html
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
  <img class="rounded-t-lg" src="/img/juice.jpg" alt="Jugo natural" />
  <div class="p-5">
    <h5 class="text-2xl font-bold tracking-tight text-gray-900">
      Jugo Natural de Mango
    </h5>
    <p class="text-gray-700">100% fruta, sin conservantes.</p>
    <button
      class="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
      Comprar
    </button>
  </div>
</div>
```

Cada detalle del diseño (colores, tamaño, espaciado) está definido con **clases utilitarias**, sin escribir una sola línea de CSS extra.

#### 🚀 Conclusión

Tailwind CSS convierte tu HTML en un lienzo visual.
No necesitas abrir un archivo `.css`:
usas pequeñas clases para componer rápidamente cualquier diseño, desde botones simples hasta interfaces completas.

### Hover, Focus y otros estados en TailwindCSS

En TailwindCSS puedes aplicar estilos condicionales (como _hover_, _focus_, _active_, _disabled_, etc.) **usando “modificadores”** delante de las clases.
Esto te permite cambiar el diseño de un elemento **cuando ocurre una interacción del usuario**.

Por ejemplo:

```html
<button
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Guardar
</button>
```

🔹 Aquí el botón normalmente tiene `bg-blue-500`,
pero cuando pasas el mouse (_hover_) se vuelve `bg-blue-700`.

#### 🪄 Cómo funciona la sintaxis

El formato es siempre el mismo:

```
estado:clase
```

Por ejemplo:

- `hover:` → cuando el cursor pasa encima
- `focus:` → cuando el elemento está enfocado (como un input activo)
- `active:` → cuando haces clic o mantienes presionado
- `disabled:` → cuando el elemento está deshabilitado

Puedes combinar varios:

```html
<button class="bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400">
  Enviar
</button>
```

#### 🎯 Ejemplo con inputs

```html
<input
  type="text"
  placeholder="Escribe tu nombre"
  class="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md px-3 py-2" />
```

🔹 Cuando el campo tiene _focus_, el borde cambia de color y aparece un anillo sutil alrededor.

#### Estados combinados y variantes útiles

Puedes combinar **varios modificadores** para controlar comportamientos más complejos:

```html
<button
  class="bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400">
  Confirmar
</button>
```

O incluso aplicar estados **dependiendo del padre**, usando _group_:

```html
<div class="group p-4 hover:bg-gray-100 rounded-lg">
  <h2 class="text-lg font-medium group-hover:text-blue-600">
    Título del artículo
  </h2>
</div>
```

🔹 `group-hover:` permite que los elementos hijos cambien estilo cuando el padre tiene hover.

#### 🧩 Estados adicionales comunes

| Estado                            | Uso                                                 |
| :-------------------------------- | :-------------------------------------------------- |
| `focus:`                          | Cuando el usuario hace clic o navega con TAB        |
| `active:`                         | Mientras se mantiene presionado                     |
| `visited:`                        | Enlaces ya visitados                                |
| `disabled:`                       | Elementos desactivados                              |
| `checked:`                        | Checkbox o radio activado                           |
| `first:` / `last:`                | Primer o último elemento de una lista               |
| `odd:` / `even:`                  | Filas alternadas en tablas                          |
| `motion-safe:` / `motion-reduce:` | Controla animaciones según preferencias del usuario |

### 💡 Ejemplo completo: botón con varios estados

```html
<button
  class="bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:bg-gray-300 text-white font-semibold py-2 px-4 rounded"
  disabled>
  Procesando...
</button>
```

🧩 Este botón tiene:

- Color base (`bg-indigo-500`)
- Cambio de color al hover, active y focus
- Estado deshabilitado (`disabled:bg-gray-300`)

#### 🚀 Conclusión

Tailwind te permite manejar estados de interacción sin escribir CSS adicional.
Solo agregas prefijos como `hover:`, `focus:` o `active:` directamente en tu HTML.
Esto hace que tus interfaces sean **interactivas, rápidas de construir y fáciles de mantener**.

### Responsive design

Tailwind CSS facilita crear interfaces **responsivas** (que se adaptan a diferentes tamaños de pantalla) sin necesidad de media queries personalizadas.
Solo agregas **prefijos de “breakpoints”** delante de tus clases utilitarias.

#### 🧱 Cómo funciona

La idea es simple:
Cada breakpoint en Tailwind representa un tamaño mínimo de pantalla.
Cuando usas uno, la clase se aplica **a partir de ese tamaño hacia arriba**.

Por ejemplo:

```html
<div class="text-base md:text-lg lg:text-xl">Texto adaptable</div>
```

🔹 En pantallas pequeñas: `text-base`
🔹 Desde 768px (`md`): `text-lg`
🔹 Desde 1024px (`lg`): `text-xl`

#### 📏 Breakpoints predeterminados

| Prefijo | Tamaño mínimo | Ejemplo de uso  |
| :------ | :------------ | :-------------- |
| `sm:`   | 640px         | `sm:bg-red-500` |
| `md:`   | 768px         | `md:text-lg`    |
| `lg:`   | 1024px        | `lg:flex`       |
| `xl:`   | 1280px        | `xl:p-8`        |
| `2xl:`  | 1536px        | `2xl:container` |

💡 _Recuerda:_ todos los breakpoints son **“min-width”**, es decir, aplican desde ese tamaño hacia arriba.

#### 💡 Ejemplo práctico

```html
<div
  class="bg-green-300 sm:bg-yellow-300 md:bg-blue-300 lg:bg-purple-300 xl:bg-pink-300 p-4 rounded-lg text-center">
  Cambia de color según el ancho de la pantalla
</div>
```

➡️ Al reducir o ampliar la ventana, verás cómo el color de fondo cambia dependiendo del tamaño.

#### 🧩 Combinando con otras utilidades

Puedes combinar responsive con hover, focus o cualquier otro modificador:

```html
<button
  class="bg-blue-500 hover:bg-blue-700 md:bg-green-500 md:hover:bg-green-700 text-white font-semibold px-4 py-2 rounded">
  Adaptable
</button>
```

🔸 En pantallas pequeñas será azul,
🔸 En pantallas medianas o más grandes será verde.

#### ⚙️ Personalizando los breakpoints

En tu archivo `tailwind.config.js`, puedes modificar o añadir breakpoints según tus necesidades:

```js
export default {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
}
```

También puedes usar nombres personalizados:

```js
screens: {
  tablet: '640px',
  laptop: '1024px',
  desktop: '1280px',
},
```

Y luego usar:

```html
<div class="tablet:bg-yellow-200 laptop:bg-green-200 desktop:bg-blue-200">
  Ejemplo personalizado
</div>
```

#### 🧠 Consejo práctico

Tailwind te anima a **diseñar primero para móviles** (mobile-first).
Esto significa que escribes tus estilos base sin prefijos, y luego usas `sm:`, `md:`, `lg:`... para ir adaptando progresivamente a pantallas más grandes.

Ejemplo:

```html
<p class="text-sm md:text-base lg:text-lg xl:text-xl">
  Diseño mobile-first en acción
</p>
```

#### 🚀 Conclusión

Con los breakpoints de Tailwind puedes crear diseños responsivos **rápidos y consistentes**, sin escribir media queries manuales.
Simplemente agrega prefijos como `md:` o `lg:` delante de cualquier clase, y tu diseño se ajustará automáticamente al tamaño de pantalla.

### Dark mode

Tailwind te deja estilizar una versión oscura de tu sitio usando la **variant** `dark:`. La idea es simple: **prefijas** cualquier utility con `dark:` para cambiar su estilo cuando el tema oscuro esté activo. ([tailwindcss.com][1])

#### 🧠 Qué es y cómo se usa

Aplica `dark:` delante de cualquier clase:

```html
<div
  class="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 rounded-lg p-6">
  Hola en light 🌞 / dark 🌚
</div>
```

> Tailwind incluye la variant `dark` para estilizar distinto cuando el dark mode está habilitado. ([tailwindcss.com][1])

#### ⚙️ Comportamiento por defecto (system preference)

Por defecto, `dark:` se activa según la preferencia del sistema usando `prefers-color-scheme`. No necesitas configurar nada para eso. ([tailwindcss.com][1])

#### 🔀 Toggle manual con clase `.dark`

Si quieres controlar el tema con una **clase** (por ejemplo, un switch), redefine la variant con `@custom-variant` y usa `.dark` en el árbol superior:

```css
/* app.css */
@import 'tailwindcss';
@custom-variant dark (&:where(.dark, .dark *));
```

```html
<html class="dark">
  <body>
    <div class="bg-white dark:bg-black">...</div>
  </body>
</html>
```

```js
// Ejemplo mínimo para alternar y recordar la preferencia
const root = document.documentElement
const set = m => (
  root.classList.toggle('dark', m === 'dark'),
  (localStorage.theme = m)
)
set(
  localStorage.theme ??
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
)
// Llama set('light') o set('dark') desde tu UI
```

> Con `@custom-variant` puedes hacer que `dark:*` dependa de una clase en vez de la media query, y manejar esa clase con JavaScript/`localStorage`. ([tailwindcss.com][1])

#### 🏷️ Alternativa con `data-attribute`

¿Prefieres atributos? Usa `data-theme="dark"`:

```css
/* app.css */
@import 'tailwindcss';
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
```

```html
<html data-theme="dark">
  <body>
    <div class="bg-white dark:bg-black">...</div>
  </body>
</html>
```

> La variant `dark` también puede activarse con un selector de atributo. ([tailwindcss.com][1])

#### 🖥️ Soportar 3 modos: Light / Dark / System

Para un selector con tres opciones (incluido “System”), sincroniza con `matchMedia`:

```js
// En el <head> o al inicio para evitar FOUC
const root = document.documentElement
function apply() {
  const sysDark = matchMedia('(prefers-color-scheme: dark)').matches
  const pref = localStorage.theme // 'light' | 'dark' | undefined => system
  root.classList.toggle('dark', pref === 'dark' || (pref == null && sysDark))
}
apply()
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', apply)

// setear desde la UI:
const setTheme = m => (
  m ? (localStorage.theme = m) : localStorage.removeItem('theme'),
  apply()
)
// setTheme('light') | setTheme('dark') | setTheme() => system
```

> La doc muestra este patrón para respetar el sistema y permitir override manual. ([tailwindcss.com][1])

#### 🧩 Tips prácticos

- **Mobile-first** igual aplica aquí: define estilos base y luego añade `dark:` donde toque.
- Puedes declarar **tokens** con `@theme` y reutilizarlos en ambos modos (útil para paletas). ([tailwindcss.com][2])
- Considera usar la utility `color-scheme` para que el navegador ajuste UI nativa (scrollbars, formularios):

  ```html
  <html class="scheme-light dark:scheme-dark"></html>
  ```

  ([tailwindcss.com][3])

#### 🧪 Snippets rápidos

**Botón**

```html
<button
  class="bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded px-4 py-2">
  Guardar
</button>
```

**Card**

```html
<article
  class="bg-white text-gray-900 shadow rounded-lg p-6
                dark:bg-gray-900 dark:text-gray-100 dark:shadow-none">
  <h3 class="text-lg font-semibold">Reporte</h3>
  <p class="text-gray-600 dark:text-gray-300">Resumen semanal.</p>
</article>
```

**Tabla (zebra)**

```html
<table class="w-full text-sm">
  <tbody>
    <tr
      class="odd:bg-gray-50 even:bg-white dark:odd:bg-gray-800 dark:even:bg-gray-900">
      <td class="p-3">Fila 1</td>
    </tr>
    <tr
      class="odd:bg-gray-50 even:bg-white dark:odd:bg-gray-800 dark:even:bg-gray-900">
      <td class="p-3">Fila 2</td>
    </tr>
  </tbody>
</table>
```

> Referencias oficiales: Dark mode (v4.1), `@custom-variant` con `.dark` y `data-theme`, y patrón con `matchMedia`. ([tailwindcss.com][1])

[1]: https://tailwindcss.com/docs/dark-mode 'Dark mode - Core concepts - Tailwind CSS'
[2]: https://tailwindcss.com/docs/theme?utm_source=chatgpt.com 'Theme variables - Core concepts'
[3]: https://tailwindcss.com/docs/color-scheme?utm_source=chatgpt.com 'color-scheme - Interactivity'

### Theme variables

#### 🧠 Qué son y para qué sirven

**Theme variables** son **CSS variables especiales** que defines con `@theme` y que **generan utilities** nuevas en tu proyecto. Por ejemplo, si declaras un color `--color-mint-500`, obtienes `bg-mint-500`, `text-mint-500`, etc. Además, Tailwind expone estas variables como **CSS variables normales** para usarlas en estilos inline o en tu propio CSS. ([tailwindcss.com][1])

```css
/* app.css */
@import 'tailwindcss';

@theme {
  --color-mint-500: oklch(0.72 0.11 178);
}
```

```html
<div class="bg-mint-500 text-white">Card</div>
<div style="background-color: var(--color-mint-500)">Inline</div>
```

#### 🔎 Por qué `@theme` y no `:root`

`@theme` no solo define variables: **instruye a Tailwind** para crear las **utilities** correspondientes. Úsalo cuando quieras que un token mapee a una utility; usa `:root` solo para variables que **no** deben generar utilities. ([tailwindcss.com][1])

#### 🧩 Relación con utilities y variants

Muchísimas utilities dependen de **theme variables** (p. ej., fuentes, sombras, colores). Si defines `--font-poppins`, aparece la utility `font-poppins`. Algunas variables definen **variants** como los **breakpoints** (`--breakpoint-*`), lo que habilita prefijos como `3xl:*`. ([tailwindcss.com][1])

```css
@theme {
  --font-poppins: Poppins, sans-serif;
  --breakpoint-3xl: 120rem;
}
```

```html
<h1 class="font-poppins">Encabezado</h1>
<div class="grid grid-cols-2 md:grid-cols-4 3xl:grid-cols-6">...</div>
```

#### 🗂️ Namespaces más comunes (mapa rápido)

Cada **namespace** genera APIs distintas:

- `--color-*` → `bg-…`, `text-…`, etc.
- `--font-*` → `font-sans`, `font-mono`, etc.
- `--text-*` → tamaños `text-sm`, `text-xl`, …
- `--font-weight-*` → pesos `font-semibold`, …
- `--tracking-*`, `--leading-*` → `tracking-*`, `leading-*`
- `--breakpoint-*` → variants responsivas `sm:*`, `md:*`, …
- `--spacing-*`, `--radius-*`, `--shadow-*`, `--drop-shadow-*`, `--blur-*`, `--ease-*`, `--animate-*`, `--aspect-*`, `--container-*`, `--perspective-*`
  Consulta la referencia para la lista completa. ([tailwindcss.com][1])

#### 🧱 Extender el theme (extend)

Puedes **añadir** tokens sin tocar los existentes: ([tailwindcss.com][1])

```css
@import 'tailwindcss';
@theme {
  --font-script: 'Great Vibes', cursive;
}
```

```html
<p class="font-script">Texto bonito</p>
```

#### 🧨 Sobrescribir valores (override)

Redefine cualquier token por nombre, p. ej., cambiar `sm` a `30rem`: ([tailwindcss.com][1])

```css
@theme {
  --breakpoint-sm: 30rem;
}
```

Para **reemplazar todo un namespace**, ponlo en `initial` y define tus tokens (elimina los defaults como `bg-red-500`): ([tailwindcss.com][1])

```css
@theme {
  --color-*: initial;
  --color-midnight: #121063;
  --color-tahiti: #3ab7bf;
}
```

#### 🧼 Theme 100% propio (sin defaults)

Si quieres **solo** tus tokens, resetea todo con `--*: initial` y define lo necesario (espaciados, fuentes, colores, etc.). ([tailwindcss.com][1])

```css
@theme {
  --*: initial;
  --spacing: 4px;
  --font-body: Inter, sans-serif;
  --color-dusk: oklch(0.82 0.15 72.09);
}
```

#### 🎞️ Animations y keyframes

Para `--animate-*`, declara también los `@keyframes` dentro de `@theme` para incluirlos en el build. ([tailwindcss.com][1])

```css
@theme {
  --animate-fade-in-scale: fade-in-scale 0.3s ease-out;
  @keyframes fade-in-scale {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
}
```

#### 🔗 Referenciar otras variables (`inline`)

Si un token depende de otro, usa `@theme inline` para que la **utility** emita el valor **resuelto** (evita sorpresas por el _scope_ de CSS variables). ([tailwindcss.com][1])

```css
@theme inline {
  --font-sans: var(--font-inter);
}
```

#### 📦 Generar todas las variables (`static`)

Por defecto, solo se generan las CSS variables **usadas**. Si quieres **todas** siempre, usa `@theme static`. ([tailwindcss.com][1])

```css
@theme static {
  --color-primary: var(--color-red-500);
  --color-secondary: var(--color-blue-500);
}
```

#### 🔁 Compartir un theme entre proyectos

Guarda tu theme en un CSS aparte y **reúsalo con `@import`** en otros paquetes/proyectos (ideal para monorepos o publicar en NPM). ([tailwindcss.com][1])

```css
/* packages/brand/theme.css */
@theme {
  --*: initial;
  --spacing: 4px;
  --font-body: Inter, sans-serif;
  --color-lagoon: oklch(0.72 0.11 221.19);
}
```

```css
/* packages/admin/app.css */
@import 'tailwindcss';
@import '../brand/theme.css';
```

#### 🛠️ Usar tus tokens fuera de utilities

**En tu CSS propio** (`@layer components`) puedes leer tokens con `var(--…)`. También puedes usarlos en **arbitrary values** (`[...]`) y desde **JavaScript** vía `getComputedStyle`. ([tailwindcss.com][1])

```css
@layer components {
  .prose {
    p {
      font-size: var(--text-base);
      color: var(--color-gray-700);
    }
    h1 {
      font-size: var(--text-2xl--line-height);
      font-weight: var(--font-weight-semibold);
    }
  }
}
```

```html
<div class="rounded-[calc(var(--radius-xl)-1px)]">Borde concéntrico</div>
```

```js
const styles = getComputedStyle(document.documentElement)
const shadow = styles.getPropertyValue('--shadow-xl')
```

#### ⚡ Mini-guía express

1. Declara tokens con `@theme`. 2) Usa **utilities** generadas automáticamente.
2. Para relaciones entre tokens, usa `@theme inline`.
3. Si necesitas _build_ completo de variables, `@theme static`.
4. Comparte tu theme con `@import` cuando trabajes multi-proyecto. ([tailwindcss.com][1])

> Base oficial: **Theme variables** en Tailwind v4 (namespaces, overrides, inline/static y reuso). ([tailwindcss.com][1])

[1]: https://tailwindcss.com/docs/theme 'Theme variables - Core concepts - Tailwind CSS'

### Diferencia entre `@theme` y `@theme inline`

#### Qué hace `@theme`

- **Define tokens** (CSS variables) y **genera utilities** que usan `var(--token)` en el CSS final.
- El valor se **resuelve en runtime** (tiempo de ejecución del navegador), así que **puedes override** esos tokens más tarde (por ejemplo, en `.dark` o `[data-theme=…]`) y **todas** las utilities que dependan de esos tokens **cambian automáticamente**.
- Úsalo cuando quieras **temear** (light/dark, marcas, campuses) o permitir **scope/cascade** dinámico.

```css
@import 'tailwindcss';

@theme {
  --color-brand: var(--color-blue-600);
  --color-blue-600: oklch(0.64 0.16 264);
}

/* En otro lugar (p. ej. dark mode): */
.dark {
  --color-blue-600: oklch(
    0.58 0.16 264
  ); /* cambia el azul ⇒ brand cambia también */
}
```

```html
<button class="bg-brand text-white px-4 py-2 rounded">Comprar</button>
<!-- compila a background-color: var(--color-brand); -->
```

**Resultado:** `bg-brand` seguirá lo que valga `--color-blue-600` **en ese contexto** (light/dark, overrides locales, etc.).

#### Qué hace `@theme inline`

- También define tokens, pero al generar utilities **inserta el valor “final” directamente** (sin `var(...)`), es decir, **resuelve/“aplana”** los alias **en build time**.
- El valor queda **estático** en el CSS generado. Si luego haces un override de variables, **esas utilities no cambian**.
- Úsalo cuando quieras **congelar** un token (evitar que herede cambios posteriores), o cuando busques **evitar sorpresas de scope** por CSS variables.

```css
@import 'tailwindcss';

@theme {
  --color-blue-600: oklch(0.64 0.16 264);
}
@theme inline {
  --color-brand: var(--color-blue-600); /* se “aplana” en build */
}

/* Más tarde intentas override: */
.dark {
  --color-blue-600: oklch(0.58 0.16 264);
}
```

```html
<button class="bg-brand text-white px-4 py-2 rounded">Comprar</button>
<!-- compila a background-color: oklch(0.64 0.16 264); (valor fijo) -->
```

**Resultado:** `bg-brand` **no** cambia en dark mode, porque el valor quedó embebido.

#### Cuándo usar cada uno (regla rápida)

- **`@theme` (runtime, con `var(...)`)** → cuando quieres **temas dinámicos**, soportar **overrides** (dark mode, multibrand), y beneficiarte del **scope** de CSS variables.
- **`@theme inline` (build time, valor fijo)** → cuando quieres **alias inmutables**, evitar efectos del **cascade** o empaquetar un **design system** con valores ya resueltos (sin depender del host).

#### Mini-resumen en una frase

- `@theme` = **dinámico** (utilities referencian `var(--token)` → reacciona a overrides).
- `@theme inline` = **estático** (utilities llevan el **valor final** → no reacciona a overrides).

---
