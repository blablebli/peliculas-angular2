/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServPeliculasService } from './serv-peliculas.service';

describe('Service: ServPeliculas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServPeliculasService]
    });
  });

  it('should ...', inject([ServPeliculasService], (service: ServPeliculasService) => {
    expect(service).toBeTruthy();
  }));
});
