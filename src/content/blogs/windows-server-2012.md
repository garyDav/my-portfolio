---
title: Curso Windows Server 2012
author: Ing. Gary Guzmán
img: windows-server-2012/banner-curso.webp
description: Un curso de Windows Server 2012 (y R2) aprende a instalar, configurar y gestionar infraestructuras de servidor empresariales, cubriendo Active Directory, redes (DNS/DHCP), virtualización con Hyper-V y gestión remota.
readtime: 120
---

#### ©️ Por: Ing. Gary Guzmán

###### [👨‍💻 Repositorio](https://github.com/garyDav/Blogs/blob/master/WindowsServer2012/teoria.md) mis resúmenes por [@garyDav](https://github.com/garyDav)

> 🗓️ Publicado, 08 de diciembre del 2018

---

## Hablando de los Sistemas Operativos para Servidores

### Módulo 1

**Objetivo principal del sistema operativo:**

![Imagen 1](/img/blogs/windows-server-2012/Imagen1.png)

**Funciones del sistema operativo:**

1. Control de acceso a hardware

2. Administración de archivos y carpetas

3. Proporciona una interfaz de usuario

4. Administra aplicaciones

**1. Funciones del sistema operativo (Control de Hardware)**

El sistema operativo tiene 4 capas

![Imagen 2](/img/blogs/windows-server-2012/Imagen2.png)

**2. Funciones del sistema operativo (Archivos y Carpetas)**

![Imagen 3](/img/blogs/windows-server-2012/Imagen3.png)

**3. Funciones del sistema operativo (Interfaz de Usuario)**

![Imagen 4](/img/blogs/windows-server-2012/Imagen4.png)

![Imagen 5](/img/blogs/windows-server-2012/Imagen5.png)

**4. Funciones del sistema operativo (Administración de App)**

![Imagen 6](/img/blogs/windows-server-2012/Imagen6.png)

**Estaciones de trabajo**

![Imagen 7](/img/blogs/windows-server-2012/Imagen7.png)

**Sistemas Operativos para Estaciones de Trabajo**

![Imagen 8](/img/blogs/windows-server-2012/Imagen8.png)

**¿Que es un Servidor?**

![Imagen 9](/img/blogs/windows-server-2012/Imagen9.png)

Es una computadora en el que se ejecutan un programa que realiza alguna tarea en beneficio a otras aplicaciones llamadas (Clientes), tanto si se trata de un ordenador central conocido como Mainframe, o un mini ordenador, una computadora personal, una PDA, o un sistema Embebido. Sin embargo, hay computadoras destinadas únicamente a proveer los servicios de estos programas. Éstos son los servidores por antonomasia.

**Tipos de Servidores que existen**

![Imagen 10](/img/blogs/windows-server-2012/Imagen10.png)

Tenemos el servidor normal; un servidor Proxy o Firewall, un servidor cortafuegos, el cual se utiliza para seguridad; un servidor de correo electrónico; servidor de archivos; servidor de base de datos; y servidores de directorio, que es específicamente lo que vamos a tratar en este curso.

Dependiendo del objetivo del servidor que se necesite, existen diferentes tipos de servidores, aunque el tipo lo va a definir a la hora de instalar. Es decir, a la hora de instalar el servidor, definiremos para qué se va a utilizar ese servidor. No confundir que los fabricantes venden tipos de servidores.

**Sistemas Operativos para Servidores**

Tenemos tres tipos de Sistemas Operativos para servidores:

![Imagen 11](/img/blogs/windows-server-2012/Imagen11.png)

**Redhat**

Puede ser descargado de internet, tiene bastantes programas socios, brinda un excelente rendimiento, seguridad, escalabilidad, y disponibilidad. Es un sistema operativo de GNU/Linux, su núcleo está basado en Debian. Este sistema operativo es utilizado de manera gratuita, aunque muchas de las distribuciones de RedHat se compran aunque a bajo costo.

**Hablando de Windows Server 2012**

![Imagen 12](/img/blogs/windows-server-2012/Imagen12.png)

Es una edición lanzada por la compañía de Microsoft Corparation del sistema operativo Windows Server, su predecesor era Windows Server 2008 R2, el software está disponible desde el 4 de septiembre del 2012

Windows Server 2012 no tiene soporte para computadoras con procesador de 32-bit (IA-32) o Itanium (IA-64), y se vende básicamente en 4 ediciones como: Datacenter, Standard, Essentials, y Foundation.

![Imagen 13](/img/blogs/windows-server-2012/Imagen13.png)

Se agregó y mejoró algunas características comparado con la versión del 2008, como Hyper-V, Rol y Administraciones de Direcciones IP, una nueva versión de task manager y se presenta un nuevo sistema de archivos llamado REFS.

**Versiones de Windows Server 2012**

![Imagen 14](/img/blogs/windows-server-2012/Imagen14.png)

Windows Server 2012 solo viene estas 4 versiones, Windows Server 2008 ofrecía 12 versiones distintas. Un punto muy importante es que este cambio implica que los Administradores de Sistemas no tendrán que estudiar muchas horas sobre cual será la más adecuada para los Servidores.

![Imagen 15](/img/blogs/windows-server-2012/Imagen15.png)

- Fundation: No tiene derecho a virtualización y no tiene varias opciones

