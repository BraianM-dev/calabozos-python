# Cambios

## v1.8.1 · Aventuras & Python · tres ambientaciones

- La portada pasa a **Aventuras & Python** y permite elegir entre `calabozos/`, `jujutsu/` y `multiverso/`.
- Se incorpora **Multiverso & Python**, una ambientación original de ciencia caótica, portales y dimensiones, con identidad propia y sin recursos oficiales de franquicias.
- Las tres carpetas cargan un único `juego.html` canónico; no se duplican los 39 desafíos ni sus validadores.
- `?tema=` sigue filtrando contenido curricular y `?campana=` sigue seleccionando la ambientación.
- XP, misiones completadas, borradores, accesibilidad y ficha se comparten entre campañas.
- La interfaz web migra los personajes y estados de Pip a sprites **SVG** originales para reducir peso y mejorar la publicación en GitHub Pages.
- Se actualiza el caché offline a `v1-8-1` y se agregan las entradas de las tres campañas.

## v1.8.0 · Multi-tema

- Se toma **v1.7.1** como base funcional.
- Se separa la ambientación de la lógica curricular mediante `assets/campaigns.js` y `assets/campaigns.css`.
- Se incorporan dos campañas: **Calabozos & Python** y **Jujutsu & Python** (fan educativa).
- Nuevo parámetro `?campana=`; `?tema=` continúa filtrando contenidos curriculares.
- El progreso, XP, borradores y ficha se comparten al cambiar de campaña.
- Pip usa **andamiaje fuerte por defecto** y se elimina el selector de nivel de ayuda de la interfaz.
- Accesibilidad: el control pasa a llamarse **Reducir movimiento**.
- La campaña Jujutsu reutiliza recursos originales del proyecto y CSS; no incorpora arte oficial de la franquicia.
- Se mantienen los 39 desafíos, Skulpt, CodeMirror, PDF, persistencia, modo iframe/CREA y recorrido visual del héroe.

# Versión 1.7.1 — Barra simplificada

- Retirados los botones visibles Guardar e Importar, manteniendo las rutinas internas de respaldo.
- Conservados el guardado automático, la ficha PDF, el sello, las misiones y Pip.
- Manual y documentación sincronizados con la interfaz; aclarados los límites del sello.

# Versión 1.7.0 - Edición definitiva de interfaz

- Se retiró el informe formativo docente y todo acceso visible asociado.
- Guardar, importar y exportar la ficha PDF pasan a la barra superior junto con Mapa, Ficha, Ayuda y Ajustes.
- La ficha del héroe comienza cerrada para dejar libre el área de misión y editor.
- Las seis acciones rápidas de Pip se presentan como botones separados y legibles.
- El aviso sobre los límites de Pip aparece al abrir el chat y se retira automáticamente.
- Se incorpora un ajuste específico para 1366 × 768, además de los puntos de corte para tablets y teléfonos.

# Versión 1.6.2 - Interfaz móvil y pantallas pequeñas

- Barra superior táctil con acciones desplazables, sin comprimir los botones.
- Misión, editor, consola y actividades reorganizados para teléfonos y tablets.
- Pip funciona como panel de pantalla completa en móviles y conserva una vista compacta en `?vista=pip`.
- Ficha del héroe, configuración y accesibilidad se presentan como paneles inferiores utilizables con una mano.
- Ruta del héroe adaptada a anchos pequeños sin perder el personaje ni el progreso.
- Manual, guía docente, informe y páginas de iframe comparten el mismo ajuste responsive.
- Se contemplan orientación horizontal, teclado virtual, áreas seguras y objetivos táctiles de 44 px.

# Versión 1.5.0 - Personajes animados cuadro a cuadro

- Se retiró la falsa animación que desplazaba una imagen estática y se sustituyó por doce hojas de sprites originales: cuatro clases por tres etapas.
- Cada hoja contiene seis fotogramas reales. Cambian ojos, cabeza, brazos, manos, capa, equipo y efectos de clase.
- Mago anima gesto, libro y magia; Guerrero, postura, escudo, espada y capa; Arquero, arco, carcaj y hojas; Explorador, mapa, farol y señalización.
- La secuencia de reposo se reproduce con bajo consumo; cada misión ganada activa la acción completa y cada evolución reproduce una transformación.
- La evolución ahora depende directamente de los 39 desafíos: inicial (0–12), veterana (13–25) y legendaria (26–39).
- Los sprites están optimizados a aproximadamente 536 KB en total y no requieren bibliotecas, vídeo ni conexión adicional.
- «Reducir movimiento» congela el primer fotograma sin ocultar al personaje ni afectar el progreso.

