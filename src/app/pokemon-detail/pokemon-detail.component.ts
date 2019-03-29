import { Component, OnInit } from '@angular/core';
import { IPokemon, PokemonApiService } from '../pokemon-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  public pokemonDetails: IPokemon;

  constructor(private route: ActivatedRoute, private api: PokemonApiService) {}

  //
  // Loads the data
  //
  ngOnInit() {
    this.fetchPokemonDetails();
  }

  //
  // Fetches the pokemon details
  //
  private fetchPokemonDetails() {
    this.route.params.subscribe(async (params) => (this.pokemonDetails = await this.api.getPokemonById(params.id)));
  }
}
