import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../pokemon-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  constructor(private api: PokemonApiService) {}

  async ngOnInit() {
    console.log(await this.api.getPokemonList());
  }
}
