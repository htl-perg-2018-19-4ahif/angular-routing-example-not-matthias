import { Component, OnInit } from '@angular/core';

//
// Response Interfaces
//
interface IPokemonListResponse {
  count: number;
  next: any;
  previous: any;
  results: IPokemonListItem[];
}

interface IPokemonResponse {
  abilities: IAbility[];
  base_experience: number;
  forms: any[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  species: { name: string; url: string };
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
  };
  stats: any[];
  types: any[];
  weight: number;
}

//
// Custom Interfaces
//
export interface IPokemonList {
  list: IPokemonListItem[];
}

export interface IPokemonListItem {
  name: string;
  url: string;
}

export interface IPokemon {
  name: string;
  weight: number;
  image: string;
  abilities: IAbility[];
}

export interface IAbility {
  abilities: {
    name: string;
    description: string;
  };
  is_hidden: boolean;
  slot: number;
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
