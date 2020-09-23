"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var forms_1 = require("@angular/forms");
// import { PokemonsModule } from './pokemons.module';
var app_component_1 = require("./app.component");
var list_pokemon_component_1 = require("./list-pokemon/list-pokemon.component");
var detail_pokemon_component_1 = require("./detail-pokemon/detail-pokemon.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var edit_pokemon_component_1 = require("./form-pokemon/edit-pokemon.component");
var border_card_directive_1 = require("./border-card.directive");
var pokemon_type_color_pipe_1 = require("./pokemon-type-color.pipe");
var pokemon_form_component_1 = require("./form-pokemon/pokemon-form.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                border_card_directive_1.BorderCardDirective,
                page_not_found_component_1.PageNotFoundComponent,
                edit_pokemon_component_1.EditPokemonComponent,
                pokemon_type_color_pipe_1.PokemonTypeColorPipe,
                list_pokemon_component_1.ListPokemonComponent,
                pokemon_form_component_1.PokemonFormComponent,
                detail_pokemon_component_1.DetailPokemonComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map