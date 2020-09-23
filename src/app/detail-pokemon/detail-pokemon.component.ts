import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';

import  {PokemonsService} from '../services/pokemons.service';
  
@Component({
    selector: 'detail-pokemon',
    templateUrl: './app/detail-pokemon/detail-pokemon.component.html',
    providers: [PokemonsService]
})
export class DetailPokemonComponent implements OnInit {
  
    pokemons: Pokemon[] = null;
    pokemon: Pokemon = null;
  
    constructor(private route: ActivatedRoute, private router: Router, private pokemonService : PokemonsService) {}
  
    ngOnInit(): void {
        this.pokemons = this.pokemonService.getPokemons();
  
        let id = +this.route.snapshot.paramMap.get('id');
        this.pokemon = this.pokemonService.getPokemon(id);
    }
  
    goBack(): void {
        this.router.navigate(['/pokemons']);
    }
  
}