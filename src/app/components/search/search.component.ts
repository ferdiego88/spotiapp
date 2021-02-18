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
  loading: boolean;
  constructor(private spotifyService: SpotifyService) {
    this.loading = false;
   }

  buscar(termino: string): void{
    console.log(termino);
    this.loading = true;
    this.spotifyService.getArtista(termino)
      .subscribe((data: any) => {
          this.artistas = data;
          console.log(this.artistas);
          this.loading = false;
      });
  }
}
