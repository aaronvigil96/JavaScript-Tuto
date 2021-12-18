const puntaje = 900;
if(puntaje == 1000){ //Condicion a cumplir
    console.log('Si es igual');
}else { //Si no se cumple la condicion, se ejecuta esto
    console.log('No es igual')
}
/* 
    == es igual a...
    != diferente a...
    === estrictamente igual a...
    !== estrictamente diferente a...
    > mayor a...
    < menor a...
    >= mayor o igual a...
    <= menor o igual a...

*/
const dinero = 300,
    totalAPagar = 500,
    tarjeta = false,
    cheque = true;
if(dinero >= totalAPagar){
    console.log('Si, puede pagar.')
}else if(tarjeta){
    console.log('Si puedo pagar porque tengo la tarjeta')
}else if(cheque){
    console.log('Si, puede pagar porque tiene cheque')
}
 else {
    console.log('No, no puede pagar.')
}