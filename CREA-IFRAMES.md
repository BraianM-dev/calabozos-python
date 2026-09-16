# Inserción en CREA (Ceibal) y otros LMS

Publicá primero todo el contenido del proyecto en GitHub Pages. Sustituí `TU-USUARIO` por el usuario o la organización del repositorio.

## Juego completo

```html
<iframe
  src="https://TU-USUARIO.github.io/calabozos-python/juego.html?embed=1"
  title="Calabozos y Python — campaña completa"
  width="100%"
  height="900"
  loading="lazy"
  style="border:0;border-radius:12px"
></iframe>
```

## Un tema

```html
<iframe
  src="https://TU-USUARIO.github.io/calabozos-python/juego.html?tema=print"
  title="Calabozos y Python — tema print"
  width="100%"
  height="900"
  loading="lazy"
  style="border:0;border-radius:12px"
></iframe>
```

Temas disponibles: `print`, `input`, `variables`, `operadores`, `condicionales`, `bucles`, `listas`, `diccionarios`, `funciones`, `random-try`, `bonus-chatbot`, `bonus-fizz` y `dragon-1`.

## Una misión concreta

```html
<iframe
  src="https://TU-USUARIO.github.io/calabozos-python/juego.html?nivel=input-5"
  title="Calabozos y Python — misión concreta"
  width="100%"
  height="900"
  loading="lazy"
  style="border:0;border-radius:12px"
></iframe>
```

## Pip como recurso independiente

```html
<iframe
  src="https://TU-USUARIO.github.io/calabozos-python/juego.html?vista=pip"
  title="Pip — tutor local de Python"
  width="100%"
  height="680"
  loading="lazy"
  style="border:0;border-radius:12px"
></iframe>
```

En los modos embebidos se oculta el enlace de inicio. Tema y accesibilidad continúan disponibles. `?vista=pip` reserva toda la altura útil para el chat y mantiene visibles su cabecera, mensajes y entrada.

## Uso desde celulares y pantallas pequeñas

- Usá siempre `width="100%"`; la interfaz reorganiza automáticamente misión, editor, consola y botones.
- Para el juego completo o un tema se recomienda `height="900"`. Si la actividad se utilizará principalmente desde un teléfono, puede aumentarse a `1100` para reducir el desplazamiento de la página de CREA.
- Para Pip independiente se recomienda una altura entre `620` y `720`.
- La barra de herramientas se desplaza horizontalmente cuando no entra completa. No es necesario reducir la escala del iframe.
- La ficha del héroe, la configuración y las opciones de accesibilidad se convierten en paneles táctiles sin cubrir permanentemente el código.

## Comprobación antes de asignar

1. Abrir el enlace publicado fuera de CREA.
2. Probarlo después dentro del iframe de CREA.
3. Confirmar que el navegador admite almacenamiento local. Si CREA lo limita, abrir el juego desde su enlace de GitHub Pages. Descargar la ficha PDF al finalizar: el sello recupera temas completos, no todos los borradores.
4. Mantener sin cambios las carpetas `assets/` y `niveles/`; contienen el ejecutor de Python, el editor, los retratos y los recursos offline.
5. Si CREA filtra el elemento `iframe`, compartir el enlace de GitHub Pages como actividad externa.

## Ambientaciones (v1.8.1)

La ambientación se selecciona con `campana` y puede combinarse con el filtro curricular `tema`:

```html
<iframe src="calabozos/juego.html" width="100%" height="900" style="border:0" title="Calabozos y Python"></iframe>
```

```html
<iframe src="jujutsu/juego.html?tema=condicionales" width="100%" height="900" style="border:0" title="Condicionales · Jujutsu y Python"></iframe>
```

```html
<iframe src="multiverso/juego.html?tema=bucles" width="100%" height="900" style="border:0" title="Bucles · Multiverso y Python"></iframe>
```

También se mantiene la forma compatible `juego.html?campana=...&tema=...`. El avance se conserva al alternar entre `calabozos`, `jujutsu` y `multiverso`, porque las tres carpetas cargan el mismo motor y el mismo itinerario educativo.