- Essentials: Tiene un derecho limitado a virtualización

- Standard: Tiene dos instancias de virtualización

- Datacenter: Tiene un número ilimitado de virtualizaciones

> Windows Server 2012 fue creado específicamente para trabajar con lo que hoy conocemos como **cloud computing**

**Nuevas Características de Windows Server 2012**

![Imagen 16](/img/blogs/windows-server-2012/Imagen16.png)

> Hyper-V me permite manejar máquinas virtuales en el Servidor

**Windows Power Shell**

No es mas que una consola de administración de comandos, me permite hacer todas las gestiones del SO, pero a nivel de comando

El **Power Shell** es una interfaz de consola o (CLI) con posibilidad de escritura y con función de comandos, por medio de guiones (script). Es mucho más rica e interactiva que su predecesor del DOS hasta Windows 7.

Está diseñada para su uso, por parte de los administradores de sistema, con el propósito de automatizar tareas o realizarlas de forma más controlada

**Comandos mas usados para Power Shell**

![Imagen 17](/img/blogs/windows-server-2012/Imagen17.png)

**Puntos importantes para adquirir un Servidor**

![Imagen 18](/img/blogs/windows-server-2012/Imagen18.png)

**Resumen del Capítulo**

1. Que es un sistema operativo.

2. Funciones del sistema operativo.

3. Sistemas Operativos para Estaciones de Trabajo.

4. Sistemas Operativos para Servidores.

5. Hablando de Windows Server 2012.

6. Versiones de Windows Server 2012.

7. Nuevas Características de Windows Server 2012.

8. Power Shell de Windows.

9. Puntos a tener en cuenta para adquirir un Servidor.

## Conceptos Básicos para trabajar con Windows Server 2012

### Módulo 2

**Unidades de medida informática**

Es la forma en la que yo mido la cantidad de lo que estoy trabajando en informática, mide el volumen o la cantidad de información, de un disco duro por ejemplo

Para sintesisar tantos número y para que se entienda, en informática existen las unidades de medida

![Imagen 19](/img/blogs/windows-server-2012/Imagen19.png)

**Que es un Disco Duro**

la unidad de disco duro o unidad de disco rígido (en inglés: hard disk drive, HDD) es el dispositivo de almacenamiento de datos que emplea un sistema de grabación magnética para almacenar archivos digitales

![Imagen 20](/img/blogs/windows-server-2012/Imagen20.png)

**Diferentes tipos de Discos Duros**

![Imagen 21](/img/blogs/windows-server-2012/Imagen21.png)

**Hablando de las Particiones de Discos**

Una partición es una unidad lógica de almacenamiento, usada para dividir un **disco duro** físico en varias partes, cómo si se tratase de múltiples discos. De esta manera cada partición puede usar sistemas de archivos diferentes.

La partición se hace normalmente, por razones de mantenimiento, rendimiento, manejo, etc.

![Imagen 22](/img/blogs/windows-server-2012/Imagen22.png)

En este ejemplo un disco duro tiene tres particiones, con diferentes Sistemas Operativos.

![Imagen 23](/img/blogs/windows-server-2012/Imagen23.png)

**Sistemas de Archivo**

Es la forma en que los Sistemas Operativos guardan la información.

![Imagen 24](/img/blogs/windows-server-2012/Imagen24.png)

**Memoria RAM**

De sus siglas (Random Access Memory) de denomina acceso aleatorio, por que se puede leer o escribir en una posición de memoria con un tiempo de espera igual para cualquier posición, evitando de esta forma seguir un orden para acceder a esta información de la manera más rápida posible.

![Imagen 25](/img/blogs/windows-server-2012/Imagen25.png)

**Tipos de Memoria RAM que existen**

![Imagen 26](/img/blogs/windows-server-2012/Imagen26.png)

**Algunos Tipos de Memorias**

Comparación de las Memorias DDR de la familia SDRAM.

![Imagen 27](/img/blogs/windows-server-2012/Imagen27.png)

**Conceptos Básicos sobre Redes de Datos**

**¿Que es una red de datos?**

Es un conjunto de equipos informáticos o computadoras, conectadas entre sí, por medio de dispositivos físicos que envían y reciven impulsos eléctricos, ondas electromagnéticas, o cualquier otro medio para el transporte de datos, con la finalidad de compartir información o recursos, y ofrecer servicios.

![Imagen 28](/img/blogs/windows-server-2012/Imagen28.png)

**Tipos de Redes de Datos que existen**

Los tres tipos de redes básicos son:

![Imagen 29](/img/blogs/windows-server-2012/Imagen29.png)

![Imagen 30](/img/blogs/windows-server-2012/Imagen30.png)

> Un nodo o un host, no es más que cualquier dispositivo conectado a la red.

Por ejemplo, si tenemos conectados unas computadoras en un edificio completo, o un edificio que está a lado, y todos están conectados en red. Eso es una red **LAN**.

- Pero si tengo un edificio en Santo Domingo y otro en Estados Unidos, o Venezuela, o en México. Entonces es una red **WAN**.

- **WLAN** son las redes **LAN** pero de forma Wireless, o inalámbrica, sin la necesidad de conectar un cable.

**Hablando de las Direcciones IP**

**¿Qué es una dirección IPv4?**

