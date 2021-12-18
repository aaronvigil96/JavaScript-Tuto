//For of.
//For off itera sobre arreglos.
const pendientes = ["Comer","Estudiar","Trabajar","Estudiar JavaScript"];
const carrito = [
    {nombre: "Mouse", precio: 300},
    {nombre: "Teclado", precio: 400},
    {nombre: "GPU", precio: 6000},
    {nombre: "CPU", precio: 5000}
]

for (let pendiente of pendientes){ //Recorriendo un array
    console.log(pendiente);
}

for (let producto of carrito){ //Recorriendo otro array
    console.log(producto.precio);
}

/* ---------------------------------------------------------------------------- */
//For in
//For in itera sobre objetos.
const automovil = {
    modelo: 'Peugeot',
    year: '2005',
    motor: '1.6'
}
for (let propiedad in automovil ){
    console.log(`${automovil[propiedad]}`) //Accediendo a las propiedades de automovil.
}


//For ECS7
for (let [llave, valor] of Object.entries(automovil)){
    console.log(llave); //Accediendo a la valle del objeto.
    console.log(valor); //Accediendo al valor del objeto.
}