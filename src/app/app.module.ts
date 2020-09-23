import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// import { PokemonsModule } from './pokemons.module';
  
import { AppComponent }  from './app.component';

import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditPokemonComponent } from './form-pokemon/edit-pokemon.component';

import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonFormComponent } from './form-pokemon/pokemon-form.component';

@NgModule({
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    BorderCardDirective,
    PageNotFoundComponent,
    EditPokemonComponent,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    PokemonFormComponent,
    DetailPokemonComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }