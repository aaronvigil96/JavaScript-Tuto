//Acá muestro el this. El this hace referencia al scope,¿Que quiere decir? a una propiedad dentro del objeto donde estamos posicionados.
const producto = {
    nombre: "Monitor 16 pulgadas",
    precio: 500,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un valor de: ${this.precio}`)
    }
}
producto.mostrarInfo();

//Forma mal hecha. Para poder acceder a nombre y precio deberíamos declarar las variables. Haciendo poco eficiente el objeto.
const producto2 = {
    nombre: "Monitor 16 pulgadas",
    precio: 500,
    disponible: true,
    mostrarInfo: function() {
        let nombre = 'hola';
        let precio = 300;
        console.log(`El producto: ${nombre} tiene un valor de: ${precio}`)
    }
}
producto.mostrarInfo();
producto2.mostrarInfo();