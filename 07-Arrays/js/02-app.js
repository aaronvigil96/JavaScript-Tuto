const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio'];
console.table(meses);

//Saber cuanto mide el arreglo meses.
console.log(meses.length);

//For
//Recorriendo el array meses.
for(let i = 0; i < meses.length; i++){
    console.log(meses[i]);
}

//Agregando nuevo valor a una posicion del array.
meses[0] = 'Hola'; //Acá estamos modificando un valor.
meses[7] = 'Agosto'; //Aca estamos agregando un nuevo dato al array.