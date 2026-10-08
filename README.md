# Perfil3_DiegoZelaya

Aplicación móvil desarrollada con React Native y Expo para la actividad evaluada del módulo **Desarrollo de componentes para dispositivos móviles**.

## Datos del estudiante

- **Nombre:** Diego Alberto López Zelaya
- **Carnet:** 20240181
- **Grupo y sección:** 2A

## Enlaces de entrega

- **Video demostrativo público:** Pendiente de agregar.
- **Descarga del APK:** Pendiente de agregar.

> Antes de entregar, reemplaza ambos textos pendientes con enlaces públicos que puedan abrirse sin solicitar permisos.

## Descripción

La aplicación presenta los datos del estudiante y permite navegar hacia un catálogo de personajes consumido desde la [API de Rick and Morty](https://rickandmortyapi.com/api/character). Cada tarjeta muestra el nombre, la imagen y una descripción breve del personaje.

El diseño utiliza una identidad visual naranja, carbón y ámbar, con un icono personalizado de Master Ball para el icono de la aplicación y el splash screen.

## Características

- Navegación tipo stack con React Navigation.
- Pantalla inicial con nombre, carnet, grupo y sección.
- Consumo de API mediante `fetch` y `async/await`.
- Lógica de navegación y datos aislada en custom hooks.
- Lista optimizada con `FlatList` y tarjetas reutilizables.
- Estados de carga, error, lista vacía, reintento y actualización por gesto.
- Icono y splash screen personalizados.

## Estructura principal

```text
src/
├── components/       # AppBar, botón, tarjeta, lista y loading
├── hooks/            # Navegación y consumo de la API
├── navigation/       # Configuración de React Navigation
├── screens/          # Pantallas sin lógica de negocio
└── theme/            # Colores, espaciado, radios y sombras
```

Todos los archivos de pantallas y componentes utilizan nombres en PascalCase.

## Instalación y ejecución

Requisitos: Node.js compatible con Expo SDK 54 y la aplicación Expo Go instalada en el dispositivo.

```bash
npm install
npx expo start
```

Escanea el código QR con Expo Go. También puedes iniciar una plataforma específica:

```bash
npm run android
npm run ios
```

## Verificación

```bash
npm run lint
npx tsc --noEmit
npx expo-doctor
```

## Generar el APK con EAS

El perfil `preview` de `eas.json` genera un APK instalable para la demostración:

```bash
npx eas-cli@latest login
npx eas-cli@latest build --platform android --profile preview
```

Al finalizar el build, descarga el APK desde el enlace proporcionado por EAS, verifica su instalación en un dispositivo o emulador Android y agrega el enlace público en la sección **Enlaces de entrega**.
