# Videoteca
El objetivo de la práctica es crear una aplicación con la que gestionar
nuestras películas favoritas como colecciones.

## Comentarios
Por motivos de tiempo me queda por terminar la parte de las colecciones.
La parte del diseño de interfaz está sin hacer porque es la primera vez que hago una web completa. Hasta ahora solo había toqueteado parametros de CSS de plantillas ya hechas y poco más. Hice un curso de HTML + CSS básico y no es que me apasione el CSS la verdad.

## Arquitectura
Para obtener los datos de películas, utilizaremos el api de
https://developers.themoviedb.org/3

La aplicación guardará en localStorage las colecciones del usuario y
las puntuaciones que cada pelicula tenga dentro de cada colección.

La interfaz de la aplicación deberá realizarse con React.

## Funcionalidad
- Permitirá al usuario buscar directamente (/search/movie) películas para
añadirlas a cada colección.
- A parte, la propia aplicación ofrecerá una lista de sugerencias de películas
populares (usando el endpoint /discover/movie?sort_by=popularity.desc) que
también podrán añadirse a las colecciones del usuario.
- El usuario debe poder valorar las películas de su colección dando una
puntuación a cada una.
- Podrá crear tantas colecciones como desee, y podrá modificarlas añadiendo
o eliminando películas.
- También habrá una vista de detalle de cada película en la que mostrar
directamente los datos de la misma obtenidos del API de themoviedb.
Collapse
