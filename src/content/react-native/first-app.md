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
  const [count, setCount] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>

      <Pressable>
        <Text style={styles.button} onPress={() => setCount(count + 1)}>
          +1
        </Text>
      </Pressable>
      <TouchableOpacity>
        <Text style={styles.button} onPress={() => setCount(count - 1)}>
          -1
        </Text>
    </View>
  );
}
```
