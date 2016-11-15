import { Injectable } from '@angular/core';
import {ModelPelicula} from './modelo/model-pelicula'

@Injectable()
export class ServPeliculasService {

  listaDeNumeros: number[];
 // pelis: any[];

  groupsService: any[];

  constructor() { 
    this.listaDeNumeros = [1,2,4,5,7,9,11,17,18,25,44,73,88,91];
   /* this.pelis = [
      (1,'peli1','director1','sinposis1','20100112'),
      (2,'peli2','director2','sinposis2','20110110'),
      (3,'peli3','director3','sinposis3','20130118'),
      (4,'peli4','director4','sinposis4','20150116')      
      ];*/

      this.groupsService=[
     {
       "name": "pencils",
       "items": "red pencil"
     },
     {
       "name": "rubbers",
       "items": "big rubber"
     },
  ];
  }
  
    OrdenaPeliculas(){

    
  }
  
}
