# CALABOZOS & PYTHON

**Campaña RPG educativa para aprender los fundamentos de Python**

![Nivel](https://img.shields.io/badge/Nivel-9º%20EBI%20%2F%201º%20EMS-blue)
![Lenguaje](https://img.shields.io/badge/Lenguaje-Python-3776AB?logo=python&logoColor=white)
![Licencia](https://img.shields.io/badge/Licencia-CC%20BY%204.0-lightgrey)

---

## Descripción

**Calabozos & Python** es un recurso educativo gamificado en formato de juego de rol (RPG) interactivo. Los estudiantes avanzan por un mapa de calabozos resolviendo misiones de programación en Python, guiados por **Pip el Ayudante** (un NPC conversacional que explica conceptos y analiza código incompleto sin regalar soluciones).

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

## Características principales

| Característica | Descripción |
|----------------|-------------|
| Mapa de calabozos | 8 temas + misión bonus (Mini Chatbot) + jefe final (Dragón) |
| Sub-niveles | 2–3 desafíos por tema |
| Editor de código | CodeMirror con resaltado de sintaxis Python |
| Intérprete | Skulpt (Python en el navegador) |
| Validación | Checks reales del código (no simulada) |
| Pip el Ayudante | Explica conceptos y analiza fragmentos incompletos |
| Inventario RPG | Ficha del héroe + objetos al completar cada tema |
| Bonus FizzBuzz | while + if + módulo `%` (misión secreta) |
| Hoja de avance | Exportable a PDF con sello de progreso |
| Persistencia | localStorage + código de recuperación |
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
| Reducir movimiento | Desactiva animaciones (epilepsia / sensibilidad) |
| Clases de personaje | Mago, Guerrero, Arquero, Explorador (temas visuales) |

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

La nota se escala automáticamente a un máximo de **10** sobre el XP de ese tema.

### Embeber con iframe

Ver ejemplos detallados en **[guia-docente.html](guia-docente.html)**.

```html
<iframe
  src="juego.html?tema=print"
  width="100%"
  height="800"
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

---

## Estructura del proyecto

```
calabozos-python/
├── index.html          # Presentación e índice
├── juego.html          # Juego completo
├── guia-docente.html   # Orientaciones de uso, iframes, evaluación
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
5. **El Ataque Múltiple** · Bucles `for` y `while`
6. **La Mochila** · Listas
7. **El Grimorio** · Diccionarios
8. **El Libro de Hechizos** · Funciones personalizadas
9. **El Dado Mágico** · `random` + `try`/`except`
11. **Misión Secreta** · Mini Chatbot 9000
12. **Misión Secreta** · FizzBuzz del Dragón
13. **El Dragón Rojo** · Combate final

---

## Tecnologías

- HTML5 + CSS3 (variables CSS, diseño responsive)
- JavaScript (vanilla)
- [CodeMirror 5](https://codemirror.net/)
- [Skulpt](https://skulpt.org/)
- [jsPDF](https://github.com/parallax/jsPDF)

Funciona **sin servidor** y **sin suscripciones**.

---

## Guía docente

Abrí **[guia-docente.html](guia-docente.html)** para:

- Orientaciones de uso en el aula
- Ejemplos de iframe (local y GitHub Pages)
- Accesibilidad y DUA
- Evaluación y evidencia (PDF, sello de progreso)
- Problemas frecuentes

---

## Autor y licencia

**Braian Mosqueira** · Uruguay

Licencia **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**.  
Ver el archivo [LICENSE](LICENSE).

Se permite el uso, modificación y redistribución manteniendo la atribución al autor.

---

## Inspiración

Estructura y presentación inspiradas en recursos educativos de docentes uruguayos de Ciencias de la Computación. Pedagogía basada en DUA y gamificación responsable.
