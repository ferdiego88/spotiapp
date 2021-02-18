import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../providers/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent{
  artistas: any[] = [];
  constructor(private spotifyService: SpotifyService) { }

  buscar(termino: string): void{
    console.log(termino);
    this.spotifyService.getArtista(termino)
      .subscribe((data: any) => {
          this.artistas = data;
          console.log(this.artistas);
      });
  }
}
