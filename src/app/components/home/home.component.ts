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
  constructor(private spotifyService: SpotifyService) {
    this.spotifyService.getnewRealeses()
      .subscribe((data: any) => {
        this.nuevosLanzamientos = data;
        console.log(this.nuevosLanzamientos);
      });
   }

}
