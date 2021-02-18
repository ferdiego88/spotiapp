import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../providers/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent   {
  artista: any = {};
  topTracks: any[] = [];
  loadingArtist: boolean;
  constructor(private activatedRoute: ActivatedRoute,
              private spotify: SpotifyService) {
    this.loadingArtist = true;
    this.activatedRoute.params.subscribe( params => {
      // console.log(params.id);
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });
   }

   getArtista(id: string): void{
    this.loadingArtist = true;
    this.spotify.getArtista(id)
      .subscribe(artista => {
        this.artista = artista;
        console.log(this.artista);
        this.loadingArtist = false;
      });
   }

   getTopTracks(id: string){
    this.spotify.getTopTracks(id)
      .subscribe(topTracks => {
        this.topTracks = topTracks;
        console.log(this.topTracks);
      });
   }

}
