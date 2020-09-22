import { Component, OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
  
@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
})

export class AppComponent implements OnInit {
  
  pokemons: Pokemon[] = null;
  private value: string;
  
  ngOnInit() {
    this.pokemons = POKEMONS;
  }
  
  selectPokemon(pokemon: Pokemon) {
    console.log('Vous avez selectionné ' + pokemon.name);
  }

  onClick(){
    console.log("Click");
    
  }

  onKey(value: string){
      this.value = "Bonjour... " + value;
  }
}