const carrito = [
    {nombre: "Televisor", precio: 500},
    {nombre: "Mouse", precio: 300},
    {nombre: "Teclado", precio: 400},
    {nombre: "CPU", precio: 5000},
    {nombre: "GPU", precio: 50000}
];
let total = 0;
//forEach para ir adicionando.
carrito.forEach(producto => total += producto.precio);
console.log(total);

//reduce para ir adicionando.
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(resultado);

