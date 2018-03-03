# Lista de empleados

## Para JS

- [ ] Clona el proyecto e instala las dependencias
- [ ] El archivo `src/App.js` crear una tabla que muestre todos las propiedades de los empleados
- [ ] El salario está en pesos mexicanos
- [ ] Mostrar el salario en formato de dinero, es decir 16900 se muestra como $ 16,900.00
- [ ] Si el salario tuviera decimales se deben mostrar limitados a 2 decimales, es decir 16900.333 se debe mostrar como $ 16,900.33
- [ ] Agregar empleados (Un botón al principio o final de la tabla)
- [ ] Editar empleados (Un botón al principio o final de la tabla)
- [ ] El nombre de la empresa no se debe poder modificar
- [ ] Borrar empleados (Un botón de borrar por cada empleado)
- [ ] Agregar un botón que muestre los salarios en USD, tipo de cambio de US $1 = MXN $21.50
- [ ] Estado con empleados, si se están mostrando los salarios con MXN o USD,el tipo de cambio
- [ ] Poder filtrar empleados con un campo que permita buscar a los empleados por nombre y empresa
- [ ] El mismo campo debe funcionar para nombre y empresa
- [ ] Se deben actualizar los resultados conforme se vayan escribiendo
- [ ] Agregar un botón que imprima la lista de empleados a la consola

## Para CSS

Ejecutar SASS con `sass -w css/main.scss:src/main.css`

El CSS para la tabla puedes colocarlo en el archivo `css/main.scss`

La tabla debe contener las siguientes características, algunas necesitarán agregar clases con CSS

- [ ]  Las filas deben de alternar el color del fondo
- [ ]  Al hacer hover en una fila debe cambiar el color del fondo
- [ ]  Los montos deben ir alineados a la derecha
- [ ]  Los caracteres de los montos deben estar monoespaciados
- [ ]  Si el salario es menor a 10,000 mostrarlo en color rojo, si es mayor mostrarlo en color verde
- [ ]  Los botones de texto (como agregar nuevo empleado o imprimir a consola) deben tener fondo transparente y tener texto y borde en color verde
- [ ]  Al hacer hover deben de poner su color de fondo con el mismo color del borde y el texto pasa a ser color blanco, esto debe tener una transición
