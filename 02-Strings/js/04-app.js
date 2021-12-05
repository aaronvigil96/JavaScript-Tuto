const producto = "                  Televisor                      ";

//Eliminar espacios en blanco...
console.log(producto.trimStart()); //Elimina espacio en blanco al inicio.
console.log(producto.trimEnd()); //Elimina espacio en blanco al final.
console.log(producto.trimStart().trimEnd()); //Elimina en ambas direcciones.
console.log(producto.trim()); //Elimina en ambas direcciones.