import { PeliculasAngular2Page } from './app.po';

describe('peliculas-angular2 App', function() {
  let page: PeliculasAngular2Page;

  beforeEach(() => {
    page = new PeliculasAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
