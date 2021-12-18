//For loop
//Se ejecuta hasta que el codigo deje de cumplir una condicion.
for(let i = 0/*Inicio*/; i <= 10 /*Hasta donde*/; i++ /*Adicion en cada vuelta*/ ){
    console.log('Numero:' + [i]);
}
//Posibles adiciones:
/* 

++ por cada vuelta adiciona uno.
+= 2, por cada vuelta adiciona 2.

*/

for(let a = 1; a <= 100; a++){
    if(a % 2 === 0){
        console.log(`El numero: ${[a]} es PAR`);
    }else {
        console.log(`El numero: ${[a]} es IMPAR`)
    }
}

//Iterando un array.
let carrito = [
{
    nombre: 'Televisor', Precio:500
},
{
    nombre: 'Monitor', precio: 600
},
{
    nombre: 'Mouse', precio: 1200
}
];
//Recorremos el array carrito por la longitud, y luego mostramos en pantalla el nombre.
for(let b = 0; b < carrito.length; b++){
    console.log(carrito[b].nombre)
}