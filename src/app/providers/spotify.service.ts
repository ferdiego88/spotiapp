import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service Listo');
  }
  getnewRealeses(): any{
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQD1gxMmCN-gcoGPbStRLQm_NFP2CPy8cupkoGYG9BH5l0laYJIVvwDhJeeB3djzIGrtEHvSZ3HuGjEiyL8'
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .subscribe(data => {
        console.log(data);
      });
  }
}
