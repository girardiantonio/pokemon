import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon');
  }
}
