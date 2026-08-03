---
title: Fundamentos de Programación
author: Ing. Gary Guzmán
img: fundamentos/fundamentos-C++.webp
description: Resumen de la materia Fundamentos de Programación con C++
readtime: 120
---

#### ©️ Por: Ing. Gary Guzmán

###### [📃 Todos](https://ggary.dev/) mis resúmenes por [@garyDav](https://github.com/garyDav)

> 🗓️ Publicado, 22 de Julio del 2025

---

#### Contenido de la materia

1. [Introducción](#introducción)

2. [Secuencia](#secuencia)

3. [Selección](#selección)

#### Enlaces destacados

- Editor en línea: [Editor C++](https://www.onlinegdb.com)

- Compilador C++: [MinGW](http://www.mingw.org)

- Diagramas Algoritmos: [Lucidchart](https://lucid.app/lucidchart)

- Diagramas: [DrawIO](https://app.diagrams.net/)

---

## Introducción

El objetivo de la asignatura es que al concluir la misma el estudiante esté capacitado para resolver problemas, mediante la elaboración de programas desarrollados aplicando, de manera eficaz y eficiente, los fundamentos de la programación estructurada en el análisis, diseño e implementación de los mismos.

![Algoritmoimg](/img/blogs/fundamentos/tema-01-img-001.png)

En los primeros días de la informática los programas eran elaborados directamente en lenguaje de máquina (o en ensamblador). El lenguaje de máquina incentiva y prácticamente obliga al uso de saltos dentro del programa
(hacia adelante y hacia atrás). Esta práctica suele da lugar a una lógica
confusa que al ser representada en un diagrama revela una gran cantidad de
líneas que se cruzan y entrelazan por lo que se conoce como “lógica tipo
espagueti”:

Puesto que la mayoría de los programadores surgieron de ese ambiente, los primeros lenguajes de alto nivel (como Fortran, Basic y C) tenían (y aún tienen) un comando para realizar este tipo de saltos: el comando “goto”.

El programa surge cuando es necesario corregir, modificar y/o ampliar un programa. Actividades inevitables en la producción de software que, si no han sido convenientemente planificadas, consumen más tiempo y más recursos que la elaboración del producto original.

Para un mantenimiento eficiente del software es imprescindible que la lógica de los diferentes programas que lo componen sea **fácilmente comprensible**, pues de lo contrario resulta más práctico elaborar un nuevo programa que tratar de entender y luego corregir el programa existente.

Es con este objetivo, el de facilitar el mantenimiento de software, que surge la Programación Estructurada (PE), la cual recoge las prácticas de programación que habían demostrado ser exitosas en la elaboración y mantenimiento de programas y que se resumen en los siguientes principios:

- **Dividir** un problema complejo en problemas más sencillos.

- Emplear **estructuras estándar** para construir la totalidad del programa.

- Emplear **tipos de datos a la medida**.

Si bien hoy en día los ambientes de desarrollo son en su mayoría orientados a objetos, los principios de la programación estructurada siguen siendo válidos dentro de los nuevos paradigmas y por lo tanto siguen siendo de utilidad práctica.

Pero la importancia de la programación estructurada no sólo es histórica, sino que sigue siendo de utilidad práctica. Tanto así que, el núcleo de todos los sistemas operativos actuales, como Windows, Linux y Android, son programas estructurados (no orientados a objetos).

### 1.1. La Programación modular (Descendente)

El primer principio, de la programación estructurada es conocido también como **programación modular** o **programación descendente**. Su aplicación es universal y expresa la misma intención que la frase “divide y vencerás”. Básicamente nos dice que se debe dividir un problema en problemas más pequeños y estos a su vez en otros, hasta que los mismos sean lo suficientemente sencillos como para ser resueltos independientemente.

Cada uno de los problemas en los que es dividido el problema principal se conoce como **módulo** y es la razón por la cual este principio es conocido también con el nombre de **“programación modular”**.

> Es importante aclarar que un módulo es considerado como tal sólo si resuelve **el problema de manera independiente**, es decir sin importar de donde vengan los datos ni donde o como vayan a ser empleados los resultados devueltos.

Este principio se conoce también como programación descendente (top-down) porque se parte de un problema complejo que se divide en problemas más sencillos, estos en otros más sencillos y así sucesivamente, descomponiendo el problema de arriba (del problema más complejo) hacia abajo (al problema más sencillo). No obstante, la solución por lo general es ascendente, pues se comienza por resolver los problemas más sencillos y se va subiendo en dirección a los problemas más complejos.

El dividir el problema en problemas más sencillos, facilita considerablemente el mantenimiento de los programas y e incentiva la reutilización de código. Un módulo que resuelve un problema específico, al ser independiente, puede ser empleado no sólo en el software para el cual fue elaborado, sino también en cualquier otro en el que se requiera resolver ese tipo de problema, de esa manera surgen las librerías que contienen módulos que pueden ser reutilizados en varios programas, reduciendo considerablemente el tiempo de desarrollo.

Además, los módulos facilitan enormemente el mantenimiento y detección de errores. Porque si, en la elaboración de un programa, se emplean módulos previamente probados y se produce un error, se sabe que el error no está en dichos módulos, sino en los módulos añadidos. E inclusive es relativamente sencillo identificar el módulo problemático. Con lo que la corrección se reduce a la corrección de un sólo módulo.

### 1.2. Estructuras Estándar

### 🧠 Principio de claridad en la programación

El segundo principio busca que los programas sean **fáciles de entender**.

Cuando usamos **_estructuras estándar_** al programar, el código se vuelve más claro y fácil de mantener. En cambio, si usamos formas complicadas o poco comunes, puede volverse confuso.

### 📦 Estructuras básicas (según el paradigma de programación estructurada)

- **Secuencia** → instrucciones que se ejecutan una tras otra.
2. **Selección** → decisiones con `if`, `else`, `switch`.
3. **Iteración** → bucles con `do-while`, `while`, `for`, etc.

Aunque estas estructuras son la base, a veces usarlas de forma rígida puede generar lógicas difíciles de seguir. Por eso, los lenguajes de programación suelen ofrecer formas de modificarlas o extenderlas.

### 🎯 ¿Qué se considera estructura estándar?

Una estructura estándar es aquella que tiene **una única entrada y una única salida**. Esto ayuda a mantener la claridad del código, que es precisamente el objetivo principal de este principio.

### 1.3. Tipos de datos a la medida

### 🔒 Principio de validación de datos

Este principio tiene como objetivo **evitar errores** al recibir o mostrar información en un programa, o al momento que el usuario interactúa con el programa.

En otras palabras, se busca que los datos que el usuario ingresa sean correctos desde el principio, y que los resultados que el programa devuelve también estén bien presentados.

### 🛠️ ¿Cómo se aplica este principio?

La forma más común de aplicarlo es a través de la **validación de datos**: se limita la entrada para que el usuario solo pueda proporcionar información válida. Así se previenen fallos y se mejora la calidad del programa o módulo.

> En resumen: validar bien lo que entra al sistema = menos errores y más confiabilidad.

### 1.3. Lenguaje de programación a emplear

### 🧰 ¿Por qué usamos C++ para aprender programación?

El lenguaje que se utiliza para enseñar fundamentos de programación en esta materia es **C++**, porque permite trabajar cerca del "corazón" del computador y entender cómo se organiza la información, cómo se ejecutan instrucciones, y cómo se gestionan los recursos. Es ideal para aprender conceptos clave como:

- estructuras de control (`if`, `for`, `while`)
- tipos de datos y memoria
- compilación y depuración

Además, C++ es un lenguaje ampliamente usado en la industria, lo que lo convierte en una excelente base para cualquier programador.

### 🔧 Instalación del compilador MinGW

Para que puedas compilar y ejecutar tus programas en C++, necesitas un **compilador**. En este curso se utiliza **MinGW**, que puedes descargar desde [https://www.mingw-w64.org/downloads](https://www.mingw-w64.org/downloads/).

Una vez instalado MinGW, es necesario que el sistema lo reconozca. Para esto hay que **añadir la ruta al directorio `bin` de MinGW en la variable de entorno `Path`** de Windows.

### 📝 Pasos para configurar el compilador:

1. Instala MinGW y ubica la carpeta donde está el directorio `bin`. Ejemplo típico: `C:\MinGW\bin`
2. Haz clic derecho en el ícono **"Este equipo"** y selecciona **"Propiedades"**.
3. Ingresa a **"Configuración avanzada del sistema"**.
4. Haz clic en **"Variables de entorno"**.
5. En el panel inferior, busca la variable **"Path"** y haz clic en **"Editar..."**.
6. Al final del campo de texto, **sin borrar nada**, añade:

### 1.4. Primeros programas en C++

### 🔧 Primeros pasos: compilar desde cero

En este curso se comienza escribiendo programas usando:

- El **bloc de notas**, **Visual Studio Code**, **Neovim**, o el que prefieran como editor de texto.
- La **ventana de comandos (cmd)** para compilar y ejecutar.

Esto ayuda a entender qué ocurre realmente cuando se crea y corre un programa, sin que todo lo haga automáticamente un entorno gráfico.

### 📂 Crear una carpeta para tus programas

Desde el símbolo del sistema (`cmd`), puedes hacer lo siguiente:

```cmd
mkdir C:\dev\programas\c++\pruebas
cd C:\dev\programas\c++\pruebas
```

### ✍️ Escribir tu primer programa

Abre el bloc de notas escribiendo:

```cmd
notepad hola.cpp
```

Escribe tu código, guárdalo como `hola.cpp` y asegúrate de que tenga un salto de línea al final del archivo para evitar advertencias del compilador.

```cpp
#include <iostream>
using namespace std;

int main()
{
    cout<<"Hola Mundo!!!"<<endl;

    return 0;
}
```

### 🛠️ Compilar con MinGW y g++

Desde la terminal:

```cmd
g++ -c hola.cpp     :: crea el archivo objeto hola.o
g++ -o hola.exe hola.o   :: genera el ejecutable hola.exe
```

Y para ejecutarlo:

```cmd
hola.exe
```

Verás el mensaje `Hola Mundo!!!` si todo está correcto.

### 📚 Sobre las librerías en C++

Para C++ utilizamos como nuestra primera librería `iostream`.

Utilizan funciones propias de C++ como `cout` y `endl`, necesitas incluir:

```cpp
#include <iostream>
using namespace std;

int main() {
  cout << "¡Hola Mundo!" << endl;
  return 0;
}
```

- `cout` escribe en pantalla.
- `<<` se usa para encadenar varios elementos.
- `endl` agrega un salto de línea (como `\n`).

### ✅ ¿Qué se aprende con esta práctica?

- Cómo se crea, compila y ejecuta un programa desde cero.
- Fundamentos de la programación estructurada.

### 1.5. Ejemplos

### 🧮 1. Programa para calcular el cubo de un número

### 📌 ¿Cuál es el objetivo?

Crear un programa que **lea un número**, **calcule su cubo** (es decir, lo multiplique por sí mismo tres veces), y luego **muestre el resultado** en pantalla.

Aunque parece sencillo, vamos a aplicar los **tres principios de la programación estructurada**, que ayudan a mantener el código claro, ordenado y fácil de mantener.

### 🔍 Paso a paso usando los principios

#### 1. Dividir el problema en partes pequeñas (modularidad)

El problema se puede resolver fácilmente si lo separamos en tres tareas:

- **Leer el número** → Se puede hacer sin importar qué se va a hacer con él.
- **Calcular el cubo** → Solo se necesita el número, no importa de dónde vino.
- **Mostrar el resultado** → No depende de cómo se obtuvo el número ni el cubo.

Este enfoque modular permite que cada parte se entienda y se pruebe por separado.

#### 2. Usar estructuras estándar (secuencia)

Como es un programa simple, no hace falta complicarse. Con una secuencia de instrucciones (una tras otra) es suficiente para resolverlo.

```cpp
#include <iostream>
using namespace std;

// double: 1.5, 87.4334
double leerDato() {
  double num;
  cout<<"Escriba un número: ";
  cin>>num;
  return num;
}

void mostrarRes(double num, double res) {
  cout<<"El cubo de "<<num<<" es: "<<res<<endl;
}

double cubo (double num) {
    return num*num*num;
}

int main() {
  // Declarar y Asignar Variables
  // [Tipo Dato] nombreVariable
  // Declaración
  double numero, resultado;

  // Lectura de número
  numero = leerDato();

  // Cálculo del cubo
  resultado = cubo(numero);

  // Mostrar Resultado
  mostrarRes(numero, resultado);
  return 0;
}
```

---

## Secuencia

### 📌 2.1. Tipos de datos en C/C++

En este tema vamos a repasar los **tipos de datos básicos en C y C++**, que son fundamentales para aplicar correctamente el tercer principio de la programación estructurada:

> _“Usar tipos de datos adecuados a lo que queremos representar.”_

### 🔤 Tipos básicos

En C/C++, existen cinco tipos principales de datos:

- `char`: caracteres
- `int`: números enteros
- `float`: decimales con precisión sencilla
- `double`: decimales con más precisión
- `void`: ausencia de tipo (por ejemplo, funciones que no devuelven nada)

Además, podemos aplicar **modificadores** como:

- `signed`: permite números negativos
- `unsigned`: solo números positivos
- `short`: enteros pequeños
- `long`: enteros más grandes

Combinando los tipos y los modificadores, se obtiene un buen abanico de opciones. A continuación, una tabla con ejemplos y rangos aproximados:

### 🧮 Tabla de tipos y rangos

| Tipo                 | Tamaño (bits) | Rango / Precisión                |
| -------------------- | ------------- | -------------------------------- |
| `char`               | 8             | -127 a 127                       |
| `unsigned char`      | 8             | 0 a 255                          |
| `signed char`        | 8             | -127 a 127                       |
| `int`                | 32            | -2,147,483,647 a 2,147,483,647   |
| `unsigned int`       | 32            | 0 a 4,294,967,295                |
| `signed int`         | 32            | -2,147,483,647 a 2,147,483,647   |
| `short int`          | 16            | -32,767 a 32,767                 |
| `unsigned short int` | 16            | 0 a 65,535                       |
| `signed short int`   | 16            | -32,767 a 32,767                 |
| `long int`           | 32            | -2,147,483,647 a 2,147,483,647   |
| `unsigned long int`  | 32            | 0 a 4,294,967,295                |
| `float`              | 32            | ~6 dígitos de precisión decimal  |
| `double`             | 64            | ~10 dígitos de precisión decimal |
| `long double`        | 80            | ~10 dígitos de precisión decimal |

📝 _Los tamaños y rangos pueden variar según el compilador o arquitectura del procesador que estés usando._

### ✅ Tipos adicionales en C++

C++ también incluye estos dos tipos muy usados:

- `bool`: tipo lógico (`true` o `false`)
- `string`: cadenas de texto

### 2.2. 🛠️ Operadores en C/C++

Como los usamos todo el tiempo, vale la pena repasar los **operadores básicos** que nos ofrece C/C++. Son herramientas para realizar cálculos y manipular variables.

### ➕ Operadores aritméticos

| Operador | Función                      |
| -------- | ---------------------------- |
| `+`      | Suma                         |
| `-`      | Resta / Negación unaria      |
| `*`      | Multiplicación               |
| `/`      | División                     |
| `%`      | Módulo (residuo de división) |
| `++`     | Incremento (sumar 1)         |
| `--`     | Decremento (restar 1)        |

🧠 **Dato útil:**

- Si colocas `++` o `--` **antes** de la variable (`++x`), primero se modifica su valor y luego se usa.
- Si va **después** (`x++`), primero se usa su valor original y **después** se incrementa o decrementa.

### 🧮 Operadores de asignación compuesta

Estos operadores permiten abreviar operaciones comunes. Si `x = 9` y `y = 3`:

| Operador | Ejemplo  | Equivalente | Resultado `x` |
| -------- | -------- | ----------- | ------------- |
| `+=`     | `x += y` | `x = x + y` | `12`          |
| `-=`     | `x -= y` | `x = x - y` | `6`           |
| `*=`     | `x *= y` | `x = x * y` | `27`          |
| `/=`     | `x /= y` | `x = x / y` | `3`           |
| `%=`     | `x %= y` | `x = x % y` | `0`           |

🧠 **Importante:**

La lógica detrás de los problemas secuenciales es bastante directa, así que **no hace falta usar diagramas de flujo** para representar estos operadores.

---

## Selección

### 🧠 Fundamentos de C++: selección, lógica y control de flujo

En este resumen repasamos estructuras y conceptos básicos en C++ que te ayudan a escribir programas limpios, claros y eficientes.

### 🔍 Expresiones lógicas

Una **expresión lógica** (o condicional) siempre devuelve `true` o `false`.  
En C++, puedes usar:

- `bool`: tipo lógico con valores `true` o `false`
- También es válido: `0` = falso, `1` (o cualquier número distinto de cero) = verdadero

#### 🔗 Operadores relacionales

| Operador | Significado   |
| -------- | ------------- |
| `==`     | Igual         |
| `!=`     | Distinto      |
| `>`      | Mayor         |
| `<`      | Menor         |
| `>=`     | Mayor o igual |
| `<=`     | Menor o igual |

#### ⚙️ Operadores lógicos

| Operador | Función                                     |
| -------- | ------------------------------------------- |
| `!`      | Negación (`true` → `false`, y viceversa)    |
| `&&`     | "AND" Y lógico (ambos deben ser verdaderos) |
| `\|\|`   | "OR" O lógico (basta que uno sea verdadero) |

### 🧭 Estructura Condicional "Simple" `if`

Permite ejecutar una acción si la condición se cumple, si no no ejecuta el bloque.

```cpp
...
if (condición) {
  // Si la condición es "true" ...
}
...
```

### 🧭 Estructura Condicional "Doble" `if-else`

Permite ejecutar una acción si se cumple una condición y otra si no.

```cpp
...
if (condición) {
  // instrucción_1
  // ...
} else {
  // instrucción_2
  // ...
}
...
```

- Si hay más de una instrucción por bloque, usa llaves `{}`.
- El `else` es opcional.
- Puedes **anidar** `if-else`, pero se recomienda no más de 3 niveles para mantener la claridad.

### ➕ Operadores de incremento y decremento

Sirven para aumentar o disminuir una variable en 1 unidad:

| Operador | Equivalente |
| -------- | ----------- |
| `x++`    | `x = x + 1` |
| `x--`    | `x = x - 1` |
| `++x`    | `x = x + 1` |
| `--x`    | `x = x - 1` |

🧠 **Diferencias entre prefijo y posfijo**:

```cpp
int y = 4;
int x = ++y * 2; // Resultado: x = 10 (incrementa antes)
int z = y++ * 2; // Resultado: z = 8  (incrementa después)
```

#### Ejemplo 1.

**Elabore un programa que, empleando librerías C++, determine si un número dado es par, impar o cero. El programa debe contar con un módulo que devuelva 0 si el número es cero, 1 si es impar y 2 si es par.**

En este problema se identifican los siguientes módulos (primer principio de la programación estructurada):

a) Un módulo para leer el número;

b) Un módulo para determinar si el número es par, impar o cero y

c) Un módulo para mostrar el resultado.

En cuanto a la lógica, para determinar si un número es par, simplemente
se divide entre 2 y si el residuo es cero, entonces el número es par, caso
contrario (si es uno) es impar.

El problema surge cuando el número es cero (pues el residuo de 0 entre 2 es también 0). Por ello, para determinar si un número es par, impar o cero, primero se debe averiguar si el número es cero y si no, determinar si es par o impar.

#### Solución Ejemplo 1.

```c++
#include<cmath>
#include<iostream>
using namespace std;

int leerNumero();
int parImparCero(int num);
void mostrarSiPar(int res);

int main() {
  // Declaración de variables
  int num, res;

  // Asignación de variables
  num = leerNumero();
  res = parImparCero(num);
  mostrarSiPar(res);

  return EXIT_SUCCESS;
}

int leerNumero() {
  double num=0;
  cout.width(15);
  cout<<"Número? ";
  cin>>num;
  if (!num) {
    cout<<"Error: No es un número."<<endl;
    exit(EXIT_FAILURE);
  }
  if (fmod(num, 1)) {
    cout<<"Error: El número debe ser un entero."<<endl;
    // exit(EXIT_FAILURE);
    leerNumero();
  }

  return (int)num;
}

int parImparCero(int num) {
  if (!num) return 0;

  if (num % 2)
    return 1;
  else
    return 2;
}

void mostrarSiPar(int res) {
  cout.width(15);
  cout<<"El número es: ";
  switch (res) {
    case 0:
      cout<<"cero."<<endl;
      break;
    case 1:
      cout<<"impar."<<endl;
      break;
    case 2:
      cout<<"par."<<endl;
      break;
    default:
      cout<<"No introduciste un número."<<endl;
      break;
  }
}
```

#### Ejemplo 2.

Elaborar un programa que determine si un año dado es o no bisiesto. Como un año "es" o "no es" bisiesto (no existen años más o menos bisiesto), el programa debe contar con una función que devuelva verdadero si el año es bisiesto y falso en caso contrario.

#### Solución Ejemplo 2.

```c++
#include <iostream>
#include <cmath>
using namespace std;

unsigned leerAnio();
bool bisiesto(unsigned a);
void mostramosSiBisiesto(unsigned a, bool r);

int main () {
  unsigned a;
  bool r;

  a = leerAnio();
  r = bisiesto(a);
  mostramosSiBisiesto(a, r);

  return EXIT_SUCCESS;
}

unsigned leerAnio() {
  double a;
  cout.width(15);
  cout<<"Año? ";
  cin>>a;

  if (fmod(a, 1)) {
    cout<<"Error: El año debe ser entero"<<endl;
    exit(EXIT_FAILURE);
  }
  if (a <= 0) {
    cout<<"Error: El año debe ser positivo"<<endl;
    exit(EXIT_FAILURE);
  }

  return unsigned(a);
}

bool bisiesto(unsigned a) {
  if ( !(a % 100) ) a /= 100;
  return !(a % 4);
}

void mostramosSiBisiesto(unsigned a, bool r) {
  cout.width(15);
  cout<<"El año: "<<a<<" ";
  if (r) cout<<"es bisiesto"<<endl;
  else cout<<"no es bisiesto"<<endl;
}
```

#### Ejemplo 3.

Elaborar un programa que lea tres números reales y encuentre el mayor de estos. Luego muestre dicho valor.

#### Solución Ejemplo 3.

```c++
#include <iostream>
#include <cmath>
using namespace std;

void leerNumeros(double &a, double &b, double &c);
double mayor(double a, double b, double c);
void mostrarMayor(double m);

int main () {
  double a, b, c, m;

  leerNumeros(a, b, c);
  // Aquí ya tengo llenas mis variables
  m = mayor(a, b, c);
  mostrarMayor(m);

  return EXIT_SUCCESS;
}

void leerNumeros(double &a, double &b, double &c) {
  cout.width(20);
  cout<<"<--- Mayor de 3 números --->"<<endl;
  cout.width(20);
  cout<<"Primer número: ";
  cin>>a;

  cout.width(20);
  cout<<"Segundo número: ";
  cin>>b;

  cout.width(20);
  cout<<"tercer número: ";
  cin>>c;
}

double mayor(double a, double b, double c) {
  if (a > b) b = a;
  if (b > c) c = b;

  return c;
}

void mostrarMayor(double m) {
  cout.width(20);
  cout<<"El mayor valor es: "<<m<<endl;
}
```

### 🔍 Estructura Switch e If - Else If

Cuando la lógica que resuelve el problema implica dos o más condiciones consecutivas, donde el caso contrario es siempre otra condición, tal como se muestra en el siguiente diagrama:

![If-else-if](/img/blogs/fundamentos/tema-03-img-001.png)

La forma más clara de codificarla es mediante la estructura “if – else if”, que simplemente es la estructura “if”, pero ordenada de manera que se puedan ver claramente las diferentes condiciones:

![If-else-if](/img/blogs/fundamentos/tema-03-img-002.png)

### Estructura condicional con múltiples casos (`if`, `else if`, `else`)

Como se muestra en el diagrama:

- Si **una de las condiciones** se cumple, se ejecuta **su bloque correspondiente** y luego el programa continúa normalmente con la siguiente instrucción.
- Si **ninguna condición** es verdadera, se ejecuta el bloque por defecto: el último `else`.

> 💡 Al igual que en una estructura `if-else` estándar, el bloque `else` **es opcional**. Si no se incluye, simplemente no se ejecuta nada especial y el programa sigue con lo que venga.

### Uso de llaves `{}` para bloques

- Si hay **más de una instrucción** que debe ejecutarse cuando una condición se cumple, estas deben encerrarse **entre llaves `{}`** para formar un bloque.
- Esto asegura que todas las instrucciones se ejecuten como una sola unidad.

### Comparación por igualdad

Cuando se evalúa el mismo valor (una variable o expresión) contra distintos valores fijos —como números enteros, caracteres, valores enumerados, etc.— podemos usar estructuras tipo `switch` o múltiples `if-else` para organizar mejor la lógica condicional.

![If-else-if](/img/blogs/fundamentos/tema-03-img-003.png)

Una forma más clara y eficiente de programarla es con estructura “switch”:

![If-else-if](/img/blogs/fundamentos/tema-03-img-004.png)

---
