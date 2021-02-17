import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service Listo');
  }
  getnewRealeses(): Observable<any>{
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQD1gxMmCN-gcoGPbStRLQm_NFP2CPy8cupkoGYG9BH5l0laYJIVvwDhJeeB3djzIGrtEHvSZ3HuGjEiyL8'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtista(termino: string){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQD1gxMmCN-gcoGPbStRLQm_NFP2CPy8cupkoGYG9BH5l0laYJIVvwDhJeeB3djzIGrtEHvSZ3HuGjEiyL8'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers});
  }
}
