---
title: Expo - Environment Setup
backLink: /blog/react-native
author: Ing. Gary Guzmán
readtime: 60
---

#### ©️ Por: Ing. Gary Guzmán

###### [📃 Todos](https://ggary.dev/) mis resúmenes por [@garyDav](https://github.com/garyDav)

> 🗓️ Publicado, 16 de Junio del 2026

---

#### Contenido de la materia

1. [**Crear Proyecto**](#crear-proyecto)
   - [**Si estamos en WSL**](#si-estamos-en-wsl)
   - [**Correr la aplicación desde Expo Go**](#correr-la-aplicación-desde-expo-go)
   - [**Para la primera vez ejecutar en Android**](#para-la-primera-vez-ejecutar-en-android)

2. [**Configurar Android Environment**](#configurar-android-environment)
   - [**Para correr WSL con Android Emulator desde Windows**](#para-correr-wsl-con-android-emulator-desde-windows)

# Expo React Native

## Crear Proyecto

Referencia: [Docs Expo App](https://docs.expo.dev/)

```bash
pnpm create expo-app@latest testing-app --template blank-typescript
# Escoger la versión: For learning with Expo Go (SDK 54)
cd testing-app
pnpm install
pnpm start
```

Pasos a tomar en cuenta:

- Instalar Expo Go en el dispositivo móvil.

- (Opcional) Instalar [Vysor](https://www.vysor.io/) para compartir pantalla del celular físico a Windows 11 por USB.

- (Opcional) Instalar [Scrcpy](https://github.com/genymobile/scrcpy), otra aplicación, software libre para compartir pantalla de celular a Windows por USB.

- Escanear el código QR (desde la app expo go) que se muestra en la terminal o en el navegador para abrir la aplicación en el dispositivo móvil.

### Si estamos en WSL

Necesitamos exponer el puerto de la aplicación que corre dentro de WSL hacia la red local de Windows 11, para que otros dispositivos puedan acceder a ella. Para esto, podemos usar `netsh` en Windows para crear un portproxy y una regla de firewall.

```bash
# Desde Powershell de Windows en modo administrador, eliminamos la regla portproxy.
netsh interface portproxy delete v4tov4 listenaddress=192.168.100.116 listenport=8081

# Desde Powershell de Windows en modo administrador, creamos la nueva regla portproxy.
netsh interface portproxy add v4tov4 listenaddress=192.168.100.116 listenport=8081 connectaddress=172.26.93.199 connectport=8081

# 192.168.100.116: IP pública de tu máquina Windows (puedes obtenerla con `ipconfig` dentro la terminal)
# 172.26.93.199: IP interna de WSL (puedes obtenerla con `ip addr show eth0` dentro de WSL)
```

Ese comando establece un **portproxy en Windows** que escucha en la IP pública de tu máquina (`192.168.100.116:8081`) y redirige el tráfico hacia la IP interna de WSL (`172.26.93.199:8081`). En resumen, sirve para exponer un servicio que corre dentro de WSL a la red local, haciendo que otros dispositivos puedan acceder como si estuviera directamente en Windows.

```bash
# Desde Powershell de Windows en modo administrador.
netsh advfirewall firewall add rule name="Aplicación Expo" dir=in action=allow protocol=TCP localport=8081

# Verificar que la regla se haya agregado correctamente
netsh advfirewall firewall show rule name="Aplicación Expo"
```

Ese comando agrega una **regla al firewall de Windows** que permite explícitamente el tráfico entrante TCP en el puerto `8081`. En detalle: se crea una regla llamada _“Aplicación Expo”_ con dirección de entrada (`dir=in`), acción de permitir (`action=allow`), protocolo TCP y puerto local `8081`. El objetivo es que las conexiones externas hacia tu máquina no sean bloqueadas por el firewall, garantizando que el servicio de Expo que corre en ese puerto pueda ser accedido desde otros dispositivos de la red.

### Correr la aplicación desde Expo Go

Una vez que la aplicación esté corriendo, se mostrará un código QR en la terminal o en el navegador. Para abrir la aplicación en el dispositivo móvil, sigue estos pasos:

1. Desde WSL instalar: `pnpm add expo-cli -g` y aprobar los post scripts: `pnpm approve-builds -g`.

2. Cambiar la ip que expondrá la aplicación, la IP de Windows: `set -gx REACT_NATIVE_PACKAGER_HOSTNAME 192.168.100.116`.

3. Ejecutar la aplicación: `pnpm start`.

4. Abre la aplicación **Expo Go** en tu dispositivo móvil.

5. En la pantalla principal de Expo Go, selecciona la opción **"Scan QR Code"** (Escanear código QR).

6. Apunta la cámara de tu dispositivo móvil hacia el código QR que se muestra en la terminal.

7. La aplicación Expo Go reconocerá el código QR y te preguntará si deseas abrir la aplicación. Confirma para abrirla.

8. También puedes abrir la aplicación manualmente ingresando la URL que se muestra en la terminal (por ejemplo, `exp://192.168.100.116:8081`).

### Para la primera vez ejecutar en Android

- Entrar ajustes del dispositivo móvil.

- Buscar la sección de teléfono o información del dispositivo.

- Presionar varias veces sobre el número de compilación o versión para activar las opciones de desarrollador.

- Volver a ajustes y buscar la sección de opciones de desarrollador.

- Activar la opción de "Depuración USB" o "Debugging USB".

- Activar la opción de "Instalar aplicaciones desde USB" o "Install apps via USB".

- Activar la opción de "Depuración USB (ajustes de seguridad)" o "USB debugging (Security settings)".

- Desactivar la opción de "Verificar aplicaciones por USB" o "Verify apps over USB".

## Configurar Android Environment

Abrir desde el siguiente enlace: [Android Environment Setup](https://docs.expo.dev/get-started/set-up-your-environment)

**Configurar Android SDK Platform**

![Android SDK Platform](/img/blogs/react-native/sub/android_sdk_platform.png)

**Configurar Android SDK Tools**

![Android SDK Tools](/img/blogs/react-native/sub/android_sdk_tools.png)

**Desde Android Studio**

- Abrir Android Studio y seleccionar "More Actions" -> "Virtual Device Manager".

- Crear un nuevo dispositivo virtual (AVD) con la imagen del sistema Android que deseas emular.

- Se puede escoger a partir de la lista de dispositivos predefinidos o crear uno personalizado.

- Podemos crear "New Hardware Profile" -> con nombre "Pixel Pro XL" -> Screen size "6.8 inch" -> Resolution "1344 x 2992 px" -> RAM "4 GB" -> "No Skin" -> "Finish".

- Seleccionamos "Pixel Pro XL" y luego "Next" -> Utilizar una versión estable del S.O. -> "Next" -> dejamos el AVD name -> Graphics "Hardware" utiliza tarjeta de video -> habilitar "Show advance settings" -> asignar "RAM", Internal storage "5 GB" -> "Finish".

### Para correr WSL con Android Emulator desde Windows

Una opción es instalar todo el entorno en WSL, siguiendo estos pasos: [Ver video de YouTube](https://www.youtube.com/watch?v=XJ0dI2SYHIE)

Otra opción más sencilla es instalar el entorno de Android en Windows y luego configurar WSL para que pueda acceder al emulador de Android y a las herramientas de desarrollo. Aquí te dejo los pasos para esta configuración:

- Ejecutar el emulador de Android desde Android Studio.

- Desde WSL con fish ejecutar:

```bash
# Configurar variables de entorno para Android SDK
set -gx ANDROID_HOME /mnt/c/Users/[TU_USUARIO]/AppData/Local/Android/Sdk
set -gx PATH $PATH $ANDROID_HOME/platform-tools
set -gx ANDROID_SDK_ROOT /mnt/c/Users/[TU_USUARIO]/AppData/Local/Android/Sdk

# Crear el binario de adb para WSL
sudo nvim /mnt/c/Users/[TU_USUARIO]/AppData/Local/Android/Sdk/platform-tools/adb
## Agregar el siguiente script
#!/bin/bash
/mnt/c/Users/[TU_USUARIO]/AppData/Local/Android/Sdk/platform-tools/adb.exe "$@"
## Guardar y salir del editor
# Dar permisos de ejecución al binario de adb
chmod +x /mnt/c/Users/[TU_USUARIO]/AppData/Local/Android/Sdk/platform-tools/adb

# Verificación
adb devices
```

- Configurar expo y la red interna

```bash
# Desde Windows PowerShell
ipconfig
# Copiar el: Adaptador de Ethernet Ethernet

# Desde WSL
set -gx REACT_NATIVE_PACKAGER_HOSTNAME <TU_IP>

# Recargar fish config
source ~/.config/fish/config.fish
```

- Ejecutar la aplicación

```bash
# Desde WSL
pnpm start
# Si no funciona, ejecutar el siguiente comando para forzar la red interna
pnpm start --tunnel
```
