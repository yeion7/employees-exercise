# Lista de empleados

*url:* https://build-suynxexobc.now.sh
*funcionamiento:* http://recordit.co/DRG6B2frWV

## scripts

* `build-css` compila los archivos sass de `./src`
* `watch-css` compila los archivos sass de `./src` en modo watch
* `start-js` compila archivos `.js` de `./src` y inicia servidor
* `start` inicia entorno de *desarrollo*
* `build-js` construye los archivos `.js` dentro `.src`
* `build` construye el proyecto para *producción*
* `test` ejecuta los test en modo watch
* `test:coverage` ejecuta los test y muestra la covertura
* `lint` verifica el código con *standard*

## Para JS

- [x] Clona el proyecto e instala las dependencias
- [x] El archivo `src/App.js` crear una tabla que muestre todos las propiedades de los empleados
- [x] El salario está en pesos mexicanos
- [x] Mostrar el salario en formato de dinero, es decir 16900 se muestra como $ 16,900.00
- [x] Si el salario tuviera decimales se deben mostrar limitados a 2 decimales, es decir 16900.333 se debe mostrar como $ 16,900.33
- [x] Agregar empleados (Un botón al principio o final de la tabla)
- [x] Editar empleados (Un botón al principio o final de la tabla)
- [x] El nombre de la empresa no se debe poder modificar
- [x] Borrar empleados (Un botón de borrar por cada empleado)
- [x] Agregar un botón que muestre los salarios en USD, tipo de cambio de US $1 = MXN $21.50
- [x] Estado con empleados, si se están mostrando los salarios con MXN o USD,el tipo de cambio
- [x] Poder filtrar empleados con un campo que permita buscar a los empleados por nombre y empresa
- [x] El mismo campo debe funcionar para nombre y empresa
- [x] Se deben actualizar los resultados conforme se vayan escribiendo
- [x] Agregar un botón que imprima la lista de empleados a la consola

## Para CSS

- [x]  Las filas deben de alternar el color del fondo
- [x]  Al hacer hover en una fila debe cambiar el color del fondo
- [x]  Los montos deben ir alineados a la derecha
- [x]  Los caracteres de los montos deben estar monoespaciados
- [x]  Si el salario es menor a 10,000 mostrarlo en color rojo, si es mayor mostrarlo en color verde
- [x]  Los botones de texto (como agregar nuevo empleado o imprimir a consola) deben tener fondo transparente y tener texto y borde en color verde
- [x]  Al hacer hover deben de poner su color de fondo con el mismo color del borde y el texto pasa a ser color blanco, esto debe tener una transición
