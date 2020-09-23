import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';
import { Router } from '@angular/router';
import  {PokemonsService} from '../services/pokemons.service'
  
@Component({
    selector: 'list-pokemon',
    templateUrl: './app/list-pokemon/list-pokemon.component.html',
    providers: [PokemonsService]
})
export class ListPokemonComponent implements OnInit {
  
    pokemons: Pokemon[] = null;
  
    constructor(private router: Router, private pokemonService : PokemonsService) {

     }
  
    ngOnInit(): void {
        this.pokemons = this.pokemonService.getPokemons();
    }
  
    selectPokemon(pokemon: Pokemon): void {
        console.log('Vous avez selectionné ' + pokemon.name);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
  
}