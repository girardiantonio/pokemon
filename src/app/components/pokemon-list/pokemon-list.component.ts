import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemonData: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonData();
  }

  getPokemonData(): void {
    this.pokemonService.getPokemonList().subscribe((response: any) => {
      this.pokemonData = response.results;
    });
  }
}
