---
title: App Calculadora
backLink: /blog/react-native
author: Ing. Gary Guzmán
readtime: 60
---

#### ©️ Por: Ing. Gary Guzmán

###### [📃 Todos](https://ggary.dev/) mis resúmenes por [@garyDav](https://github.com/garyDav)

> 🗓️ Publicado, 03 de Octubre del 2026

---

#### Contenido de la materia

1. [**Crear Proyecto**](#crear-proyecto)

# Calculadora con React Native

## Crear Proyecto

Pueden revisar la instalción desde la documentación oficial [Crear Proyecto - Docs - Expo Go](https://docs.expo.dev/get-started/create-a-project/), procedemos a instalar con el siguiente comando:

```bash
# Instalar Expo CLI
pnpm create expo-app

---
✔ What is your app named? … calculator-app
✔ Select an Expo SDK version: › Latest (SDK 57)
Creating calculator-app using the default template.
---

# Renombrar el proyecto
mv calculator-app 04-calculator-app
cd 04-calculator-app

# Ejecutar el proyecto
pnpm start

# Si queremos exponer en nuestra red local, podemos usar el siguiente comando con IP de Windows:
REACT_NATIVE_PACKAGER_HOSTNAME=<IP:Windows> pnpm start
```

## Estructura del Proyecto

Al iniciar la aplicación vemos que tenemos un sistema de `tabs`, como la configuración por defecto incluye la versión web, podemos precionar `W` e inicializa la aplicación en el navegador.

- Primero presionan `?`: › Press ? │ show all commands

- Tienen todas estas opciones:

```bash
› Using Expo Go
› Press s │ switch to development build

› Press a │ open Android
› shift+a │ select an Android device or emulator
› Press w │ open web

› Press r │ reload app
› Press j │ open debugger
› Press m │ toggle menu
› shift+m │ more tools
› Press o │ open project code in your editor
› Press c │ show project QR
```

El Router de Expo también ofrece la **navegación** y **deep links** y todo eso basado en **URL**, tenemos dos rutas en `http://localhost:8081`

- `/`: Home

- `/explore`: Explore

Esta es la estructura de archivos una vez descargado el proyecto:

```bash
.
├── AGENTS.md                  # Documentación de agentes del proyecto
├── LICENSE                    # Licencia del proyecto
├── README.md                  # Instrucciones y guía inicial
├── app.json                   # Configuración principal de Expo
├── assets                     # Recursos gráficos y multimedia
│   ├── expo.icon              # Configuración de ícono de Expo
│   │   ├── Assets
│   │   └── icon.json
│   └── images                 # Imágenes utilizadas en la app
│       ├── android-icon-background.png
│       ├── android-icon-foreground.png
│       ├── android-icon-monochrome.png
│       ├── expo-badge-white.png
│       ├── expo-badge.png
│       ├── expo-logo.png
│       ├── favicon.png
│       ├── icon.png
│       ├── logo-glow.png
│       ├── react-logo.png
│       ├── react-logo@2x.png
│       ├── react-logo@3x.png
│       ├── splash-icon.png
│       ├── tabIcons
│       └── tutorial-web.png
├── expo-env.d.ts              # Tipos de entorno para Expo
├── package.json               # Dependencias y scripts del proyecto
├── pnpm-lock.yaml             # Bloqueo de dependencias para pnpm
├── scripts                    # Scripts utilitarios
│   └── reset-project.js       # Script para reiniciar el proyecto
├── src                        # Código fuente principal
│   ├── app                    # Vistas y navegación
│   │   ├── _layout.tsx
│   │   ├── explore.tsx
│   │   └── index.tsx
│   ├── components             # Componentes reutilizables
│   │   ├── animated-icon.module.css
│   │   ├── animated-icon.tsx
│   │   ├── animated-icon.web.tsx
│   │   ├── app-tabs.tsx
│   │   ├── app-tabs.web.tsx
│   │   ├── external-link.tsx
│   │   ├── hint-row.tsx
│   │   ├── themed-text.tsx
│   │   ├── themed-view.tsx
│   │   ├── ui                 # Subcarpeta para UI específica
│   │   └── web-badge.tsx
│   ├── constants              # Constantes globales
│   │   └── theme.ts
│   ├── global.css             # Estilos globales
│   └── hooks                  # Custom hooks
│       ├── use-color-scheme.ts
│       ├── use-color-scheme.web.ts
│       └── use-theme.ts
└── tsconfig.json              # Configuración de TypeScript

13 directories, 42 files
```

Este árbol refleja un proyecto **Expo SDK 57**:

- `assets` centraliza íconos e imágenes.

- `src` organiza vistas (`app`), componentes (`components`), estilos (`global.css`) y hooks (`hooks`).

- La carpeta `./src/app/*` es el núcleo de las pantallas y la navegación en el proyecto. `_layout.tsx` define la estructura general y cómo se organizan las rutas, `index.tsx` es la pantalla inicial que actúa como home, y `explore.tsx` es una vista secundaria usada como ejemplo de navegación y componentes. En conjunto, estos archivos establecen la base de la experiencia de usuario y el flujo de navegación dentro de Expo Router.

- Los archivos raíz (`package.json`, `tsconfig.json`, `app.json`) definen configuración y dependencias.

## Primer Commit: Eliminar archivos innesesarios

Pasos a realizar:

- Eliminar directorio: `./scripts`

- Eliminar directorio: `./src/hooks`

- Eliminar directorio: `./src/components`

- Eliminar archivo: `./src/app/explore.tsx`

- Eliminar archivo: `./src/app/index.tsx`

- Modificar archivo: `./src/constants/theme.ts`
  - Eliminar todo su contenido y añadir:

    ```ts
    export const Colors = {};
    ```

- Modificar archivo: `./src/app/_layout.tsx`

  ```tsx
  import { View } from 'react-native';
  import { Slot } from 'expo-router';

  const RootLayout = () => {
    return (
      <View>
        <Slot />
      </View>
    );
  };

  export default RootLayout;
  ```

- Crear un nuevo archivo `./src/app/index.tsx`

  ```tsx
  import { Text, View } from 'react-native';

  const CalculatorApp = () => {
    return (
      <View>
        <Text>CalculatorApp</Text>
      </View>
    );
  };

  export default CalculatorApp;
  ```

Guardar el commit con el mensaje: **"Expo Router: Layout e index, limpiar archivos innecesarios"**

## Segundo Commit: Diseño inicial

- Crear `./documentation` y añadir: [Img-Goal](https://ggary.dev/shared/Goal.png)

- En `./src/constants/theme.ts` añadir:

  ```ts
  export const Colors = {
    darkGray: '#2D2D2D',
    lightGray: '#9B9B9B',
    orange: '#FF9427',

    textPrimary: 'white',
    textSecondary: '#666666',
    background: '#000000',
  } as const;
  ```

- Descargar: [Font-SpaceMono](https://ggary.dev/shared/SpaceMono-Regular.ttf) y añadirlo a `./assets/fonts/SpaceMono-Regular.ttf`

- En `./src/app/_layout.tsx` modificar:

  ```tsx
  const RootLayout = () => {
    // Ref: https://docs.expo.dev/versions/latest/sdk/font/
    const [loaded] = useFonts({
      SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    if (!loaded) {
      return null;
    }

    return (
      <View style={{ backgroundColor: Colors.background, flex: 1 }}>
        <Slot />

        <StatusBar style="light" />
      </View>
    );
  };
  ```

- En `./src/app/index.tsx` modificar:

  ```tsx
  ...
  <Text style={{ fontSize: 50, fontFamily: 'SpaceMono', color: 'white' }}>CalculatorApp</Text>
  ...
  ```

Guardar el commit con el mensaje: **"Diseño inicial: Fuentes personalizadas, primeros estilos"**

## Tercer Commit: Estilos globales

- Crear `./src/styles/global-styles.ts`

  ```ts
  import { Colors } from '@/constants/theme';
  import { StyleSheet } from 'react-native';

  export const globalStyles = StyleSheet.create({
    background: {
      backgroundColor: Colors.background,
      flex: 1,
    },
    calculatorContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingBottom: 20,
    },

    mainResult: {
      color: Colors.textPrimary,
      fontSize: 70,
      textAlign: 'right',
      fontWeight: '400',
    },

    subResult: {
      color: Colors.textSecondary,
      fontSize: 40,
      textAlign: 'right',
      fontWeight: '300',
    },
  });
  ```

- En `./src/app/_layout.tsx` modificar:

  ```tsx
  const RootLayout = () => {
    // Ref: https://docs.expo.dev/versions/latest/sdk/font/
    const [loaded] = useFonts({
      SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    if (!loaded) {
      return null;
    }

    return (
      <View style={globalStyles.background}>
        <Slot />

        <StatusBar style="light" />
      </View>
    );
  };
  ```

- En `./src/app/index.tsx` modificar:

  ```tsx
  const CalculatorApp = () => {
    return (
      <View style={globalStyles.calculatorContainer}>
        <Text style={globalStyles.mainResult} numberOfLines={1} adjustsFontSizeToFit>
          50 x 500000000000000
        </Text>
        <Text style={globalStyles.subResult}>2500</Text>
      </View>
    );
  };
  ```

Guardar el commit con el mensaje: **"Estilos globales: para \_layout e index"**

## Cuarto Commit: Custom text

- Crear `./src/components/ThemeText.tsx` refactorizar a un componente:

  ```tsx
  import { globalStyles } from '@/styles/global-styles';
  import { Text, type TextProps } from 'react-native';

  interface Props extends TextProps {
    variant?: 'h1' | 'h2';
  }

  const ThemeText = ({ children, variant = 'h1', ...rest }: Props) => {
    return (
      <Text
        style={[
          { color: 'white', fontFamily: 'SpaceMono' },
          variant === 'h1' && globalStyles.mainResult,
          variant === 'h2' && globalStyles.subResult,
        ]}
        numberOfLines={1}
        adjustsFontSizeToFit
        {...rest}
      >
        {children}
      </Text>
    );
  };

  export default ThemeText;
  ```

- En `./src/app/index.tsx` modificar:

  ```tsx
  const CalculatorApp = () => {
    return (
      <View style={globalStyles.calculatorContainer}>
        <ThemeText variant="h1">50 x 500000000000000</ThemeText>
        <ThemeText variant="h2">2500</ThemeText>
      </View>
    );
  };
  ```

Guardar el commit con el mensaje: **"Custom Text: Components + Defult Props"**

## Quinto Commit: Botones

- En `./src/app/index.tsx` modificar:

  ```tsx
  const CalculatorApp = () => {
    return (
      <View style={globalStyles.calculatorContainer}>
        {/* Resultados */}
        <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
          <ThemeText variant="h1">50 x 500000000000000</ThemeText>
          <ThemeText variant="h2">2500</ThemeText>
        </View>
      </View>
    );
  };
  ```