Es una etiqueta numérica que indica de manera lógica y jerárquica a una interfaz, una interfaz no es más que cualquier elemento de comunicación o conexión, en pocas palabras informa de manera lógica y jerárquica a un interfaz de un dispositivo dentro de una red que utiliza un protocolo IP (Internet Protocol), con esta versión de direcciones IPv4, podemos tener hasta cuatro mil millones de direcciones IP disponible

![Imagen 31](/img/blogs/windows-server-2012/Imagen31.png)

Una dirección IP no es más que un número único que se le asigna a cada computadora, conectada a la red

![Imagen 32](/img/blogs/windows-server-2012/Imagen32.png)

Las direcciones IPv4 se expresan por un número binario de 32 bits, permitiendo un espacio de direccionamiento de hasta 4 294 967 296 (2<sup>32</sup>) direcciones posibles. Las direcciones IPv4 se pueden expresar como números de notación decimal; se dividen los 32 bits en cuatro grupos divididos por puntos.

![Imagen 33](/img/blogs/windows-server-2012/Imagen33.png)

La dirección IP presentada en la imagen sería lo mismo decir:
**$$11111111.11111111.11111111.0$$**

Por eso se dice que cada número separado por punto es un **octeto**

**Tipos de Direcciones IP**

Tenemos dos tipos de direcciones IP **Públicas** y **Privadas**, En esta guía utilizaremos las direcciones IP **Privadas**, para asignar a cada uno de los computadores que se van a conectar a al red que vamos a crear más adelante.

![Imagen 34](/img/blogs/windows-server-2012/Imagen34.png)

**Tipos de Direcciones IP**

Las direcciones IP que empiezen en su primer octeto con: **10, 172 o 192**, son direciones IP **privadas** las demás serán **públicas**.

![Imagen 35](/img/blogs/windows-server-2012/Imagen35.png)

**Clases de Direcciones IP en las Privadas**

En la **Clase A**, el primer grupo define la dirección de red. Los siguientes tres grupos definen los nodos u hosts en la red.

En la **Clase B**, los dos primeros grupos definen la dirección de red. Los dos siguientes definen la dirección de host.

En la **Clase C**, los tres primeros grupos definen la dirección de red. Y el último grupo define la dirección de host.

Para que se entienda más claro, en una **Clase C** yo puedo tener menos direcciones IP disponibles que en una **Clase B**, y ésta a su vez mucho menos a una **Clase A**.

![Imagen 36](/img/blogs/windows-server-2012/Imagen36.png)

Normalmente Los **ISP** (Internet Service Provider), proveedores de servicios de internet, proveen direcciones IP de la **Clase A** a nivel privado, para que el usuario pueda tener todas las direcciones posibles para instalar.

**Mascara de Subred**

![Imagen 37](/img/blogs/windows-server-2012/Imagen37.png)

**Entrando en IPv6**

¿Que pasa cuando las direcciones IPv4 se terminen?

![Imagen 38](/img/blogs/windows-server-2012/Imagen38.png)

**Por qué se está migrando a IPv6**

La Corporación de Internet para la Asignación de Nombres y Números, en inglés **Internet Corporation for Assigned Names and Numbers (ICANN)**, es una organización sin fines de lucro, con el objetivo principal de encargarse de cierto números de tareas realizadas anteriormente por otra organización que era la **IANA**. Sucede y radica en California y está sujeta a las leyes de dicho Estado. En pocas palabras, **ICANN** es quien tiene el Almacén de direcciones IP. La fábrica de IP tiene muchas cajas de direcciones IP posibles.

![Imagen 39](/img/blogs/windows-server-2012/Imagen39.png)

**¿Que es IPv6?**

Una dirección IPv4, es una dirección IP de 32bits, y está clasificado o dividida en cuatro grupo de números dividido por puntos.

![Imagen 40](/img/blogs/windows-server-2012/Imagen40.png)

IPv6 es una dirección de ocho grupos de numeraciones divididas por dos puntos. Tienen 128 bits.

![Imagen 41](/img/blogs/windows-server-2012/Imagen41.png)

**Puntos a tener en cuenta**

Hay que tener cuatro puntos bien claro:

![Imagen 42](/img/blogs/windows-server-2012/Imagen42.png)

> Antes de ver en detalle cada punto observe que cada punto cuenta con dos direcciones IP, la segunda es como debe ser la notación.

1. Esta dirección nos dice que los ceros delante de cada grupo se pueden omitir,no importa si las letras son mayúsculas o minúsculas, son números hexadecimales con los números del **0** al **9** y con las letras de la **A** a la **F**.

2. Ya teniendo en cuenta el punto **1**, cuando hay dos grupos de ceros consecutivos **( 0:0 )** se sintetiza a **( :: )**

3. Otro punto a tener en cuenta es que, **NO** se permite tener dos resúmenes de ceros, o sea del punto tres de la imagen no se permite la segunda dirección IP. Lo que nos deja como válido la primera dirección IP. Sólo se debe sintetizar los ceros una vez.

4. Cuando una dirección tiene tan solo cinco grupos de números como se ve en el punto **4** de la imagen, ya debemos darnos cuenta que nos hace falta tres grupos de números más para completar los ocho grupos que tiene una dirección IPv6, como podemos observar tenemos tres grupos más de ceros en la parte de los dos puntos, dos veces **( :: )**.

