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
      Authorization: 'Bearer BQDs9wlBlxL73pAWjNZIASJYBNF4zQrEehnYxvpnwEzMilNBxqUMXeO69gPquYN4HFc74ePsl4D9PWQr_gU'
    });

    return this.http.get(url, {headers});
  }
  getnewRealeses(): Observable<any>{
    return this.getQuery('browse/new-releases')
    .pipe(map((data: any) => data.albums.items));
  }

  getArtistas(termino: string): Observable<any>{
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) => data.artists.items));
  }

  getArtista(id: string): Observable<any>{
    return this.getQuery(`artists/${id}`);
      // .pipe(map((data: any) => data.artists.items));
  }
  getTopTracks(id: string): Observable<any>{
    return this.getQuery(`artists/${id}/top-tracks?market=US`)
      .pipe(map((data: any) => data.tracks));
  }
}