# Versión 1.4.1 - Ficha viva del héroe

- Eliminado el aro punteado giratorio y sustituido el retrato vertical por un medallón circular con encuadre automático del personaje.
- El personaje tiene movimiento propio: reposo, saludo al señalarlo, celebración al ganar XP y transformación al cambiar de etapa.
- El medallón se puede activar con ratón, teclado o pantalla táctil para consultar la etapa y hacer reaccionar al héroe y a Pip.
- Tres gemas muestran de forma anticipada las etapas inicial, veterana y legendaria.
- Cada clase tiene un ritmo visual ligeramente diferente; todas las animaciones se detienen mediante «Reducir movimiento» o la preferencia del sistema.
- La recompensa continúa vinculada a aprendizaje real: XP, criterios logrados, objetos y evolución; no incorpora azar, rachas obligatorias ni mecanismos compulsivos.

# Versión 1.4.0 - Héroes evolutivos y balance de XP

- La ficha del héroe sustituye los emojis por ilustraciones propias de Mago, Guerrero, Arquero y Explorador.
- Cada clase tiene tres etapas visuales —inicial, veterana y legendaria— que se desbloquean en los niveles 1, 4 y 8. La identidad del personaje se conserva y evolucionan el equipo, la postura y el aura.
- El retrato animado de la ficha respeta la preferencia «Reducir movimiento» y utiliza imágenes estáticas como respaldo para navegadores antiguos.
- El PDF exportado selecciona la misma clase y etapa visual que se ve en el juego.
- Se registra cada reducción de XP con misión, cantidad y causa. La ficha en pantalla muestra el historial completo y el PDF lo resume mediante códigos explicados, manteniéndose en una sola hoja A4.
- La reducción de XP se presenta como retroalimentación formativa: intentos/criterios parciales y similitud con ejemplos quedan diferenciados para que el estudiante sepa cómo mejorar.

# Versión completa definitiva · 10 de septiembre de 2026

- Se restauró la estructura visual y funcional estable del juego: ingreso, bienvenida, mapa, editor, ejecución Python, Pip, inventario, accesibilidad, progreso, sello e integración por iframe.
- La campaña crece de 29 a **39 desafíos**. Hay código libre, código incompleto, cinco misiones para ordenar bloques y cinco preguntas de predicción con opciones.
- Los bloques admiten arrastre, botones subir/bajar y teclado. Las misiones pueden abrirse con `?nivel=id`; `?bienvenida=1` repite la introducción.
- Pip conserva todas sus respuestas anteriores y suma un modo de tutoría contextual: guía socrática en tres niveles, devolución tipo docente, revisión de claridad, explicación de una línea concreta, predicción de la salida y estructuras con huecos cuando se solicita la solución completa. Usa la misión, el editor, los intentos y el checklist para decidir la ayuda.
- La consigna completa y sus pasos aparecen juntos dentro de «⚔ Misión», con tipografía de sistema más legible, mayor contraste y jerarquía visual. Se retiró la dependencia de fuentes web.
- Se añadió `manual-jugador.html`, con instrucciones de juego, tipos de interacción, accesibilidad, preguntas útiles para Pip y resolución de problemas.
- La ficha del héroe, Pip, el inventario y los logros incorporan animaciones breves y significativas: órbita de nivel, carga de XP, entrada del tutor y celebración por avances reales. El control «Reducir movimiento» y la preferencia del sistema las desactivan. No se usan premios aleatorios ni ciclos compulsivos.
- La consola detecta ñ y tildes usadas como identificadores antes de ejecutar, explica el problema y propone nombres compatibles como `dano` o `danio`. Los textos y comentarios pueden conservar la ortografía española.
- La ficha de avance usa un motor PDF local y queda en **una sola página A4**, incluso con la campaña completa. Se rediseñó como pergamino RPG en azul medianoche, azul real, oro, brasa y papiro; integra el emblema aportado, atributos, ruta, inventario, logros, próximo capítulo, reflexión y un sello de continuidad protagonista. El pie está centrado; la autoría no aparece en el contenido y queda exclusivamente en los metadatos del PDF.
- Pip estrena un avatar original de profesor-búho, optimizado para web, con movimiento CSS liviano y presentación estática compatible como respaldo.
- Se añadieron fallbacks de CSS y editor de texto para navegadores con capacidades limitadas. Skulpt y CodeMirror siguen siendo dependencias externas; la ejecución de Python requiere conectividad al cargarlos por primera vez.
- Licencia Creative Commons Atribución 4.0 Internacional (CC BY 4.0) consistente en el sitio y el archivo LICENSE.

