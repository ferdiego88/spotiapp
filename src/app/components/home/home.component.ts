import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../providers/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  constructor(private spotifyService: SpotifyService) {
    this.spotifyService.getnewRealeses();
   }

}
