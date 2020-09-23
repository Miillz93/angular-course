import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PokemonsModule } from './pokemons.module';
  
import { AppComponent }  from './app.component';

import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

@NgModule({
  imports: [ 
    BrowserModule,
    // PokemonsModule,
    AppRoutingModule],
  declarations: [ AppComponent,
    BorderCardDirective,
    PageNotFoundComponent,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }