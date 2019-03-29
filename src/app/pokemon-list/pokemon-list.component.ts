import { Component, OnInit } from '@angular/core';
import { PokemonApiService, IPokemonListItem } from '../pokemon-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  public pokeList: IPokemonListItem[] = [];
  public pokeFilter = '';

  constructor(private api: PokemonApiService) {}

  //
  // Fetches the data
  //
  ngOnInit() {
    this.fetchPokemonList();
  }

  //
  // Returns a filtered list of pokemon items (IPokemonListItem)
  //
  public getFilteredPokemonList(): IPokemonListItem[] {
    return this.pokeList.filter((value: IPokemonListItem) => value.name.includes(this.pokeFilter));
  }

  //
  // Returns the pokemon id
  //
  public getPokemonId(url: string): string {
    const splittedUrl: string[] = url.split('/');

    if (splittedUrl) {
      return splittedUrl[splittedUrl.length - 2];
    } else {
      return '-1';
    }
  }

  //
  // Getter: returns the pokemon list
  //
  get filteredPokemons(): IPokemonListItem[] {
    if (this.pokeFilter) {
      return this.getFilteredPokemonList();
    } else {
      return this.pokeList;
    }
  }

  //
  // Fetch the pokemon list
  //
  private async fetchPokemonList() {
    try {
      this.pokeList = (await this.api.getPokemonList()).list;
    } catch (error) {
      console.log('[DEBUG] Failed to fetch the pokemon list.');
    }
  }
}
