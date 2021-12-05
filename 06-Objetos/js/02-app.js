//Objetos dentro de objetos.
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        peso: '1kg',
        medida: '1 metro'
    },
    fabricacion: {
        pais: 'Argentina',
        ciudad: {
            codigoP: '1980',
            nombreC: 'Brandsen'
        }
    }
}

//Destructuring de objetos anidados.
const { nombre, fabricacion, fabricacion: {ciudad, ciudad: { nombreC } } } = producto;
console.log(nombre, nombreC, ciudad);