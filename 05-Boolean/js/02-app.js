const autenticado = true;

if(autenticado){ //Se da por implicito esto: autenticado === true;
    console.log('Estás autenticado')
}else {
    console.log('No, no estás autenticado')
}

console.log(autenticado ? 'Si, estas autenticado' : 'No, no estás autenticado'); //Operador ternario.