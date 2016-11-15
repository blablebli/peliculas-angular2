import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CompPeliculaComponent } from './comp-pelicula/comp-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    CompPeliculaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
 // bootstrap: [AppComponent]
  bootstrap: [AppComponent, CompPeliculaComponent]
})
export class AppModule { }
