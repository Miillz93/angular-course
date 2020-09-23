import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './form-pokemon/edit-pokemon.component';

// routes
const appRoutes: Routes = [
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/:id', component: DetailPokemonComponent },
    { path: 'pokemon/edit/:id', component: EditPokemonComponent },
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' }
];
  
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }