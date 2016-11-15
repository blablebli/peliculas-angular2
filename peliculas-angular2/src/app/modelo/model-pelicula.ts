export class ModelPelicula {
      constructor(
        public titulo: string,
        private director: string,
        private sinopsis?: string,
        private fecha?: string
    ){}
    toString():string{
        return "Pelicula: \n\tTitulo: " + this.titulo + "\n\tDirector:" + this.director + "\n\tSinopsis:\n" + this.sinopsis + "\n\tFecha:\n" + this.fecha;
    }
}

