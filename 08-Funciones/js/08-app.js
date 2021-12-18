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

const reproductorNuevo = {
    reproducir: id => console.log(`Reproduciendo la cancion con el id: ${id}`),
    pausar: () => console.log(`Pausando...`),
    borrar: id => console.log(`Borrando la cancion con el id: ${id}`),
    agregarPlaylist: playlist => console.log(`Creando la Playlist ${playlist}`),
    reproducirPlaylist: playlist => console.log(`Reproduciendo ${playlist}...`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`)
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}
reproductorNuevo.reproducir(30);
reproductorNuevo.pausar();
reproductorNuevo.borrar(30);
reproductorNuevo.agregarPlaylist('Rock Nacional');
reproductorNuevo.reproducirPlaylist('Rock Nacional');
reproductorNuevo.nuevaCancion = 'Enter Sand Man';
reproductorNuevo.obtenerCancion;
