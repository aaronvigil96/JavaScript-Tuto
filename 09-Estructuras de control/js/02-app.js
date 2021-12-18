// Switch case
const metodoPago = 'efectivo';

//case: si la condicion coincide con el case, entonces ejecuta lo que está dentro de ese case.
//break: corta la ejecución.
//default: se ejecuta en caso que ningun case cumpla con la condicion.
switch(metodoPago){
    case 'efectivo':
        pagar();
        break;
    case 'cheque':
        console.log('Pagaste con: ' + metodoPago)
        break
    case 'tarjeta':
        console.log('Pagaste con: ' + metodoPago)
        break
    default:
        console.log('Aun no has seleccionado un metodo de pago')
        break;
}

function pagar(){
    console.log('Pagaste con: efectivo')
}