## Verificación realizada

Se comprobó sintaxis, identificadores únicos, 28 consultas de Pip, tutoría progresiva, alcance de FizzBuzz, los diez desafíos nuevos, la detección de identificadores incompatibles y dos exportaciones PDF reales. Se recorrieron en navegador la bienvenida, el ingreso, el mapa, Pip, una misión de código, una de bloques, la consola y el manual. Los PDF con avance parcial y campaña completa fueron renderizados e inspeccionados como una sola página A4.

Para una validación institucional todavía corresponde realizar un pilotaje con estudiantes y registrar pruebas en las versiones antiguas concretas de Firefox y Chromium disponibles en cada sala.
# Versión 1.2.0 - Pip vivo y pergamino d20

- El sello circular `PY` del PDF fue sustituido por un d20 vectorial con facetas.
- El pie del pergamino incorpora un remate de losas de mazmorra y conserva una sola hoja A4.
- Pip dispone de seis estados visuales: atento, parpadeo, pensando, explicando, celebrando y advertencia.
- Las respuestas seleccionan automáticamente una expresión según el contexto.
- Pip parpadea de forma ocasional y vuelve a la postura atenta; el movimiento se desactiva con la preferencia de accesibilidad.
- La hoja de estados de Pip es un recurso original incluido bajo CC BY 4.0.
# Versión 1.2.1 - D20 y héroe personalizado

- Sustituido el trazado con apariencia de pentagrama por una proyección facetada de un dado d20.
- Eliminado el recuadro independiente de licencia CC BY 4.0; la licencia permanece en el pie centrado.
- El pergamino muestra al mago, guerrero, arquero o explorador elegido por el estudiante.
- Si no existe una clase reconocida, se utiliza un dragón guardián original.
# Versión 1.3.0 - Iframes y manual completo

- El botón Inicio se oculta en recursos embebidos por tema.
- `?vista=pip` usa el alto disponible y deja de heredar offsets del chat flotante.
- El manual incorpora buscador, glosario completo, ejemplos, imágenes y los 39 niveles sincronizados con el juego.
- Ayuda rápida enlaza directamente al glosario y al catálogo de niveles.
# Versión 1.3.1 - Accesibilidad global

- Tema y accesibilidad están disponibles en todos los HTML del proyecto.
- Las preferencias se comparten entre juego, manual, guía, índice y ejemplos.
- Se incluyen tema claro/oscuro, cuatro tamaños, alto contraste, lectura fácil y reducción de movimiento.
# Versión 1.6.0 - Dominio, estados del héroe y autonomía offline

- El héroe incorpora estados independientes de reposo, pensamiento, ejecución, éxito, error, interacción y evolución. Las acciones intensas se activan por eventos y vuelven al reposo.
- Se mantienen tres transformaciones principales y se agregan doce mejoras menores, aproximadamente una cada tres misiones.
- Se conservan los 39 desafíos y se diversifican las evidencias: depuración, casos de prueba, explicación, comparación, mejora de nombres, refactorización y tabla de seguimiento.
- Completar una misión otorga todo su XP. Se eliminan descuentos por intentos y por similitud automática; los intentos se conservan como evidencia formativa.
- Las runas de dominio son recuperables al revisar una misión. La Nota /10 se reemplaza por Dominio porcentual.
- La partida completa puede exportarse e importarse como JSON versionado, incluidos borradores, clase, historial, runas, reflexión y preferencias. El sello continúa como recuperación rápida.
- Se incorpora un informe docente separado e imprimible, sin alterar el pergamino RPG del estudiante.
- Pip suma acciones rápidas, límites explícitos y un nivel máximo de ayuda configurable.
- CodeMirror y Skulpt se incluyen localmente. El sitio ya no depende de CDNs y agrega caché offline opcional en HTTPS.
- Se reorganizan los controles: ayuda y manual permanecen agrupados; accesibilidad y tema se concentran en Ajustes; Reiniciar deja la barra principal.

# Versión 1.6.1 - Ruta visual del héroe

- Se incorpora un recorrido inferior con una posición por misión y los hitos Veterano, Legendario y Dragón.
- El personaje seleccionado camina hasta la nueva posición únicamente al completar una misión y conserva su avance al recargar.
- La ruta se adapta al tema abierto en los iframes de CREA y no aparece en la vista independiente de Pip.
- La animación respeta la preferencia del sistema y el control global de reducción de movimiento.