**Resumen del Capítulo**

1. Unidad de Medidas Informática.

2. Que es un Disco Duro y para que se usan.

3. Que es una Partición.

4. Sistemas de Archivos.

5. Que es la Memoria RAM del Computador.

6. Conceptos Básicos de Redes de Datos.

7. Hablando de las Direcciones IP

## Instalación del sistema operativo Windows Server 2012 por primera vez

### Módulo 3

Este módulo se dividirá en tres partes diferentes, en la primera pausa pasaremos a la práctica de la instalación del sistema operativo de forma física en el computador, la segunda pausa que tomaremos será la instalación de forma virtual en el computador, luego continuaremos con la parte teórica de las características que traerá el sistema operativo a nivel gráfico, luego de esto haremos una tercera pausa, pasaremos al sistema operativo ya instalado.

**Arreglos de Discos para Servidores (Disk Array)**

Antes de instalar un sistema operativo para servidores no es como instalar un sistema operativo para PC normal, instalar un Servidor requiere de muchos pasos previos que el sistema debe tomar en cuenta para poder seleccionar o para poder obtar por el **Best Practice** sobre lo que se está realizando el la Empresa, Compañía, y Hogar.

Para poder adquirir un Servidor no basta con ir donde el vendedor y decir "Dame un Servidor". Yo debo saber a la hora de instalarlo para qué será este Servidor, cuál será su uso principal, Así como otras características principales como lo es el **Disk Array**.

El Arreglo de Disco o **Disk Array** es básicamente utilizado casi en la mayoría en los Servidores robustos o Servidores grandes, que demandan grán catidad de datos.

Cuando compramos un Servidor, siempre nos preguntan ¿Cuántos Discos Duros tendrá el Servidor?, ya sabemos que es un Disco Duro de hecho sabemos hasta la cantidad de almacenamiento que estos tienen hoy en día.

**Que es un Arreglo de Disco (RAID)**

Un grupo/matriz redundante de discos independientes, del inglés Redundant Array of Independent Disks.

![Imagen mod03_img01](/img/blogs/windows-server-2012/mod03_img01.png)

Un Arreglo de Disco **RAID** es un conjunto de discos que funcionan en un conjunto formando una sóla unidad lógica, por ejemplo, se puede tener 5 discos de 100Gb, de estos 4 se usan para almacenar la información, y el quinto como paridad, para verificar la información, dichos discos en conjunto se verán como una sola unidad lógica de 400GB sólamente, o sea si tenemos 5 discos duros y hacemos un Arreglo de Disco con él, depende al tipo de Arreglo que hagamos podemos tener los mismos 5 duros que se vé como una sola unidad de 400Gb siendo cada uno de 100Gb, normalmente uno como administrador de sistemas diríamos que se pierde, pero no es que se pierde, es que el disco duro se queda como **paridad** para verificar la iformación que se vá guardando.

> Los códigos de paridad se usan en telecomunicaciones para detectar, y en algunos casos corregir, errores en la transmisión. Para ellos se añade en origen un bit extra llamado bit de paridad a los n bits que forman el carácter original.
> Este valor del bit de paridad se determina de forma que el número total de bits 1 a transmitir sea par (código de paridad par) o impar (código de paridad impar).

![Imagen mod03_img02](/img/blogs/windows-server-2012/mod03_img02.png)

Esto implica, principalmente a que las **SAN** (Storage Área Network), Área de Red de Almacenamiento, las cuales se encargan de distribuir las cargas sobre los Arreglos de Discos. Otra versión de las **SAN** son las **NAS** (Network Attached Storage), Almacenamiento Conectado en Red.

**Características principales de (RAID)**

![Imagen mod03_img03](/img/blogs/windows-server-2012/mod03_img03.png)

**Niveles principales de (RAID)**

Existen distintos niveles de **RAID**, los más comúnes son: 0, 1, 5, y los híbridos, no tienen paridad ni redundancia, simplemente la distribución equitativa de los bloques de datos entre los distintos discos que lo componen

En el nivel **RAID 0** si uno de los discos que lo componen es menor en capacidad, ésta determinará el tamaño para el resto de Disco aunque tenga una capacidad mayor.

![Imagen mod03_img04](/img/blogs/windows-server-2012/mod03_img04.png)

En **RAID 1** se hace una copia de cada bloque guardado en los distintos discos que conforma la unidad lógica de manera ideal, se hace sobre pares de discos, y nuevamente el disco con menor capacidad determina el factor para calcular el tamaño completo para el Arreglo, este nivel es útil cuando no se tiene tanto problema por espacio, y se requiere un buen rendimiento de lectura y confiabilidad de los datos, así mientras más discos sean miembros del Arreglo se incrementarán dichas ventajas.

![Imagen mod03_img05](/img/blogs/windows-server-2012/mod03_img05.png)

Un RAID 5 (también llamado distribuido con paridad) es una división de datos a nivel de bloques que distribuye la información de paridad entre todos los discos miembros del conjunto. El RAID 5 ha logrado popularidad gracias a su bajo coste de redundancia. Generalmente, el RAID 5 se implementa con soporte hardware para el cálculo de la paridad. RAID 5 necesitará un mínimo de 3 discos para ser implementado.

