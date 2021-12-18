//Siempre que se retorne algo tiene que tener una variable a la cual asignarle ese valor, un lugar donde se guarde.
function sumar(a, b){
    return a + b; //Return, para retornar determinada cosa.
}
const resultado = sumar(5, 6); //resultado tiene la suma entre 5 y 6.
console.log(resultado)

//Ejemplo avanzado...
let total = 0;
function agregarCarrito(precio){
    return total += precio; //Se va a ir adicionando el precio a medida que es llamada la funcion con el argumento.
}
agregarCarrito(500);
agregarCarrito(660);

function agregarIva(total){
    return total * 1.10; 
}

totalAPagar = agregarIva(total);
console.log(totalAPagar);
console.log(total);