//Añadiendo funciones a un objeto...
//Cuando un objeto tiene una funcion se llama método de propiedad.
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo la cancion con el id ${id}`);
    },
    pausar: function(){
        console.log('Pausando...');
    },
    borrar: function(id){
        console.log(`Borrando la cancion con el id: ${id}`);
    },
    agregarPlaylist: function(playlist){
        console.log(`Creando Playlist ${playlist}`);
    }
}

reproductor.reproducirPlaylist = function(playlist){ //Agregando metodo de propiedad luego del objeto...
    console.log(`Reproduciendo ${playlist}...`)
}

reproductor.reproducir(10);
reproductor.pausar();
reproductor.reproducir(50)
reproductor.borrar(50);
reproductor.agregarPlaylist('Metal');
reproductor.reproducirPlaylist('Metal');