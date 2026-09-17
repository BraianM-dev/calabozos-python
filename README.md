# AVENTURAS & PYTHON

**Plataforma educativa multitema para aprender los fundamentos de Python**

**Versión 1.8.3 · tres ambientaciones · escritorio, 1366 × 768, tablets, celulares y CREA**

![Nivel](https://img.shields.io/badge/Nivel-9º%20EBI%20%2F%201º%20EMS-blue)
![Lenguaje](https://img.shields.io/badge/Lenguaje-Python-3776AB?logo=python&logoColor=white)
![Licencia](https://img.shields.io/badge/Licencia-CC%20BY%204.0-lightgrey)


> **v1.8.4 · Identidad ilustrada:** el mismo motor curricular puede jugarse desde `calabozos/`, `jujutsu/` o `multiverso/`. Las campañas comparten progreso, validadores, Pip, accesibilidad, héroes ilustrados animados, QR en el PDF y los 39 desafíos.

---

## Descripción

**Aventuras & Python** es una plataforma educativa gamificada con un único recorrido curricular de Python y varias ambientaciones intercambiables. Los estudiantes resuelven las mismas 39 misiones, con las mismas validaciones y el mismo progreso, pero pueden elegir entre una campaña RPG clásica, una academia arcana original o una campaña original de ciencia caótica y multiversos. **Pip** adapta su presentación al universo elegido y mantiene el andamiaje pedagógico.

Está pensado para **9.º grado de Educación Básica Integrada (EBI)** de Uruguay, y es perfectamente adaptable y usable en **1.º de Educación Media Superior (EMS)**.

### Objetivos de aprendizaje

- Comprender y aplicar los conceptos fundamentales de Python:
  - `print` y salida de datos
  - `input()` para pedir datos al usuario
  - Variables y tipos de datos: texto (`str`), enteros (`int`), decimales (`float`), booleanos (`True`/`False`)
  - Condicionales (`if` / `elif` / `else`) y operadores lógicos (`and`, `or`, `not`)
  - Bucles (`for` y `while`)
  - Listas (creación, recorrido, `append`, índices)
  - Diccionarios (pares clave-valor)
  - Funciones personalizadas (`def`, parámetros, `return`)
  - Módulo `random`
  - Manejo básico de errores (`try` / `except`)
- Desarrollar el pensamiento algorítmico y la resolución de problemas
- Practicar de forma progresiva, con pistas y feedback inmediato
- Fomentar la autonomía mediante un asistente conversacional

---


## Ambientaciones de campaña

La versión **1.8.3** separa la lógica educativa de la ambientación visual/narrativa. El estudiante puede recorrer las mismas **39 misiones**, con las mismas validaciones de Python y el mismo progreso, usando distintas campañas:

- `calabozos/index.html` o `juego.html?campana=calabozos` — campaña RPG original.
- `jujutsu/index.html` o `juego.html?campana=jujutsu` — Academia Arcana, campaña original de hechicería contemporánea. La ruta se mantiene por compatibilidad con enlaces anteriores.
- `multiverso/index.html` o `juego.html?campana=multiverso` — campaña original de ciencia caótica, portales y dimensiones absurdas.
- `juego.html?campana=jujutsu&tema=condicionales` — combina una ambientación con un tema curricular para CREA/iframe.

El cambio de ambientación **no reinicia** XP, borradores, misiones completadas ni ficha del personaje. El parámetro `?tema=` sigue reservado para el contenido curricular. Las ambientaciones se configuran en `assets/campaigns.js`, de modo que se pueden incorporar nuevas campañas sin duplicar los desafíos.

> **Propiedad intelectual:** las tres identidades públicas, los personajes, Pip y las composiciones incluidas son recursos originales del proyecto bajo CC BY 4.0. La carpeta técnica `jujutsu/` solo conserva compatibilidad con enlaces antiguos; la identidad pública actual es **Academia Arcana & Python** y no utiliza personajes, logos, diálogos ni arte de franquicias de terceros.

## Características principales

| Característica | Descripción |
|----------------|-------------|
| Recorrido curricular | 10 temas + Chatbot + FizzBuzz + misión final (39 desafíos) |
| Sub-niveles | 3–5 desafíos por tema |
| Editor de código | CodeMirror con resaltado de sintaxis Python |
| Intérprete | Skulpt (Python en el navegador) |
| Interacciones | Programar, completar, depurar, ordenar, predecir, explicar, comparar, elegir pruebas y seguir tablas |
| Validación | Checks reales del código y feedback inmediato |
| Pip el Ayudante | Tutor local contextual con andamiaje fuerte por defecto |
| Inventario RPG | Héroe animado por eventos, tres evoluciones, doce mejoras menores, objetos y runas recuperables |
| Ruta del héroe | El personaje elegido recorre el pie del juego según las misiones completadas |
| Diseño responsive | Interfaz táctil para celulares, tablets, pantallas pequeñas e iframes de CREA |
| Bonus FizzBuzz | while + if + módulo `%` (misión secreta) |
| Hoja de avance | Pergamino PDF A4 de una sola página con héroe, dominio, runas, reflexión y sello |
| Persistencia | Guardado automático en el navegador + ficha PDF y sello de recuperación |
| Iframes | Soporte para embeber el juego completo o por partes |
| Accesibilidad / DUA | Tamaño, contraste, dislexia, reducir movimiento |

---

## Accesibilidad y DUA

| Opción | Descripción |
|--------|-------------|
| Tamaño de letra | Pequeño / Normal / Grande / Muy grande |
| Tema | Oscuro / Claro |
| Contraste alto | Sí / No |
| Modo dislexia | Fuente más legible |
| Reducir movimiento | Reduce o desactiva animaciones para personas con sensibilidad al movimiento |
| Clases de personaje | Mago, Guerrero, Arquero, Explorador (temas visuales) |

Los personajes utilizan hojas locales de seis fotogramas y estados independientes: reposo, pensamiento, ejecución, éxito, error, interacción y evolución. Las acciones intensas solo se reproducen cuando ocurre el evento correspondiente. Evolucionan según los 39 desafíos —inicial de 0 a 12, veterano de 13 a 25 y legendario desde 26— y reciben doce mejoras menores, aproximadamente una cada tres misiones.

En la parte inferior, la ruta del héroe muestra las 39 posiciones y los hitos Veterano, Legendario y Dragón. El personaje solamente camina cuando se completa una nueva misión; al recargar conserva la posición sin repetir la celebración. En un iframe por tema, la ruta representa únicamente ese bloque, y en `?vista=pip` se oculta para reservar el espacio al chat.

En pantallas pequeñas, las acciones superiores se desplazan horizontalmente, los controles mantienen un área táctil mínima, la ficha y la configuración se abren como paneles inferiores y Pip ocupa la pantalla disponible sin tapar su cabecera o el campo de escritura. En orientación horizontal se priorizan el editor y la conversación. Los navegadores antiguos conservan una distribución funcional mediante reglas de respaldo.

---

## Cómo usar

### Uso local

1. Descargá o cloná este repositorio.
2. Abrí `index.html` en el navegador (o directamente `juego.html`).

### GitHub Pages

1. Subí el repositorio a GitHub.
2. Activá **GitHub Pages** en la rama `main` (carpeta raíz).
3. URL típica: `https://tu-usuario.github.io/calabozos-python/`

### Filtro por tema

Podés abrir un solo tema con el parámetro `?tema=`:

- `juego.html?tema=print`
- `juego.html?tema=input`
- `juego.html?tema=variables`
- … (`condicionales`, `bucles`, `listas`, `diccionarios`, `funciones`, `modulos`, `bonus`, `dragon`)

El indicador **Dominio** muestra el porcentaje de misiones completadas en ese tema. No constituye una nota académica.

### Accesos directos para clases

- Una misión concreta: `juego.html?nivel=input-5`
- Forzar la presentación de bienvenida: `juego.html?bienvenida=1`
- Abrir solo a Pip: `juego.html?vista=pip`

Los desafíos de bloques también incluyen botones para subir o bajar cada línea, de modo que no dependen del gesto de arrastrar.

### Embeber con iframe

Ver ejemplos detallados en **[guia-docente.html](guia-docente.html)**.

```html
<iframe
  src="juego.html?tema=print"
  width="100%"
  height="900"
  style="border:none; border-radius:12px;"
  title="Calabozos y Python"
  loading="lazy"
  allowfullscreen>
</iframe>
```

Desde GitHub Pages:

```html
<iframe
  src="https://TU-USUARIO.github.io/calabozos-python/juego.html"
  width="100%"
  height="900"
  style="border:none; border-radius:12px;"
  title="Calabozos y Python">
</iframe>
```

Para una actividad abierta principalmente desde celulares, se recomienda una altura de `900` a `1100` píxeles para el juego o el tema. Pip independiente puede utilizar entre `620` y `720` píxeles.

---

## Estructura del proyecto

```
calabozos-python/
├── index.html          # Presentación e índice
├── juego.html          # Juego completo
├── guia-docente.html   # Orientaciones de uso, iframes, evaluación
├── manual-jugador.html # Manual, glosario, ejemplos y catálogo de 39 niveles
├── CREA-IFRAMES.md     # Fragmentos listos para embeber en CREA y otros LMS
├── README.md
├── LICENSE             # CC BY 4.0
├── assets/
└── niveles/            # Páginas opcionales por tema (ver niveles/README.md)
```

---

## Contenidos del calabozo

1. **La Taberna del Inicio** · `print()`
2. **La Puerta del Calabozo** · `input()` (pedir datos, `int()` / `float()`)
3. **La Ficha del Héroe** · Variables, `int`, `float`, booleanos
4. **La Balanza del Calabozo** · Operadores aritméticos y de comparación
5. **La Encrucijada** · Condicionales y operadores lógicos
6. **El Ataque Múltiple** · Bucles `for` y `while`
7. **La Mochila** · Listas
8. **El Grimorio** · Diccionarios
9. **El Libro de Hechizos** · Funciones personalizadas
10. **El Dado Mágico** · `random` + `try`/`except`
11. **Misión Secreta** · Mini Chatbot 9000
12. **Misión Secreta** · FizzBuzz del Dragón
13. **El Dragón Rojo** · Combate final

---

## Tecnologías

- HTML5 + CSS3 (variables CSS, diseño responsive)
- JavaScript (vanilla)
- [CodeMirror 5](https://codemirror.net/)
- [Skulpt](https://skulpt.org/)
- Exportador PDF vectorial propio (`assets/ficha-pdf.js`), sin dependencia externa
- Manual del jugador accesible (`manual-jugador.html`)

Funciona **sin servidor** y **sin suscripciones**.

---

## Guía docente

Abrí **[guia-docente.html](guia-docente.html)** para:

- Orientaciones de uso en el aula
- Ejemplos de iframe (local y GitHub Pages)
- Accesibilidad y DUA
- Evaluación y evidencia (PDF, sello de progreso)
- Problemas frecuentes

El alumnado puede consultar **[manual-jugador.html](manual-jugador.html)** para conocer los controles, tipos de misión, opciones de accesibilidad y la regla de compatibilidad de la consola: la ñ y las tildes se conservan en textos, pero se evitan en nombres de variables y funciones.

---

## Autor y licencia

**Braian Mosqueira** · Uruguay

Licencia **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**.  
Ver el archivo [LICENSE](LICENSE).

Se permite el uso, modificación y redistribución manteniendo la atribución al autor.

---

## Inspiración

Estructura y presentación inspiradas en recursos educativos de docentes uruguayos de Ciencias de la Computación. Pedagogía basada en DUA y gamificación responsable.


## Iframes y modos de uso

### Juego completo
```html
<iframe src="juego.html" width="100%" height="800" style="border:none;border-radius:12px" title="Calabozos & Python"></iframe>
```

### Un solo tema (dominio calculado sobre ese bloque)
```html
<iframe src="juego.html?tema=print" width="100%" height="900" style="border:none;border-radius:12px" title="Tema print"></iframe>
```
Temas: `print`, `input`, `variables`, `operadores`, `condicionales`, `bucles`, `listas`, `diccionarios`, `funciones`, `modulos`, `fizz`, `chatbot`, `dragon`.

En modo tema/iframe el layout es compacto: la ficha del héroe es un panel flotante pequeño (abajo a la izquierda) y el footer queda al final del contenido.

### Solo Pip el Ayudante (chat)
```html
<iframe src="juego.html?vista=pip" width="100%" height="640" style="border:none;border-radius:12px" title="Pip el Ayudante"></iframe>
```

### Autoaltura (opcional)
```html
<script>
window.addEventListener("message", function (e) {
  if (e.data && e.data.type === "calabozos-resize") {
    var f = document.getElementById("calabozosFrame");
    if (f) f.style.height = e.data.height + "px";
  }
});
</script>
```

## Pip el Ayudante

Pip actúa como *dungeon master* y tutor local del recurso: dispone de un glosario de Python, conoce la misión abierta, lee el checklist y analiza el código del editor. Puede guiar en pasos progresivos, explicar una línea determinada, predecir una salida comprobable, proponer casos de prueba, revisar claridad y ofrecer una devolución estructurada semejante a la de un docente. Si se le pide la solución completa, responde con preguntas o plantillas con huecos para preservar el razonamiento del estudiante. No usa una API de IA ni envía el chat a un servicio externo.

Su avatar original de profesor-búho y las celebraciones visuales responden a logros concretos de aprendizaje. La interfaz prioriza progreso visible y retroalimentación inmediata, sin recompensas aleatorias ni técnicas de retención compulsiva. Todo movimiento puede desactivarse desde Accesibilidad o mediante `prefers-reduced-motion`.


## Niveles puzzle

Algunos sub-niveles son **puzzles de código incompleto** (hay que completar fragmentos, no escribir todo desde cero):

| Id | Tema |
|----|------|
| `print-3` | Completar el cartel (print) |
| `input-4` | Nombre del héroe a medias |
| `if-2` | if/else incompleto |
| `loop-3` | while de la antorcha a medias |

Pip puede explicar el concepto; las pistas no regalan el código final. En `?vista=pip` no se muestra la ficha del héroe. En `?tema=` el footer queda anclado abajo del viewport.

## Versión revisada: septiembre de 2026

Ver [CAMBIOS.md](CAMBIOS.md) y [VALIDACION-EDUCATIVA.md](VALIDACION-EDUCATIVA.md). La preparación para revisión educativa no equivale a aprobación institucional.

Descomprimir el paquete completo y subir **su contenido**, conservando `assets/` y `niveles/`, a la raíz del repositorio de GitHub Pages. No basta con reemplazar solo `juego.html`: el PDF necesita `assets/ficha-pdf.js`. No se requieren compilación, servidor de aplicación ni claves API.

CodeMirror y Skulpt se incluyen dentro de `assets/vendor/`, por lo que la ejecución no depende de una CDN. Un service worker agrega caché offline cuando el sitio se sirve mediante HTTPS, pero el recurso continúa siendo estático y no depende de esa función. Si CodeMirror o Skulpt no pueden iniciarse en un navegador muy antiguo, permanecen el editor de texto y el simulador básico.

Los respaldos CSS favorecen navegadores antiguos; no garantizan compatibilidad con cualquier versión obsoleta. Verificar la versión real del aula. Las preferencias visuales basadas en variables CSS pueden tener efecto limitado donde el navegador no las implemente.

El sello de la ficha PDF usa el formato `PY2` y restaura misiones completas y parciales al escribir el mismo nombre; los borradores de código permanecen en el almacenamiento local del navegador y no se muestran como un archivo de importación. El progreso detallado se guarda automáticamente en este navegador; cambiar de equipo, borrar los datos del sitio o cambiar de dominio puede impedir recuperar esos borradores. Se retiraron los controles visibles de respaldo JSON, conservando las rutinas internas por compatibilidad.

### Comprobación de lógica para colaboradores

Con Node.js: `npm test`. Comprueba las situaciones conversacionales de Pip, los sellos `PY2`, las tres campañas, los sprites normalizados, el QR y genera dos PDF de prueba —avance parcial y campaña completa— en la carpeta temporal del sistema; no sustituye las pruebas en navegadores.


## Arquitectura multitema v1.8.4

- `/calabozos/` — campaña RPG clásica.
- `/jujutsu/` — Academia Arcana original; la ruta se conserva por compatibilidad.
- `/multiverso/` — campaña original de ciencia caótica, portales y dimensiones.
- `/juego.html` — motor canónico compartido.
- `/assets/campaigns.js` — textos y nombres narrativos por campaña.
- `/assets/campaigns.css` — identidad visual por campaña.
- `/assets/premium-v184.css` — sistema visual ilustrado compartido, con paneles responsivos y proporciones normalizadas.
- `/assets/campaigns/*/sprites/` — hojas de seis fotogramas propias de Academia Arcana y Multiverso; Calabozos conserva sus hojas originales.
- `/assets/campaigns/*/portraits/` — primer fotograma normalizado para portada, fichas y PDF.
- `/assets/campaign-heroes-pdf-data.js` y `/assets/qr-pdf-data.js` — personaje de la campaña y QR embebidos en la ficha A4 sin conexión.
- `/shared/README.md` — documentación de la arquitectura común.

El progreso se almacena de forma compartida. Cambiar de ambientación no reinicia XP ni actividades.

### Pantallas, iframes y compatibilidad

La interfaz se prueba como objetivo principal en 1366×768 y se reorganiza desde 760 px hasta teléfonos pequeños. Los paneles de Pip, ficha y menú se anclan al borde visible, sin aparecer desplazados respecto del botón que los abre. En `?vista=pip` el chat ocupa el área disponible y conserva su cabecera completa. En CREA usá `width="100%"`; para el juego se recomienda una altura de 900–1100 px y para Pip independiente 620–720 px.

La `ñ` está permitida en textos, comentarios e identificadores Python. Python admite nombres Unicode; si el Skulpt incluido en un navegador antiguo no los procesa, el motor aplica una equivalencia temporal solo durante la ejecución y conserva intacto el código del estudiante en el editor.
