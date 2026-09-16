# Motor compartido

Las campañas `calabozos/`, `jujutsu/` y `multiverso/` usan **un único motor canónico**: `../juego.html` y `../assets/`.

Las páginas `juego.html` dentro de cada campaña son cargadores livianos: obtienen el motor raíz, insertan una base común y fijan la ambientación a partir de la ruta. Así no se duplican los 39 desafíos, validadores, Pip, progreso, PDF ni librerías.

Para modificar lógica curricular, editar el motor raíz y los archivos de `assets/`. Para agregar una ambientación, editar `assets/campaigns.js`, `assets/campaigns.css` y crear una nueva carpeta de entrada siguiendo las existentes.
