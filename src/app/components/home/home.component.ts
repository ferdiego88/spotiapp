import { Component } from '@angular/core';
import { SpotifyService } from '../../providers/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  nuevosLanzamientos: any [] = [];
  loading: boolean;
  error = false;
  mensajeError = '';
  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotifyService.getnewRealeses()
      .subscribe((data: any) => {
        this.nuevosLanzamientos = data;
        console.log(this.nuevosLanzamientos);
        this.loading = false;
      }, (errorServicio) => {
        this.loading = false;
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;
        console.log(errorServicio);
      });
   }

}