No está en nivel de Arreglo, se hace un strip a nivel de bloque más un bloque paridad para mantener la seguridad en los bloques de los discos restantes, de esta forma bajo este esquema se obtiene mucha seguridad en los datos, sin sacrificar espacio en los discos, si tuvieramos un esquema RAID 1 y tuvieramos 4 discos de 100Gb, el espacio para guardar la información sería de 200Gb, por que hay que recordad que se replican los bloques en cada disco, pero Raid 5 se puede tener hasta 300Gb por lo mismo que explicamos al principio de la pérdida de un disco de paridad.

![Imagen mod03_img06](/img/blogs/windows-server-2012/mod03_img06.png)

Tenemos también los niveles híbridos, por ejemplo el **RAID 0+1** es el resultado de mezclar el nivel 0, y el nivel 1, es un espejo de strip, es decir al mismo tiempo que es un strip, se maneja otro conjunto de discos que hace un espejo de dicho strip, tiene un mínimo de 4 discos y al estar mezclados los dos tipos de RAID mencionados asegura la información un poco más sin desperdiciar la eficiencia al consultar la información guardada en ellos.

![Imagen mod03_img07](/img/blogs/windows-server-2012/mod03_img07.png)

El **RAID 1+0**, éste también es un híbrido de RAID 0+1 sin embargo está invertido a lo que explicamos anteriormente, la parte práctica para hacer el Arreglo de Disco es bien sencillo, existen aplicaciones que vienen con nuestro servidor que se encargan de ayudarnos a seleccionar el tipo de Arreglo deceado.

![Imagen mod03_img08](/img/blogs/windows-server-2012/mod03_img08.png)

**Requisitos para instalar Windows Server 2012**

Los requisitos a nivel de Hardware son:

![Imagen mod03_img09](/img/blogs/windows-server-2012/mod03_img09.png)

> Recomendamos tener una capacidad mínima de 4Gb de RAM

Los requisitos a nivel de Software son:

![Imagen mod03_img10](/img/blogs/windows-server-2012/mod03_img10.png)

**Instalación Paso a Paso Windows Server 2012**

**Para instalar Windows de forma virtual**

Una máquina virtual no es más que un software **capaz de cargar en su interior otro sistema operativo** haciéndole creer que es un PC de verdad. Tal y como su nombre indica, el concepto es tan sencillo como crear una máquina (PC, consola, móvil o lo que sea) que en vez de ser física es virtual o emulada.

![Imagen mod03_img12](/img/blogs/windows-server-2012/mod03_img12.png)

> El sistema operativo base puede ser cualquier distribución basado en GNU/linux que tenga soporte en virtualización.

**Seguridad inicial para el sistema operativo**

La seguridad de informática, es el área de la informática que se enfoca en la protección de la infraestructura computacional y todo lo relacionado con esta, para ello existe una serie de estándares, métodos, reglas, herramientas, y leyes concebidas, para minimizar o mitigar los posibles riesgos a la información, la seguridad informática comprente, software, base de datos, meta datos, archivos, y todo lo que la organización valore activo y signifique un riesgo si esta llega a manos de otra persona, este tipo de información se conoce como información privilegiada ó confidencial.

En pocas palabras, todo lo que está en nuestro sistema operativo necesita estar salvaguardado para evitar que llegue a manos de alguien no deseado.

![Imagen mod03_img13](/img/blogs/windows-server-2012/mod03_img13.png)

Para la seguridad para los sistemas operativos, tenemos requisitos y características:

![Imagen mod03_img14](/img/blogs/windows-server-2012/mod03_img14.png)

**Nueva característica para Roles a servidores Remotos**

**Roles a Servidores Remotos**

Con el **Server Manager**, podemos hacer deploy en cualquier servidor de la red. Con el solo hecho de agregarlo, podemos instalar cualquier rol o característica de forma remota. Por ejemplo, si tenemos cinco servidores y todos tienen Windows Server 2012, de un servidor principal podemos instalar roles o características o actualizaciones a otros servidores conectados en la red.

![Imagen mod03_img15](/img/blogs/windows-server-2012/mod03_img15.png)

**Resumen del Capítulo**

1. Arreglos de Discos.

2. Requisitos para la instalación de Windows Server 2012.

3. Instalación paso a paso de Windows Server 2012.

4. Primer ambiente de Windows Server 2012.

5. Nueva consola de administración de servidores.

6. Seguridad inicial para el sistema operativo.

7. Actualizaciones a nivel general.

## Práctica de Laboratorio

![Imagen mod03_img11](/img/blogs/windows-server-2012/mod03_img11.png)

#### Práctica 1

En este laboratorio veremos la instalación bien detallada del sistema operativo en un servidor físico.

