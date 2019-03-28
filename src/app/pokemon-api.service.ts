import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {
  private readonly url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  //
  // Returns a list of pokemon items (IPokemonListItem)
  //
  public async getPokemonList(): Promise<IPokemonList> {
    const response: IPokemonListResponse = await this.http.get<IPokemonListResponse>(`${this.url}/`).toPromise();

    return {
      list: response.results
    };
  }

  //
  // Returns the specified pokemon if found
  //
  public async getPokemonById(index: number): Promise<IPokemon> {
    const response: IPokemonResponse = await this.http.get<IPokemonResponse>(`${this.url}/${index}/`).toPromise();

    const pokemon: IPokemon = {
      name: response.name,
      weight: response.weight,
      image: response.sprites.front_default,
      abilities: response.abilities
    };

    return pokemon;
  }

  //
  // Returns the specified pokemon if found
  //
  public async getPokemonByName(name: string): Promise<IPokemon> {
    const response = await this.http.get<IPokemonResponse>(`${this.url}/${name}/`).toPromise();

    const pokemon = {
      name: response.name,
      weight: response.weight,
      image: response.sprites.front_default,
      abilities: response.abilities
    };

    return pokemon;
  }
}
