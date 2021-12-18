//continue: interceptar un elemento, identificarlo y continuar con la ejecución.
for(let i = 0; i <= 10; i++){
    if(i === 5){
        console.log(`Es el numero 5`);
        continue; //Esto hace que haga un salto a la siguiente iteracion.
    }
    console.log(`numero: ${i}` );
}

//break: corta la ejecución.
for(let b = 0; b <= 10; b++){
    if(b === 5){
        console.log(`Va a cortar la ejecución cuando llegue a 5`);
        break; //Cortando ejecución.
    }
    console.log(`${b}`);
}

//Ejemplo de uso.
let carrito = [
    {
        nombre: 'Televisor', precio:500
    },
    {
        nombre: 'Monitor', precio: 600, descuento: true
    },
    {
        nombre: 'Mouse', precio: 1200
    }
];
for(let c = 0; c < carrito.length; c++){
    if(carrito[c].descuento){
        console.log(`El producto ${carrito[c].nombre} tiene descuento`)
        continue; //Hacemos el salto de ejecución cuando encuentre el carrito.descuento
    }
    console.log(`${carrito[c].nombre}`);
}