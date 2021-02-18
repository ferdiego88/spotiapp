import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service Listo');
  }

  getQuery(query: string): Observable<any>{
    const url = `https://api.spotify.com/v1/${ query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQA0VRWSouT_P5xZA8L_CwgG5ATGPsuW3fno0xGOVKZiUEdi6aZ7R7GkO_TpK1bv3axl_bLMJZm7gi-OuGU'
    });

    return this.http.get(url, {headers});
  }
  getnewRealeses(): Observable<any>{
    return this.getQuery('browse/new-releases')
    .pipe(map((data: any) => data.albums.items));
  }

  getArtista(termino: string): Observable<any>{
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) => data.artists.items));
  }
}