[Instalación de Windows Server 2012 en Servidor Físico](https://github.com/garyDav/Blogs/blob/master/WindowsServer2012/practica01.md)

#### Práctica 2

En este laboratorio veremos la instalación de Windows Server 2012 R2 en una máquina virtual como VMware Workstation versión 15

[Instalación de Windows Server 2012 R2 en VMware Workstation v15](https://github.com/garyDav/Blogs/blob/master/WindowsServer2012/practica02.md)

#### Práctica 3

En este laboratorio veremos otro tipo de instalación de Windows Server 2012 R2 en una máquina virtual como VMware Workstation versión 15

[Otra forma de instalación de Windows Server 2012 R2 en VMware Workstation v15](https://github.com/garyDav/Blogs/blob/master/WindowsServer2012/practica03.md)

#### Práctica 4

En este laboratorio veremos como descargar y actualizar las últimas actualizaciones de nuestro sistema operativo.

[Windows Update](https://github.com/garyDav/Blogs/blob/master/WindowsServer2012/practica04.md)

## Configuración básica del sistema operativo

### Módulo 4

**Verificación de la autenticidad del sistema operativo**

![Imagen mod04_img01](/img/blogs/windows-server-2012/mod04_img01.png)

**Nombre para el Servidor**

**Por que un nombre para el Server**

Todo computador nodo o host, necesita un nombre para ser identificado, este nombre no debe repetirse por ningún otro nodo en la red, por que causaría el conflicto en la red y dejaría de funcionar uno de los dos, el nombre identifica básicamente como se llamnará el computador en la red.

![Imagen mod04_img02](/img/blogs/windows-server-2012/mod04_img02.png)

![Imagen mod04_img03](/img/blogs/windows-server-2012/mod04_img03.png)

**Acerca de ITIL y las recomendaciones de este**

**Que es ITIL**

La biblioteca de infraestructura de tecnologías de información **(ITIL)**, es un conjunto de conceptos y prácticas para la gestion de servicios de tecnologías de la información, el desarrollo de tecnologías de la información van relacionadas con la misma en general, esto incluye las mejores prácticas en consejos habituales para el mejor manejo de tecnologías de la información en el día a día.

![Imagen mod04_img04](/img/blogs/windows-server-2012/mod04_img04.png)

**ITIL** se basa en una estructura de mejora continua del servicio, donde muestra básicamente tres pasos fundamentales.

1. Servicio de diseño: donde yo diseño una solución.

2. Servicio de transición: donde yo transfiero lo que es la información de esa solución.

3. Servicio de operación: donde se opera la estrategia de servicio a fin de solucionar el problema.

**ITIL** dá descripciones detalladas de un extenso conjunto de procedimientos de gestion ideados para ayudar a las organizaciones a lograr calidad y eficiencia a las operaciones de tecnologías de información, estos procedimientos son independientes del proveedor y han sido desarrollados para servir como guía de toda la infraestructura, desarrollo y operaciones de tecnología de información.

![Imagen mod04_img05](/img/blogs/windows-server-2012/mod04_img05.png)

**Consejos básicos de ITIL para los AS**

![Imagen mod04_img06](/img/blogs/windows-server-2012/mod04_img06.png)

**Consideraciones para la asignación de Direcciones IP y nombres**

**Considerando las Direcciones IP**

Debemos tomar en cuenta el tamaño de la red y un posible crecimiento de la misma, si poseemos una red privada que poseerá 35 a 45 computadoras, podemos trabajar tranquilamente con la **Clase C**, donde la dirección **IP** es asignada por el último octeto, ahora si tendrémos más computadoras, como 200 a 400, en ese caso obtaríamos por la **Clase B**.

![Imagen mod04_img07](/img/blogs/windows-server-2012/mod04_img07.png)

**Considerando los nombres de Equipo**

Si tenemos dos servidores, uno llamado Hulk y otro Thor, y tenemos estaciones de trabajo, no podemos tener dos host con el mismo nombre, ya que esto causaría conflicto con una de ellas. Lo más recomendable para el sistema completo de la red, debemos tener un nombre diferente para cada equipo.

![Imagen mod04_img08](/img/blogs/windows-server-2012/mod04_img08.png)

**Dirección IP para el Servidor**

Debemos tomar en cuenta que **IP** se le están asignando a los equipos, esto si no estamos manejando **DHCP**, siempre es bueno anotar y documentarse todo lo que se está configurando en el servidor.

![Imagen mod04_img09](/img/blogs/windows-server-2012/mod04_img09.png)

**IP Address Managment de Windows Server 2012**

**Que es IPAM de Windows Server**

Proporciona administración y supervisión de los servidores que ejecutal el protocolo de configuración dinámica de host **DHCP** y el servicio de nombres de domínio **DNS**.

![Imagen mod04_img10](/img/blogs/windows-server-2012/mod04_img10.png)

**IPAM** incorpora en sí, todos los que són nuestros servicios, así como también una centralización del manejo de las direcciones **IP** que los servidores poseen dentro del sistema. **IPAM** incluye componentes para los siguientes: por ejemplo detección automática de infraestructura de direcciones IP.

![Imagen mod04_img11](/img/blogs/windows-server-2012/mod04_img11.png)

**Componentes de IPAM**

Se bása especificamente en mantener todo centralizado, todo lo que tenga que ver con nombres y direcciones IP.

![Imagen mod04_img12](/img/blogs/windows-server-2012/mod04_img12.png)

**Observación general del Servidor**

Es importante saber si el servidor es un Mail Server, File Server, Aplication Server, DNS Server, eso nosotros lo determinaremos.

![Imagen mod04_img13](/img/blogs/windows-server-2012/mod04_img13.png)

**Resumen del Capítulo**

1. Verificación de la Autenticidad del Software o Licencia.

2. Nombre para el Servidor.

3. Acerca de ITIL y las recomendaciones de este.

4. Consideraciones del tamaño de la red para las IP y Nombres.

5. IP Address Management IPAM.

6. Chequeo General del Servidor.

## Práctica de Laboratorio

![Imagen mod03_img11](/img/blogs/windows-server-2012/mod03_img11.png)

#### Práctica 5

En este laboratorio veremos algunas configuraciónes básicas antes de crear el domínio.

[Configuraciones Básicas](https://github.com/garyDav/Blogs/blob/master/WindowsServer2012/practica05.md)

## Configuración del Active Directory Domain Services a nivel Básico

### Módulo 5

**Importancia del Directorio Activo en un Servidor**

**Que es un Controlador de Dominio DC**

Los controladores de dominio tienen una serie de responsabilidades, una de ellas es la autenticación, la autenticación es el proceso de aceptar o denegar el acceso a un recurso compartido ó a otro máquina de la red, normalmente mediante el uso de una contraseña.

![Imagen mod05_img01](/img/blogs/windows-server-2012/mod05_img01.png)

Cada controlador de dominio usa un **Security Account Manager**, para mantener una lista de pares de nombres de usuarios y contraseñas, créa un repositorio centralizado de contraseñas que están enlazados a los nombres de usuarios, lo cual es más eficiente mantener centenares de contraseñas para cada recurso de la red disponible.

![Imagen mod05_img02](/img/blogs/windows-server-2012/mod05_img02.png)

**Que es Active Directory**

Es el término que usa Microsoft para referirse a su implementación de servicios de directorios, en una red distribuida de computadores, permite a los administradores establecer políticas a nivel de empresa desplegar programas a múchos ordenadores y aplicar actualizaciones críticas a uan organización entera.

Un **Active Directory**, almacena información de una organización en una base de datos central, organizada y accecible, pueden encontrarse desde directorios con cientos de objetos para una red pequeña, hasta directorios con millones de objetos, usa el protocolo **ldap**.

Microsoft se refiere al **Active Directory** como un triángulo, el cual recibe el nombre de Dominio, el cual tiene unidades organizacionales, estas son carpetas, y dentro de estas tenemos lo que son los usuarios, impresoras, grupos, y todos los recursos que se puedan compartir en la red.

![Imagen mod05_img03](/img/blogs/windows-server-2012/mod05_img03.png)

El funcionamiento de este es similar a la estructura **ldap**. Una de las ventajas de **Active Directory** es sincronización presente entre los distintos servidores de autenticación de todo el dominio. Por ejemplo en la imágen siguiente el triángulo grande es una organización de **Active Directory** uno ya creado, dentro de él podemos tener políticas de dominio ó **Group Policy Object**, cada hoja significa que tiene una política de grupo, dentro de este **Active Directory** tenemos una unidadad organizacional que se llama ventas **"Sales"** y dentro de este están todos los usuarios que trabajan en ese departamento, por medio de **Active Directory** podemos decir que los usuarios de ventas tengan solamente acceso a dos paquetes, también tenemos otra unidad organizacional que es para personas de Marketing que tendrán acceso a esos tres paquetes observados en la imagen.

![Imagen mod05_img04](/img/blogs/windows-server-2012/mod05_img04.png)

**Analogía para entender Active Directory**

Microsoft quiere tomar la analogía de los bosques para referirse a los bosques que se crean en un servicio de directorio activo. Diremos pues que los usuarios son recursos, al igual que una impresora y demás..., cada uno de estos recursos representa una fruta.

![Imagen mod05_img05](/img/blogs/windows-server-2012/mod05_img05.png)

![Imagen mod05_img06](/img/blogs/windows-server-2012/mod05_img06.png)

Ahora bien un árbol tiene diversos frutos, así mismo un árbol se le llama al active directory **Domain Services**, el cual puede tener dentro diferentes frutos, un active directory que forma el árbol y dentro de este los frutos que serían los usuarios, las impresoras, etc.

![Imagen mod05_img07](/img/blogs/windows-server-2012/mod05_img07.png)

Podemos tener también un bosque, lleno de árboles, también yo puedo tener un forest, un bosque lleno de árboles que serían los active directory.

![Imagen mod05_img08](/img/blogs/windows-server-2012/mod05_img08.png)

**Requisitos para Implementar AD DS**

Los requisitos pueden variar dependiendo del tipo de servicio de directorio que se desee implementar.

![Imagen mod05_img09](/img/blogs/windows-server-2012/mod05_img09.png)

**Requisitos para la Instalación de AD DS**

![Imagen mod05_img10](/img/blogs/windows-server-2012/mod05_img10.png)

**Nivel Funcional de Windows Server**

Cuando se crea un dominio, éste toma un nivel funcional que determina su nivel de compatibilidad con los controladores de dominio, básocamemte de comtroladores de dominio de versiones anteriores. Así por ejemplo cuando creamos un dominio desde Windows 2000 este nivel funcional queda en modo mixto para darnos compatibilidad con controladores de dominio NT 4, pero esto, hace que no se aprovechen todas las nuevas funcionalidades. Cada sistema operativo tiene un nivel funcional diferente.

![Imagen mod05_img11](/img/blogs/windows-server-2012/mod05_img11.png)

El nivel funcional determinará específicamente, cómo funcionará mi dominio, pero si elejimos un nivel funcional inferior, puedo perder capacidades que el nivel funcional actual me permite. Me explico si tenemos Windows 2012 y elegimos un nivel funcional, o sea un nivel de funcionamiento a la del 2008 por ejemplo, se adaptará como si fuera la versión de 2008 para su funcionamiento, y ciertas características de nivel funcional del 2012 quizá no me funcione, por el nivel de funcionalidad seleccionado.

![Imagen mod05_img12](/img/blogs/windows-server-2012/mod05_img12.png)

**Comando DCPROMO (Domain Controller Promotion)**

Este comando es usado principalmente para promover, el active directory domain services en un Servidor Windows, y de esta forma llamar al asistente para la configuración del mismo, y de esta forma llamar al asistente para la configuración del mismo y en este mismo sentido también, es usado para demostrar montar un dominio en caso de que sea necesario.

![Imagen mod05_img13](/img/blogs/windows-server-2012/mod05_img13.png)

Comandos del DCPROMO.

![Imagen mod05_img14](/img/blogs/windows-server-2012/mod05_img14.png)

![Imagen mod05_img15](/img/blogs/windows-server-2012/mod05_img15.png)

**Implementando AD DS**

Aunque en la práctica nos vasaremos a instalar a nivél gráfico, también habrá ótra practica posterior donde lo veremos todo a nivel de comandos, lo recomendable es hacerlo desde el **Server Manager** (Administrador del Servidor), ya que este está muy completo para realizar todas las configuraciones que querramos.

![Imagen mod05_img16](/img/blogs/windows-server-2012/mod05_img16.png)

**Preguntas en el Asistente para Implementar AD DS**

![Imagen mod05_img17](/img/blogs/windows-server-2012/mod05_img17.png)

**DNS Domain Name System**

**Que es un Dominio o Dirección de Internet**

Un dominio ó dirección de internet, es un red de identificación asociada a un grupo de dispositivos o equipos conectados a la red de internet, el propósito de los nombres de domínio de internet y del sistema de nombres de domínio DNS es traducir las direcciones IP, de cada nodo activo en la red a términos memorizables y fáciles de encontrar esta extacción hace posible que cualquier servicio de red pueda moverse de un lugar geográfico a otro a la red internet, aún cuando el cambio implique que tendrá una dirección IP diferente.

Por ejemplo la dirección **"www.nombre.dominio"** que se puede traducir de la siguiente forma **"www.capacity.com.do"**, esto es básicamente para lo que se utiliza **DNS**, para poder entender de mejor forma, ejecutaremos el **cmd** y haremos ping a **www.capacity.com.do**.

![Imagen mod05_img18](/img/blogs/windows-server-2012/mod05_img18.png)

Observamos que la dirección IP que tiene este domínio es: `192.185.227.132`.

![Imagen mod05_img19](/img/blogs/windows-server-2012/mod05_img19.png)

> Cuando ingresamos a una página web e introducimos el domínio, por trasfondo lo que hace es ingresar a una dirección IP donde está alojado dicha página.

**Dominios y Sub-dominios conocidos.**

![Imagen mod05_img20](/img/blogs/windows-server-2012/mod05_img20.png)

**Que es DNS (Domain Name System)**

Es un sistema de nomenclatura geráriquica para computadoras, servicios, ó cualquier recurso conectado a internet ó a una red privada, este sistema asocia información variada con nombred de domínio, asignando a cada uno de los participantes, su función más importante es traducir ó resolver nombres inteligibles a identificadores binarios y asociados con los equipos conectados a la red.

![Imagen mod05_img21](/img/blogs/windows-server-2012/mod05_img21.png)

![Imagen mod05_img22](/img/blogs/windows-server-2012/mod05_img22.png)

**Preguntas en el Asistente para Implementar DNS**

![Imagen mod05_img23](/img/blogs/windows-server-2012/mod05_img23.png)

**Preguntas en el Asistente para Implementar DNS**

![Imagen mod05_img24](/img/blogs/windows-server-2012/mod05_img24.png)

**Verificando AD DS**

![Imagen mod05_img25](/img/blogs/windows-server-2012/mod05_img25.png)

**Resumen del Capítulo**

1. Hablando del Directorio Activo y su importancia.

2. Analogía para entender Active Directory.

3. Requisitos a tener en cuenta para la implementación de AD DS.

4. Hablando del Comando DC Promo.

5. Implementando Active Directory Domain Service.

6. Configurando DNS.

7. Verificación de la correcta instalación de AD DS.

## Práctica de Laboratorio

![Imagen mod03_img11](/img/blogs/windows-server-2012/mod03_img11.png)

#### Práctica 6

En este laboratorio veremos algunas configuraciónes de active directory.

[Configuraciones AD](https://github.com/garyDav/Blogs/blob/master/WindowsServer2012/practica06.md)

#### Práctica 7

Para esta práctica necesitamos tener instalado una verción **PRO** de Windows, la versión **HOME** de Windows no puede unirse a un dominio, por que es una versión orientada para la casa, mientras que la versión **Profesional** es el sistema operativo para trabajar con domínios y controladores de domínios.

En mi caso utilizaré **Windows 10 PRO**, uninemos este sistema operativo cliente a nuestro controlador de domínio.

[Configuraciones con Windows 10 PRO](https://github.com/garyDav/Blogs/blob/master/WindowsServer2012/practica07.md)
