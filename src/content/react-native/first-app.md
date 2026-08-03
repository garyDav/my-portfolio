---
title: Mi Primera Aplicación con React Native
backLink: /blog/react-native
author: Ing. Gary Guzmán
readtime: 60
---

#### ©️ Por: Ing. Gary Guzmán

###### [📃 Todos](https://ggary.dev/) mis resúmenes por [@garyDav](https://github.com/garyDav)

> 🗓️ Publicado, 02 de Junio del 2026

---

#### Contenido de la materia

1. [**Crear Proyecto**](#crear-proyecto)

2. [**Estilos y botones**](#estilos-y-botones)

3. [**Botón flotante personalizado**](#boton-flotante-personalizado)

# Mi Primera Aplicación con React Native

## Crear Proyecto

Instalamos con el siguiente comando:

```bash
# Instalar Expo CLI
pnpx create-expo-app@latest counter-app --template blank-typescript
# Renombrar el proyecto
mv counter-app 03-counter-app
# Ingresar al proyecto
cd 03-counter-app
# Abrimos el proyecto en VS Code
code .
# Instalamos las dependencias
pnpm install
# Inicializamos el proyecto
pnpm start
```

## Estilos y botones

Analizando nuestro `App.tsx`, algunos componentes vendrán de `react-native`, otros de `expo` y otros de `react`. Por ejemplo, el componente `View` es un contenedor que nos permite organizar otros componentes dentro de él. El componente `Text` nos permite mostrar texto en la pantalla. El componente `Button` nos permite crear botones interactivos.

Los estilos en React Native se definen mediante objetos de estilo, que son similares a los estilos CSS pero con algunas diferencias. Por ejemplo, en lugar de usar `background-color`, usamos `backgroundColor`. Los estilos se aplican a los componentes mediante la propiedad `style`.

Para agregar más estilos mediante la propiedad `style`, podemos usar un objeto de estilo o un array de objetos de estilo. Por ejemplo:

```tsx
<View style={[styles.container, { backgroundColor: 'lightblue' }]}>...</View>
```

```tsx
...
export default function App() {
  // Hook de estado: 'count' guarda el valor actual, 'setCount' lo actualiza
  const [count, setCount] = useState(10);

  return (
    // View: contenedor principal con estilos de 'container'
    <View style={styles.container}>
      {/* Text: muestra el valor actual de 'count' con estilo grande */}
      <Text style={styles.textHuge}>{count}</Text>

      {/* Pressable: botón que detecta pulsaciones cortas y largas */}
      <Pressable
        style={styles.floatingButton} // Aplica estilo de botón flotante
        onPress={() => setCount(count + 1)} // Al presionar, incrementa el contador
        onLongPress={() => setCount(0)} // Al mantener presionado, reinicia a 0
      >
        {/* Texto dentro del botón, color blanco y tamaño 20 */}
        <Text style={{ color: 'white', fontSize: 20 }}>
          +1
        </Text>
      </Pressable>

      {/* TouchableOpacity: otro tipo de botón que cambia opacidad al presionar */}
      <TouchableOpacity
        style={styles.floatingButton} // Aplica mismo estilo de botón flotante
        onPress={() => setCount(count - 1)} // Al presionar, decrementa el contador
      >
        {/* Texto dentro del botón, color blanco y tamaño 20 */}
        <Text style={{ color: 'white', fontSize: 20 }}>
          -1
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo el espacio disponible en el contenedor padre
    backgroundColor: '#fff', // Fondo blanco
    alignItems: 'center', // Centra los elementos hijos horizontalmente
    justifyContent: 'center', // Centra los elementos hijos verticalmente
  },
  textHuge: {
    fontSize: 120, // Tamaño de fuente muy grande
    fontWeight: '100', // Grosor de fuente muy delgado (light)
  },
  floatingButton: {
    position: 'absolute', // Posiciona el botón de forma absoluta respecto al contenedor
    bottom: 20, // Lo coloca a 20px desde la parte inferior
    right: 20, // Lo coloca a 20px desde la parte derecha
    backgroundColor: '#65558F', // Color de fondo púrpura
    padding: 20, // Espaciado interno alrededor del contenido
    borderRadius: 15, // Bordes redondeados de 15px
    shadowColor: '#000', // Color de la sombra (negro)
    shadowOffset: { width: 0, height: 4 }, // Desplazamiento de la sombra (hacia abajo 4px)
    shadowOpacity: 0.3, // Opacidad de la sombra (30%)
    elevation: 3, // Altura de la sombra en Android (efecto de profundidad)
    shadowRadius: 4, // Difuminado de la sombra
  },
})
```

## Botón flotante personalizado

Este componente implementa un **Floating Action Button (FAB)** reutilizable en React Native, diseñado para colocarse en la parte inferior de la pantalla y ejecutar acciones rápidas. Recibe como propiedades un texto (`label`) y funciones opcionales para manejar eventos de pulsación (`onPress`) y pulsación prolongada (`onLongPress`). Además, permite definir la posición del botón, ya sea a la izquierda o a la derecha, mediante la prop `position`. El botón se construye con un `Pressable`, que aplica estilos dinámicos: cambia su opacidad cuando está presionado y ajusta su ubicación según la posición indicada. Los estilos definidos le otorgan apariencia de botón flotante con fondo púrpura, bordes redondeados y sombra, lo que le da un efecto de elevación sobre la interfaz. En conjunto, esta implementación ofrece un componente flexible y visualmente atractivo para acciones rápidas dentro de una aplicación móvil.

```tsx
// /components/FAB.tsx
import { Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
// Importa componentes de React Native:
// - Text: para mostrar texto
// - Pressable: botón que detecta pulsaciones
// - StyleSheet: para definir estilos
// - TouchableOpacity: otro tipo de botón (aunque aquí no se usa en el JSX)

interface Props {
  label: string; // Texto que se mostrará dentro del botón

  position?: 'left' | 'right'; // Posición opcional del botón (izquierda o derecha)

  // Métodos opcionales que se ejecutan al interactuar con el botón
  onPress?: () => void; // Acción al presionar
  onLongPress?: () => void; // Acción al mantener presionado
}

export default function FAB({
  label,
  onPress,
  onLongPress,
  position = 'right', // Valor por defecto: "right"
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.floatingButton, // Estilo base del botón flotante
        position === 'right' ? styles.positionRight : styles.positionLeft, // Aplica estilo según posición
        pressed ? { opacity: 0.7 } : { opacity: 1 }, // Cambia opacidad al presionar
      ]}
      onPress={onPress} // Ejecuta función al presionar
      onLongPress={onLongPress} // Ejecuta función al mantener presionado
    >
      {/* Texto dentro del botón, con color blanco y tamaño 20 */}
      <Text style={{ color: 'white', fontSize: 20 }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute', // Posiciona el botón flotante sobre la pantalla
    bottom: 20, // Separación desde la parte inferior

    backgroundColor: '#65558F', // Color de fondo púrpura
    padding: 20, // Espaciado interno
    borderRadius: 15, // Bordes redondeados
    shadowColor: '#000', // Color de la sombra
    shadowOffset: { width: 0, height: 4 }, // Desplazamiento de la sombra
    shadowOpacity: 0.3, // Transparencia de la sombra
    elevation: 3, // Altura de la sombra en Android
    shadowRadius: 4, // Difuminado de la sombra
  },

  positionRight: {
    right: 20, // Ubica el botón a la derecha
  },
  positionLeft: {
    left: 20, // Ubica el botón a la izquierda
  },
});
```
