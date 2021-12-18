const usuario = false;
const puedePagar = false;

//Operador and (&&) evalua que se cumplan ambas condiciones.

if(usuario && puedePagar){
    console.log('Si, eres usuario y puedes pagar')
}else if(!usuario && !puedePagar){
    console.log('No, no puedes comprar')
}
else if(!usuario){
    console.log('Inicia sesión o saca una cuenta')
}else if(!puedePagar){
    console.log('Fondos insuficientes')
}

//Operador or (||) evalua que se cumpla una al menos.
const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalAPagar = 600;

if(efectivo > totalAPagar || credito > totalAPagar || disponible > totalAPagar){
    console.log('Si podes pagar.')
} else{
    console.log('Fondos insuficientes')
}
