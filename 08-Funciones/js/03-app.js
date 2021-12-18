//Comunicacion entre funciones.
iniciarApp(); //Funcion que incia toda la App...
function iniciarApp(){
    console.log('Iniciando app...');
    segundaFuncion();
}
function segundaFuncion(){
    console.log('Desde segunda funcion');
    autenticandoUsuario('Aaron'); //Argumento pasado.
}
function autenticandoUsuario(usuario = 'Desconocido'){ //Pasando paramentro para ser llamado por segunda funcion.
    console.log(`${usuario} autenticado correctamente...`)
}