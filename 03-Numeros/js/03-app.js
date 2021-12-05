//Objeto math.
console.log(Math);
let resultado;

// Pi
resultado = Math.PI;

// Redondear
resultado = Math.round(2.8); //Redondea hacía arriba (3)
resultado = Math.round(2.1); //Redondea hacía abajo (2)
resultado = Math.round(2.5); //Redondea hacía arriba (3)

// Redondear hacía arriba.
resultado = Math.ceil(2.1); //Redondea hacía arriba (3)

// Redondear hacía abajo.
resultado = Math.floor(2.8); //Redondea hacía abajo (2)

// Raiz cuadrada.
resultado = Math.sqrt(144); //Raiz cuadrada de 144 es 12.

// Absoluto
resultado = Math.abs(-500) //El valor absoluto de -500 es 500.

// Potencia
resultado = Math.pow(2, 4) //2 a la potencia de 4 es 16 (2x2x2x2).

// Minimo
resultado = Math.min(2, 3, 4, 5, 6) //Retorna 2, porque es el minimo.

// Maximo
resultado = Math.max(2, 3, 4, 5, 6) //Retorna 6, porque es el maximo.

// Random
resultado = Math.random(); //Retorna un numero aleatorio, la mayoria de las veces es un numero flotante.

// Random aleatorio entero
resultado = Math.floor( Math.random() * 3); //Retorna un numero aleatorio del 0 al 30.