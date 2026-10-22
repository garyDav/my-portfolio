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

2. [**Estructura del Proyecto**](#estructura-del-proyecto)

3. [**Primer Commit: Eliminar archivos innesesarios**](#primer-commit-eliminar-archivos-innesesarios)

4. [**Segundo Commit: Diseño inicial**](#segundo-commit-diseño-inicial)

5. [**Tercer Commit: Estilos globales**](#tercer-commit-estilos-globales)

6. [**Cuarto Commit: Custom text**](#cuarto-commit-custom-text)

7. [**Quinto Commit: Botones**](#quinto-commit-botones)

8. [**Sexto Commit: Botones parte 2**](#sexto-commit-botones-parte-2)

9. [**Séptimo Commit: Paquetes adicionales - Haptics y NavigationBar**](#séptimo-commit-paquetes-adicionales---haptics-y-navigationbar)

10. [**Octavo Commit: Lógica de la Calculadora**](#octavo-commit-lógica-de-la-calculadora)

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

        {/* Filas de botones */}
        <View style={globalStyles.row}>{/* Botón 1 */}</View>
      </View>
    );
  };
  ```

  > Para esto debemos añadir `row` a mis estilos globales

- En `./src/styles/global-styles.ts`

  ```ts
  export const globalStyles = StyleSheet.create({
    ...
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 18,
      paddingHorizontal: 10,
    },
  });
  ```

- En `./src/components/CalculatorButton.tsx`

  ```tsx
  import { Pressable } from 'react-native';

  interface Props {
    label: string;
  }

  const CalculatorButton = ({ label }: Props) => {
    return (
      <Pressable>
        <Text style={{ color: 'white' }}>{label}</Text>
      </Pressable>
    );
  };
  ```

  > Luego añado este componente a mi `index`

- En `./src/app/index.tsx` modificar:

  ```tsx
  ...

  const CalculatorApp = () => {
    return (
      <View style={globalStyles.calculatorContainer}>
        ...
        {/* Filas de botones */}
        <View style={globalStyles.row}>
          {/* Botón 1 */}
          <CalculatorButton label="C" />
          <CalculatorButton label="+/-" />
          <CalculatorButton label="del" />
          <CalculatorButton label="÷" />
        </View>
      </View>
    );
  };
  ```

  > Con este paso verificamos que el componente funciona y recibe sus parámetros

- En `./src/styles/global-styles.ts`

  ```ts
  export const globalStyles = StyleSheet.create({
    ...
    button: {
      height: 80,
      width: 80,
      backgroundColor: Colors.darkGray,
      borderRadius: 100,
      justifyContent: 'center',
      marginHorizontal: 10,
    },

    buttonText: {
      textAlign: 'center',
      padding: 10,
      fontSize: 30,
      color: Colors.textPrimary,
      fontWeight: '300',
      fontFamily: 'SpaceMono',
    }
  });
  ```

  > Luego añadirmos este estilo al compomente `CalculatorButton.tsx`

- En `./src/components/CalculatorButton.tsx`

  ```tsx
  ...

  const CalculatorButton = ({ label }: Props) => {
    return (
      <Pressable style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>{label}</Text>
      </Pressable>
    )
  }
  ```

  > Probamos como queda, luego procedemos a pensar que debemos recibir una propiedad para cambiar el color de fondo, de texto, y el evento.

- En `./src/components/CalculatorButton.tsx`

  ```tsx
  ...
  interface Props {
    label: string;
    color?: string;
    blackText?: boolean;
    onPress: () => void;
  }

  const CalculatorButton = ({
    label,
    color = Colors.darkGray,
    blackText = false,
    onPress,
  }: Props) => {
    return (
      <Pressable style={globalStyles.button}>
        <Text
          style={{
            ...globalStyles.buttonText,
            color: blackText ? 'black': 'white',
          }}
        >{label}</Text>
      </Pressable>
    )
  }
  ```

  > Añadimos las nuevas propiedades al archivo `ìndex`

- En `./src/app/index.tsx` modificar:

  ```tsx
  ...

  const CalculatorApp = () => {
    return (
      <View style={globalStyles.calculatorContainer}>
        ...
        {/* Filas de botones */}
        <View style={globalStyles.row}>
          {/* Botón 1 */}
          <CalculatorButton label="C" blackText color={Colors.lightGray} onPress={() => console.log('C')} />
          <CalculatorButton label="+/-" blackText color={Colors.lightGray} onPress={() => console.log('+/-')} />
          <CalculatorButton label="del" blackText color={Colors.lightGray} onPress={() => console.log('del')} />
          <CalculatorButton label="÷" blackText color={Colors.lightGray} onPress={() => console.log('÷')} />
        </View>
      </View>
    );
  };
  ```

Guardar el commit con el mensaje: **"Custom Button Calc 01: Componente + Props + Estilos personalizados"**

## Sexto Commit: Botones parte 2

- En `./src/components/CalculatorButton.tsx`

  ```tsx
  ...

  const CalculatorButton = ({
    label,
    color = Colors.darkGray,
    blackText = false,
    onPress,
  }: Props) => {
    return (
      <Pressable
        style={({ pressed}) => ({
          ...globalStyles.button,
          backgroundColor: color,
          opacity: pressed ? 0.8 : 1,
        })}
        onPress={onPress}
      >
        ...
      </Pressable>
    )
  }
  ```

- En `./src/app/index.tsx` modificar:

  ```tsx
  ...

  const CalculatorApp = () => {
    return (
      <View style={globalStyles.calculatorContainer}>
        ...
        {/* Filas de botones */}
        <View style={globalStyles.row}>
          {/* Botón 1 */}
          ...
          <CalculatorButton
            label="÷"
            color={Colors.orange}
            onPress={() => console.log('÷')}
          />
        </View>
      </View>
    );
  };
  ```

  > Luego duplicar cada `<View>...</View>` por cada línea hasta llegar `0 . =`, observamos que el cero ocupa dos posiciones.
  > Podríamos crear una propiedad llamada `doubleSize` para indicar que el cero ocupa el doble de tamaño en `CalculatorButton`.

- En `./src/components/CalculatorButton.tsx`

  ```tsx
  ...
  interface Props {
    ...
    doubleSize?: boolean;
    ...
  }

  const CalculatorButton = ({
    ...
    doubleSize = false,
    ...
  }: Props) => {
    return (
      <Pressable
        style={({ pressed}) => ({
          ...,
          width: doubleSize ? 180 : 80,
        })}
        onPress={onPress}
      >
        ...
      </Pressable>
    )
  }
  ```

Guardar el commit con el mensaje: **"Custom Button Calc 02: Componente + Props + Estilos personalizados"**

## Séptimo Commit: Paquetes adicionales - Haptics y NavigationBar

Para esta sección necesitaremos probarlo en nuestro celular físico.

Para realizar el efecto de que el botón haya sido tocado y en `Android` para modificar la barra inferior, necesitaremos de algunas dependencias, las cuales serán: [Expo Haptics](https://docs.expo.dev/versions/latest/sdk/haptics/) y [Expo Navigation Bar](https://docs.expo.dev/versions/latest/sdk/navigation-bar/)

- Primero implementaremos `Expo Navigation Bar`:

```bash
# En la terminal, puede que tengan que hacer reload
pnpm expo install expo-navigation-bar
```

- En `./app.json` añadir o modificar:

```json
{
  "expo": {
    "plugins": [
      [
        "expo-navigation-bar",
        {
          "enforceContrast": true,
          "hidden": false,
          "style": "dark"
        }
      ]
    ]
  }
}
```

- En `./src/app/_layout.tsx` modificar:

  ```tsx
  ...
  import { NavigationBar } from 'expo-navigation-bar';

  const isAndroid = Platform.OS === 'android';

  if (isAndroid) {
    NavigationBar.setBackgroundColorAsync('black');
  }

  const RootLayout = () => {
    return (
      <View>
        ...

        <NavigationBar style="dark" />
      </View>
    );
  };

  export default RootLayout;
  ```

- Ahora implementamos `Expo Haptics`:

```bash
# En la terminal, puede que tengan que hacer reload
pnpm expo install expo-haptics
```

- En `./src/components/CalculatorButton.tsx`

  ```tsx
  ...
  import * as Haptics from 'expo-haptics';

  const CalculatorButton = ({
    ...
  }: Props) => {
    return (
      <Pressable
        ...
        onPress={() => {
          // TODO: haptics: dispositivo físico
          Haptics.selectionAsync()
          onPress()
        }}
      >
        ...
      </Pressable>
    )
  }
  ```

Guardar el commit con el mensaje: **"Paquetes expo añadidos: Haptics y NavigationBar"**

## Octavo Commit: Lógica de la Calculadora

- En `./src/hooks/useCalculator.ts` añadir:

  ```ts
  import { useRef, useState } from 'react';
  enum Operator {
    // 1
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '÷',
  }

  export const useCalculator = () => {
    const [formula, setFormula] = useState(''); // 2

    const [number, setNumber] = useState(''); // 3
    const [prevNumber, setPrevNumber] = useState('0'); // 4

    const lastOperation = useRef<Operator>(); // 1

    const buildNumber = (numberString: string) => {
      console.log({ numberString });
    };

    return {
      // Props
      formula,
      number,
      prevNumber,

      // Methods
      buildNumber,
    };
  };
  ```

  > Probamos nuestro `Hook`

- En `./src/app/index.tsx` modificamos:

  ```tsx
  ...
  import { useCalculator } from '@/hooks/useCalculator'

  const CalculatorApp = () => {
    const {
      formula,
      buildNumber,
    } = useCalculator();

    return (
      <View style={globalStyles.calculatorContainer}>
        {/* Resultados */}
        <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
          <ThemeText variant="h1">{formula}</ThemeText>
          <ThemeText variant="h2">2500</ThemeText>
        </View>

        {/* Filas de botones */}
        {/* TODO: En todos los botones donde tengamnos números y el putno '.' cambiar el método por buildNumber */}
        <View style={globalStyles.row}>
          <CalculatorButton
            label="7"
            onPress={() => buildNumber('7')}
          />
          ...
        </View>
      </View>
    );
  };

  export default CalculatorApp;
  ```

  > Añadimos `formula` en nuestro `h1` y `buildNumber` en los botones que contengan números o punto `.`
  > Verificamos que en nuestra terminal al precionar los botones llega al `Hook`

- En `./src/hooks/useCalculator.ts` añadir:

  ```ts
  ...

  export const useCalculator = () => {

    useEffect(() => {
      // TODO: calcular subResultado
      setFormula(number);
    }, [number]);

    ...
  };
  ```

  > Debemos tomar en cuenta multiples conbinaciones al momento de introducir un número.

Guardar el commit con el mensaje: **"Lógica Calculadora: creando nuestro Hook useCalculator"**
