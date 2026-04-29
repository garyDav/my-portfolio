---
title: React Native + Expo
author: Ing. Gary Guzmán
img: react-native/banner-curso.webp
description: Utilizaremos React Native con Expo para desarrollar aplicaciones móviles multiplataforma, aprovechando las ventajas de ambas tecnologías.
readtime: 60
---

#### ©️ Por: Ing. Gary Guzmán

###### [📃 Todos](https://garydav.github.io/blogs-course) mis resúmenes por [@garyDav](https://github.com/garyDav)

> 🗓️ Publicado, 08 de Abril del 2026

---

#### Contenido de la materia

1. [**Instalaciones necesarias**](#instalaciones-necesarias)

2. [**Antes de empezar**](#antes-de-empezar)

3. [**Fundamentos de JavaScript**](#fundamentos-de-javascript)

4. [**Call Stack**](#callstack-pila-de-ejecución)

5. [**Tipos de Datos**](#tipos-de-datos-primitivos)

6. [**Use Strict**](#use-strict)

---

## Instalaciones necesarias

[Docs React Native](https://reactnative.dev/)
[Docs Expo](https://docs.expo.dev/)

# React Native - Expo

Esta es la lista de instalaciones recomendadas para el curso de React Native, si encuentran enlaces adicionales o cambios en esta hoja, pueden hacerlos.

## Instalaciones Necesarias

- [Visual Studio Code](https://code.visualstudio.com/)

- [Perfil VS-Code](https://ggary.dev/shared/vscode-ext.code-profile)

- [Postman](https://www.postman.com/downloads/)

- [Git](https://git-scm.com/)

```
git config --global user.name "Tu nombre"
git config --global user.email "Tu correo"
```

- [Node](https://nodejs.org/es/)

- [Android Studio](https://developer.android.com/studio)

- [XCode - SOLO en MAC OSX](https://apps.apple.com/ca/app/xcode/id497799835)

- Expo Go
  - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
  - [IOS](https://apps.apple.com/us/app/expo-go/id982107779)

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## Extensiones de VSCode

- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

- [ES7 React/Redux](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

- [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)

- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

- [Paste JSON as Code](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype)

- [Tailwind CSS InteliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

- [Colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize)

### Temas que estoy usando en VSCode:

- [Tokyo Night](https://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night)

- [Iconos - Bearded Icons](https://marketplace.visualstudio.com/items?itemName=BeardedBear.beardedicons)

---

## Antes de empezar

[Programemos juntos](https://prod.liveshare.vsengsaas.visualstudio.com/join?747E8A25E7BFE8D2B48E68A1325939EAE485)

### Configurar Terminal de Windows

[Tutorial](https://www.youtube.com/watch?v=5-aK2_WwrmM) solo hasta el minuto `5:40`

[Descargar fuentes](https://github.com/garyDav/dev-matrix/tree/master/windows)

```bash
# Abrir Windows PowerShell
# Click derecho nueva pestaña -> Settings -> Default terminal application: Cambiar a Windows Terminal -> Save
# Click en el pincel "Appearance" -> Activar: Show acrylic in tab row -> Save
# Cerrar terminal y volver Abrir
# Nueva pestaña - Flecha abajo -> Settings
# Click en icono Cuadraditos "Defaults" -> Appearance -> Color Scheme -> One Half Dark <-> también: Font face -> Hack NF o Firacode o la que prefieras de Nerd Fonts. Por último <-> Activar Acrylic "On" <-> Acrylic opacity 50%
# Desde Microsoft Store -> Instalar: PowerShell
# en Settings -> Default profile -> PowerShell -> Save
# en Settings -> Click en settings.json, buscar "one half dark", mas o menos linea 141, copiar y pegar todo el objeto, cambiar el name por "One Half Dark (modded)", cambiar el background a "#001B26", guardar archivo.
# en Settings -> "Defaults" -> Appearance -> Text "Color scheme" -> One Half Dark (modded) -> Save
```

### Instalar WSL2

```bash
wsl --install
# Rebooted (Reiniciar Windows)
# Buscar Ubuntu e ingresar, Si existe error:
# Panel de Control -> Apps -> Programas and Features -> Turn Windows features on or off
# Activar: Windows Subsystem for Linux
# Activar: Hyper-V -> Hyper-V Platform
# Volver abrir Powershell como administrador
wsl --update

# Convertir WSL1 a WSL2
wsl --list
wsl --list --verbose # Saber si la distro usa WSL1 o WSL2
# Convertir WSL1 a WSL2
wsl --set-version Ubuntu 2
# Indicar que las distros utilicen WSL2
wsl --set-default-version 2

wsl # Entrar a la distribución predeterminada
```

### Configuración básica de Ubuntu

```bash
wsl # Ingresar a WSL2
sudo apt update
sudo apt upgrade

# Instalar Fish Shell
# https://launchpad.net/~fish-shell/+archive/ubuntu/release-3/+packages
sudo apt install fish
sudo chsh -s /usr/bin/fish
chsh -s /usr/bin/fish
fish -v # fish, version 3.1.0
# Actualizar Fish Shell
sudo apt-add-repository ppa:fish-shell/release-4
sudo apt-get update
sudo apt-get install fish
fish -v # fish, version 4.3.3
fish #Cambiar de terminal a fish

# Instalar FISHER
curl -sL https://git.io/fisher | source && fisher install jorgebucaran/fisher
fisher update jorgebucaran/fisher
fisher -v # Ver en que versión estamos de fisher

# Instalar NVM:
fisher install jorgebucaran/nvm.fish
nvm list-remote
nvm install v16.13.0
nvm use v12.9.1 # En caso de instalar esta versión
set --universal nvm_default_version v16.19.1 # Vesion para Instalar todo NVIM

# Instalar PNPM
corepack enable
pnpm bin -g
pnpm setup
ls ~/.local/share/pnpm
set -g PNPM_HOME ~/.local/share/pnpm
set -gx PATH $PNPM_HOME $PATH
```

### Configuración avanzada de Ubuntu

Requisito realizar la anterior configuración.

```bash
# Instalar TIDE (themplate fisher) puedes utilizar el script de la página oficial
# https://github.com/IlanCosman/tide
# Recomendado de forma manual:
set -l _tide_tmp_dir (command mktemp -d)
curl https://codeload.github.com/ilancosman/tide/tar.gz/HEAD | tar -xzC $_tide_tmp_dir
command cp -R $_tide_tmp_dir/tide-HEAD/{completions,conf.d,functions} $__fish_config_dir
exec fish --init-command "set -g fish_greeting; emit _tide_init_install"

# Instalar fonts and icons:
# Nerd fonts:
mkdir -p ~/.local/share/fonts
cd ~/.local/share/fonts && curl -fLo "Droid Sans Mono for Powerline Nerd Font Complete.otf" https://github.com/ryanoasis/nerd-fonts/raw/master/patched-fonts/DroidSansMono/complete/Droid%20Sans%20Mono%20Nerd%20Font%20Complete.otf
sudo apt install fonts-firacode

# Instalar PNPM
corepack enable
pnpm bin -g
pnpm setup
ls ~/.local/share/pnpm
set -g PNPM_HOME ~/.local/share/pnpm
set -gx PATH $PNPM_HOME $PATH
sudo apt install -y build-essential # Instalar C++ para GYP
sudo apt install g++-12 # para node v24.12.0
export CXXFLAGS="--std=c++20"

# Instalar tree-sitter
pnpm add -g tree-sitter tree-sitter-cli
pnpm rebuild -g tree-sitter # En caso de error volver a construir

# Instalar Diagnostic Language Server
pnpm add -g diagnostic-languageserver

# Install Luajit:
sudo apt install luajit

# Instalar z for fish:
fisher install jethrokuan/z

# Instalar EXA:
wget https://github.com/ogham/exa/releases/download/v0.10.0/exa-linux-x86_64-v0.10.0.zip
unzip exa-linux-x86_64-v0.10.0.zip
cd bin/
sudo cp exa /usr/local/bin/
rm -R bin/
rm -R completions/
rm -R man/
rm exa-linux-x86_64-v0.10.0.zip
abbr -a ll exa --long --header --git # Opcional

# Instalar GO:
wget https://go.dev/dl/go1.23.0.linux-amd64.tar.gz
sudo tar -xvf go1.23.0.linux-amd64.tar.gz
sudo mv go /usr/local
fish_add_path /usr/local/go/bin
go version
sudo rm -R go1.23.0.linux-amd64.tar.gz

# Instalar GHQ:
## Directo con GO
go install github.com/x-motemen/ghq@latest
## build
git clone https://github.com/x-motemen/ghq .ghq
cd .ghq
sudo apt install make
make install
cd ~/go/bin/
chmod +x ghq
sudo mv ghq /usr/local/bin/
cd
rm -R .ghq

# Instalar PECO:
sudo apt install peco

# Instalar ripgrep
sudo apt install ripgrep
```

### Usar PNPM

Habilitando una característica que ya viene con `npm`, ejecutar: `corepack enable`, para actualizar a la última versión: `corepack prepare pnpm@latest --activate`

```fish
cd project
pnpm init # Iniciar el proyecto.
pnpm add <dependencies> # No descarga todo, viene enlazada de otra ubicación.
pnpm-lock.yaml # Se crea este archivo, para las subdependencias.
pnpm add -D <devDependencies> # Instalar las dependencias de desarrollo, las salidas de la consola incluso te indica lo que podría faltar.
pnpm add <@dep/cli> -g # Instalar dependencias globalmente.
pnpm setup # Si obtenemos un error con el comando anterior, ejecutar este.
pnpm install ó pnpm i # Instalar y/o enlazar las dependencias.
pnpm remove <dependencies> # Quitar dependencias de package.json y node_modules.
pnpm exec tsc --init # Ejecutar cli si está instalado localmente, es como npx.
pnpm dlx create-react-app client # Ejecutar un módulo sin la necesidad de instalarlo globalmente.
pnpm create vite # Ejecutar un módulo sin la necesidad de instalarlo.
# Si instalamos de forma común `npm install` crea el archivo package-lock.json, podemos convertir a pnpm-lock.yaml con: `pnpm import`
```

### Para mas información

https://pnpm.io

#### Instalación de proyecto React con Vite

```bash
pnpm create vite

◇  Project name:
│  bases
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript + React Compiler
│
◇  Install with pnpm and start now?
│  Yes
│
◇  Scaffolding project in...
│
◇  Installing dependencies with pnpm...
```

#### Renombrar carpeta

```bash
mv bases 01-bases
```

#### Ejecutar el proyecto

```bash
cd 01-bases
pnpm install
pnpm run dev
```

#### Recomendaciones

- Si están en vscode ejecuten Shift + Command + P escriban `code` y seleccionen `Shell Command: Install... PATH`

- En vscode -> Settings -> Format on Save -> true

#### Empezar a escribir código

Quiten todo el código que biene por defecto en `./src/App.tsx` y las importaciones innecesarias.

---

## Fundamentos de JavaScript

### Variables

En JavaScript, las variables pueden guardar cualquier tipo de dato. El tipo se asigna automáticamente según el valor que le pongas.

- Los nombres pueden tener letras, números, `$` y `_`, pero **no pueden empezar con números**.
- Se **declaran** con `var`, `let` o `const`, por ejemplo:

```js
var a;
var b, c, d;

let name, lastName;

const FECHA_CINE = '20-08-2025';
```

- Luego puedes **asignarles** valores:

```js
a = 4.23; // número decimal
b = 'Javascript'; // texto
c = 125; // número entero
d = [1, 2, 3, 4]; // arreglo
```

- También puedes **declarar** y **asignar** en una sola línea:

```js
var a = 4.23,
  b = 'Javascript',
  c = 125,
  d = [1, 2, 3, 4];
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
++x; // primero incrementa, luego usa el valor
x++; // primero usa el valor, luego incrementa
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
r = condición ? valor_si_verdadero : valor_si_falso;
```

Ejemplo:

```js
let mensaje = edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
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
} while (condición);
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
  console.log(i);
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
  if (i === 3) break;
  console.log(i); // imprime 0, 1, 2
}
```

### 🔁 1.6.12. Ciclos infinitos

Un ciclo infinito suele indicar que algo salió mal: una condición que nunca se vuelve falsa. Pero a veces, por lógica del problema, **necesitamos salir del ciclo desde algún punto intermedio**, no al inicio ni al final. En esos casos, se puede crear un ciclo infinito a propósito usando `true` como condición, y luego salir con `break`.

#### Ejemplo con `while`:

```js
while (true) {
  // instrucciones antes de evaluar
  if (condición) break;
  // instrucciones después
}
```

#### También se puede hacer con `do-while`:

```js
do {
  // instrucciones antes
  if (condición) break;
  // instrucciones después
} while (true);
```

#### O con `for` sin parámetros:

```js
for (;;) {
  // instrucciones
  if (condición) break;
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
  return resultado;
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
};
```

O más comúnmente, como función anónima:

```js
var alias = function (parámetros) {
  // instrucciones
};
```

> Puedes llamar a la función usando el nombre de la variable (`alias`). El nombre interno (`nombreOpcional`) suele omitirse.

#### 🧠 Forma dinámica (constructor `Function`)

Esta forma permite crear funciones en tiempo de ejecución:

```js
var f = new Function("par1", "par2", ..., "código JS");
```

Ejemplo:

```js
var suma = new Function('a', 'b', 'return a + b;');
```

> Estas funciones **siempre son globales** y no se usan muy seguido. Son útiles en casos muy específicos donde el código se genera dinámicamente.

#### 🔄 Funciones anidadas

En JavaScript (a diferencia de C), **sí puedes crear funciones dentro de otras funciones**:

```js
function externa() {
  function interna() {
    // lógica interna
  }
  interna();
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

  console.log(`🧍‍♂️ El jugador ${nombre} se está escondiendo...`);
};

function conteoRegresivo(num) {
  if (num <= 0) {
    console.log('🕵️‍♂️ ¡Listos o no, allá voy!');
    return;
  }

  console.log(`⏳ ${num}`);
  conteoRegresivo(num - 1);
}

function buscando() {
  console.log('👀 Buscando a los jugadores escondidos...');
  console.log('🚶‍♂️ Caminando por el parque...');
  console.log('😮 ¡Encontrado detrás del árbol! 🌳');
  console.log('🏁 Fin del juego.');
}

function jugarEscondidas() {
  ocultarJugador('Juan');
  ocultarJugador('Pepito');
  ocultarJugador('María'); // [2]

  conteoRegresivo(10); // [3]
  buscando(); // [4]
}

console.log('🎮 ¡Vamos a jugar a las escondidas!');
jugarEscondidas(); // breakpoint
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
var texto = 'Cocina';
texto[0] = 'B';

console.log(texto); // 'Cocina'

// La única manera de modificar una variable es asignándole un nuevo valor
texto = 'Bocina';
console.log(texto); // 'Bocina'
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
var edad = 30;
edad.toString(); // "30"

// ó

edad + ''; // "30"
```

Pero cuidado si utilizamos el método `toString()`, debemos asegurarnos que la variable no sea `null` o `undefined`, ya que esto generará un error.

#### 🔢 Números

Los números en JavaScript son de tipo `number`, y pueden ser enteros positivos o negativos y también decimales. JavaScript utiliza el estándar IEEE 754 para representar números de punto flotante.

```js
var entero = 42;
var negativo = -7;
var decimal = 3.14;

0 === -0; // true, ambos son considerados iguales
```

> 👀 **Nota**: En JavaScript, al momento de representar números decimales no es muy preciso.

```js
0.1 +
  0.2(
    // 0.30000000000000004
    0.1 + 0.2
  ).toFixed(100); // 😩
```

En `Rubi`, `Python`, y en `Java` pasa lo mismo, esto tiene que ver como están diseñado los números dentro del lenguaje, en estos lenguajes se utiliza un formato llamdo **IEEE 754**, en este formato cáda número ocupa 64 bits en la memoria (8 Bytes).

```js
var numero = +(0.1 + 0.2).toFixed(2); // 😄
var numeroMinimo = -(2 ** 53) + 1;
var numeroMaximo = 2 ** 53 - 1;
```

#### 🧠 ¿Qué significa “operador unario”?

Un operador unario actúa sobre **un solo operando**. En este caso:

```js
typeof 'Hola'; // "string"
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
let x = 10;
console.log(typeof x); // "number"

if (typeof x === 'string') {
  console.log('Es una cadena');
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
let resultado = '5' + 5; // "55"
```

JavaScript convierte el número `5` en cadena `"5"` y concatena.

```js
let resultado = '5' - 1; // 4
```

Aquí convierte `"5"` en número y realiza la resta.

#### 🔸 Coerción explícita

```js
let numero = Number('42'); // 42
let texto = String(100); // "100"
let booleano = Boolean(0); // false
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
(false, 0, '', null, undefined, NaN);

// Todo lo demás es truthy
(true, '0', [], {}, function () {}, Infinity);
```

---

## Use Strict

#### ¿Que es Use Strict?

Es una instrucción dirigida al **intérprete** de JavaScript. Le indica que el código que sigue a continuación está en "**Modo estricto**", cambiando la manera en que se ejecutan algunas instrucciones.

En éste modo estámos más restringidos, no podemos realizar ciertas acciones que en el modo normal sí se permiten. El objetivo de éste modo es **hacer el código más seguro y evitar errores comunes**.

Si intentamos realizar lo siguiente:

```js
'use strict';

nombre = 'Juan'; // Error: nombre no está definido
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
let nombre = 'Gary';
let edad = 30;

if (edad > 20) {
  nmbre = 'Pepito';
}

// Se agragará una variable global llamada nmbre
// Y como propiedad del objeto global
// window.nmbre = 'Pepito'
```

En modo estricto veremos un error de referencia por consola.

```js
'use strict';
let nombre = 'Gary';
let edad = 30;

if (edad > 20) {
  nmbre = 'Pepito'; // Error: nmbre is not defined
}
```

2. Los atributos de sólo lectura.

```js
const estudiante = {};

Object.defineProperty(estudiante, 'nombre', {
  value: 'Pepito',
  writable: false, // No se puede modificar
});

estudiante.nombre = 'Juan';
console.log(estudiante.nombre); // Pepito
```

Seguimos teniendo el mismo valor pero 👁️ en modo estricto veremos un error de tipo por consola.

```js
'use strict';
const estudiante = {};
Object.defineProperty(estudiante, 'nombre', {
  value: 'Pepito',
  writable: false, // No se puede modificar
});
estudiante.nombre = 'Juan'; // ❌ Error: Cannot assign to read only property 'nombre' of object '#<Object>'
console.log(estudiante.nombre); // Pepito
```

3. Objetos no extendibles.

Algo similar sucede con los objetos no extendibles.

```js
const estudiante = {};
Object.preventExtensions(estudiante); // No se pueden agregar nuevas propiedades
estudiante.nombre = 'Pepito'; // No se puede agregar
console.log(estudiante.nombre); // undefined
```

En modo estricto veremos un error de tipo por consola.

```js
'use strict';
const estudiante = {};
Object.preventExtensions(estudiante); // No se pueden agregar nuevas propiedades
estudiante.nombre = 'Pepito'; // ❌ Error: Cannot add property nombre, object is not extensible
console.log(estudiante.nombre); // undefined
```

4. Variables primitivas.

```js
let nombre = 'Pepito';
nombre.edad = 30; // No se puede agregar propiedades a una cadena de texto
console.log(nombre.edad); // undefined
```

En modo estricto veremos un error de tipo por consola.

```js
'use strict';
let nombre = 'Pepito';
nombre.edad = 30; // ❌ Error: Cannot create property 'edad' on string 'Pepito'
console.log(nombre.edad); // undefined
```

5. No podemos tener **Parámetros duplicados en una función**

```js
function saludar(nombre, apellido, nombre) {
  console.log(`Hola ${nombre} ${apellido}`);
}
saludar('Juan', 'Pérez'); // Hola undefined Pérez
```

En modo estricto veremos un error de sintaxis por consola.

```js
'use strict';
function saludar(nombre, apellido, nombre) {
  // ❌ SyntaxError: Duplicate parameter names not allowed in this context
  console.log(`Hola ${nombre} ${apellido}`);
}

// Veremos incluso el error antes de invocar a la función
```

6. Sistema octal

El sistema octal es el sistema de números con base 8. En él podemos representar cualquier número con **dígitos del 0 al 7**.

```js
console.log(011); // 1 + 1 * 8 = 9
console.log(023); // 3 + 2 * 8 = 19
```

En modo estricto veremos un error de sintaxis por consola.

```js
'use strict'
console.log(011) // ❌ SyntaxError: Octal literals are not allowed in strict mode.
...
```

Desde ES6 podemos usar el prefijo `0o` para representar números en base octal.

```js
console.log(0o11); // 1 + 1 * 8 = 9
console.log(0o23); // 3 + 2 * 8 = 19
```

7. Arreglamos errores silenciosos con el operador `delete`

El operador `delete` se utiliza para eliminar **propiedades de un objeto** o **elementos de un array** devolviéndonos `true` o `false` si se eliminó o no.

```js
function saludar() {
  console.log('Hola');
}

const nombre = 'Pepito';

delete nombre; // No se puede eliminar una variable
delete saludar; // No se puede eliminar una función
delete window; // No se puede eliminar el objeto global
```

En modo estricto cualquiera de las instrucciones anteriores nos daría error si intentamos ejecutarlas.

```js
'use strict';
function saludar() {
  console.log('Hola');
}
const nombre = 'Pepito';

delete nombre; // ❌ Error: Delete of an unqualified identifier in strict mode.
delete saludar; // ❌ Error: Delete of an unqualified identifier in strict mode.
delete window; // ❌ Error: Delete of an unqualified identifier in strict mode.
```

8. `arguments` y `eval` son keywords reservados (palabras reservadas)

```js
'use strict';
let arguments = 'Hola'; // ❌ Error: Unexpected eval or arguments in strict mode
let eval = 123; // ❌ Error: Unexpected eval or arguments in strict mode
```

9. `with` no está permitido

El bloque `with` sirve para **extender la cadena de scopes** en JavaScript temporalmente.

Se usaba cuando teníamos que poner varias variables a un objeto que estaba muy anidado dentro de otro.

```js
with (document.forms[0]) {
  email.value = '';
  password.value = '';
}
```

Para no tener que repetir tanto código.

```js
// with (document.forms[0]) {
document.forms[0].email.value = '';
document.forms[0].password.value = '';
// }
```

Antes de ejecutar nuestro programa el **intérprete de JavaScript** lo analiza y arma **_la cadena de scopes_** sabiendo exáctamente a que lugar del código tiene que ir a buscar cada variable cuando la queremos usar.

De esta manera el motor de JavaScript puede ejecutarlo mucho mas rápido, pero como ésto depende de un objeto `document.forms[0]` que puede cambiar, el intérprete de JavaScript no puede saber a que lugar va a tener que buscar cada variable, antes de ejecutar el programa. La búsqueda la tendrá que hacer cuando se esté **ejecutando el programa**, no lo va a poder optimizar de antemano.

Por eso no está permitido utilizar `with` en modo estricto, para no perder ésa optimización.

De todas maneras esto lo podemos realizar guardando una referencia al objeto antes.

```js
const form = document.forms[0];
form.email.value = '';
form.password.value = '';
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
'use strict';
let package = 'paquete 1'; // ❌ Error: SyntaxError: Unexpected strict mode reserved word
// Incluso en la actualidad aunque package no se utiliza para nada en el lenguaje
```

> 👀 Funciones libres (sin dueños)

```js
const estudiante = {
  nombre: 'Pepito',
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}`);
  },
};

estudiante.saludar(); // `estudiante` es -> `this`

// Si copiamos una referencia de la función a otra variable
const saludar = estudiante.saludar;
saludar(); // Pasa al objeto global `window.saludar()`, `window` -> `this`

// en Modo estricto el dueño no estará definido `this` -> `undefined`
```

🚨 Para el modo `module` esta habilitado por defecto `use strict`.

---
