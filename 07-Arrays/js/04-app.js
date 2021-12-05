//Forma declarativa
const carrito = [];

const Producto = function(nombre, precio, disponibilidad){
    this.nombre = nombre;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
}

const televisor = new Producto('Televisor 20 pulgadas', 500, true);
const parlante = new Producto('Parlante', 400, false);
const impresora = new Producto('Impresora', 5000, true);

resultado = [...carrito, televisor, parlante, impresora];
console.table(resultado);
console.log(resultado);

//Explicación de lo que estamos haciendo.
/* Creamos la constante carrito, la inicializamos vacía. Creamos un object constructor para poder crear productos dinamicamente, creamos un array resultado y con el spread operator copiamos el array de carrito, y le ponemos los tres productos dentro. 
Hay que tener en cuenta que la forma en la que se colocan los productos es el orden en el que van a ir.
En el siguiente ejemplo cambiamos de posicion el nuevo producto*/

const gpu = new Producto('Placa de video', 10000, true);
resultado2 = [gpu, ...resultado];
console.table(resultado2);
