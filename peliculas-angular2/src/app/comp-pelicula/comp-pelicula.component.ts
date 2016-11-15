import { Component, OnInit } from '@angular/core';
import {ModelPelicula} from '../modelo/model-pelicula'
import { ServPeliculasService } from '../serv-peliculas.service';


@Component({
  selector: 'app-comp-pelicula',
  templateUrl: './comp-pelicula.component.html',
  styleUrls: ['./comp-pelicula.component.css'],
  providers:[ServPeliculasService]
})
export class CompPeliculaComponent implements OnInit {


  private ModelPelicula: ModelPelicula;

groupsService: any[];
 /* peliculas: pelis[]; /* = [
      new ModelPelicula(1,'peli1','director1','sinposis1','20100112'),
      new ModelPelicula(2,'peli2','director2','sinposis2','20110110'),
      new ModelPelicula(3,'peli3','director3','sinposis3','20130118'),
      new ModelPelicula(4,'peli4','director4','sinposis4','20150116')      
      ];*/

  constructor(private servPeliculasService: ServPeliculasService) { 
    this.ModelPelicula = new ModelPelicula("","");
  //  this.ModelPelicula =  this.ServPeliculasService.pelis[0];
  this.groupsService =  this.servPeliculasService.groupsService;
  }

enviarFormulario(formulario: any){
    console.log("Datos del formulario enviado: " + formulario);
    console.log("Pelicula : " + this.ModelPelicula);
  //  this.ModelPelicula.titulo = "Otro valor"; 
   // this.ModelPelicula.titulo = formulario.titulo;
  }

groups=[
     {
       "name": "pencils",
       "items": "red pencil"
     },
     {
       "name": "rubbers",
       "items": "big rubber"
     }
  ];

groups0=[
     {
       "name": "pencils",
       "items": ["red pencil","blue pencil","yellow pencil"]
     },
     {
       "name": "rubbers",
       "items": ["big rubber","small rubber"]
     },
  ];


pelis0=[
     {
       "name": "pencils",
       "items": ["red pencil","blue pencil","yellow pencil"]
     },
     {
       "name": "rubbers",
       "items": ["big rubber","small rubber"]
     },
  ];



  ngOnInit() {
  }

}
