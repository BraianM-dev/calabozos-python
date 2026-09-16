# Carpeta `niveles/`

## ¿Para qué sirve?

Esta carpeta es **opcional**. Sirve para crear **páginas por tema** (o por bloque de misiones) que puedas:

1. Embeber en un LMS / Moodle / Google Site con un `iframe` más enfocado.
2. Dar una consigna corta + enlace o iframe al juego completo.
3. Organizar el año en “estaciones” (hoy solo `print`, mañana solo `input`, etc.).

**No es obligatoria** para que el juego funcione. El recurso principal es `juego.html`, que ya incluye todos los temas en el mapa.

## Cómo usarla

1. Copiá el archivo de ejemplo `ejemplo-print.html` y renombralo (`input.html`, `variables.html`, …).
2. Cambiá el título y la consigna del tema.
3. En el `iframe`, apuntá a `../juego.html` (ruta relativa desde esta carpeta).
4. Subí la carpeta junto al resto del sitio a GitHub Pages o a tu servidor.

### Ejemplo de iframe desde esta carpeta

```html
<iframe
  src="../juego.html?tema=print"
  width="100%"
  height="800"
  style="border:none;border-radius:12px"
  title="Calabozos y Python"
  loading="lazy">
</iframe>
```

### Desde un LMS (URL pública)

```html
<iframe
  src="https://TU-USUARIO.github.io/calabozos-python/juego.html"
  width="100%"
  height="900"
  style="border:none;border-radius:12px"
  title="Calabozos y Python">
</iframe>
```

## Nota sobre el progreso

El progreso se guarda en el **localStorage del navegador** del estudiante. Si entra siempre desde el mismo navegador y dominio, puede continuar donde quedó aunque use distintas páginas de `niveles/`.

## Filtro por tema (`?tema=`)

`juego.html` acepta un parámetro de URL para mostrar **solo un tema**:

| Parámetro | Tema |
|-----------|------|
| `?tema=print` | print() |
| `?tema=input` | input() |
| `?tema=variables` | Variables / tipos |
| `?tema=condicionales` | if / else |
| `?tema=bucles` | for / while |
| `?tema=listas` | Listas |
| `?tema=diccionarios` | Diccionarios |
| `?tema=funciones` | Funciones |
| `?tema=modulos` | random + try/except |
| `?tema=bonus` | Mini Chatbot |
| `?tema=dragon` | Dragón final |

También se aceptan alias (`entrada`, `if`, `random`, `chatbot`, etc.).

En modo tema:
- Solo se muestra ese bloque en el mapa.
- La **nota se escala sobre 10** según el XP de ese tema.
- El progreso se sigue guardando en el navegador.

### Ejemplo

```html
<iframe
  src="../juego.html?tema=input"
  width="100%"
  height="800"
  style="border:none;border-radius:12px"
  title="Calabozos — input">
</iframe>
```


## Solo Pip (chatbot)

```html
<iframe src="../juego.html?vista=pip" width="100%" height="600" style="border:none;border-radius:12px" title="Pip el Ayudante"></iframe>
```


## Layout en modo tema

Con `?tema=` el juego usa CSS `embed-mode`: ficha flotante compacta, footer al final, sin franjas rotas. Con `?vista=pip` solo se muestra el chat a pantalla útil.
