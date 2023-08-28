import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonService } from './pokemon.service';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [AppComponent, PokemonListComponent, NavComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
