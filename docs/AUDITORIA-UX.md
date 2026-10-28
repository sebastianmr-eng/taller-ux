# Auditoría UX: app-notas

Pantalla evaluada: aplicación de notas personales (versión original vs. rediseñada).

## Heurísticas de Nielsen

| Heurística                     | Problema original                                              | Solución aplicada                                                                   |
| ------------------------------ | -------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Visibilidad del estado         | Al agregar o borrar una nota no aparecía ningún aviso.         | Mensajes "Nota agregada", "Nota eliminada" y "Nota restaurada" con `role="status"`. |
| Coincidencia con el mundo real | El botón decía "ok" y el texto "procesar la solicitud".        | Botón "Agregar nota" y textos en lenguaje cotidiano.                                |
| Control y libertad             | "BORRAR" eliminaba al instante, sin forma de volver atrás.     | Botón "Deshacer" en el mensaje tras eliminar.                                       |
| Prevención de errores          | Permitía agregar notas vacías.                                 | El botón "Agregar nota" está desactivado hasta que se escribe algo.                 |
| Reconocer, no recordar         | El campo solo tenía `placeholder`, que desaparece al escribir. | `<label>` visible para cada campo.                                                  |

## Leyes de usabilidad

- **Fitts:** el botón "Agregar nota" ocupa todo el ancho y mide 44 px de alto; "Eliminar" también mide 44 px y queda apartado del botón principal.
- **Hick:** la categoría se elige entre solo 3 opciones (Estudio, Trabajo, Personal) en lugar de escribirla libremente.
- **Miller:** las notas se agrupan por categoría con su contador, así no se muestra una lista larga sin orden.
