//Un array es un conjunto de datos, usalmente del mismo tipo.
//Formas de crear array, aunque la ultima es poco usual.
//Los arreglos (Arrays) utilizan indices, ¿que quiere decir esto? que en el array numeros, la posicion de 10 es 0, la posicion de 20 es 1 y la posicion de 30 es 2.
//En un array sería igual que el objeto llave: 10, valor: 0. Haciendo referencia al array numeros.
const numeros = [10, 20, 30, [1,2,3]];
const meses = new Array('Enero','Febrero','Marzo');
const deTodo = ['String', true, null, undefined, 500, {nombre: 'Aaron', apellido: 'Vigil'}, [1,2,3]];

//Forma de mostrar la posicion de todos los elementos dentro del array.
console.table(numeros);

//Acceder al valor de un determinado elemento.
console.log(numeros[1]);

//Accediendo a la subposicion del array dentro del array.
console.log(numeros[3][2]);