// pokemon.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  bottone1: boolean = false;
  bottone2: boolean = false;
  bottone3: boolean = false;
  info1: boolean = false;
  info2: boolean = false;
  info3: boolean = false;

  pokemon = [
    {
      nome: 'Bulbasaur',
      tipo: 'Erba/Veleno',
      altezza: '0.7 m',
      peso: '6.9 kg',
      colore: 'Verde',
      cattura: 'Bosco Smeraldo, Zona Safari'
    },
    {
      nome: 'Charmander',
      tipo: 'Fuoco',
      altezza: '0.6 m',
      peso: '8.5 kg',
      colore: 'Rosso',
      cattura: 'Monte Ardent, Grotta Celeste'
    },
    {
      nome: 'Squirtle',
      tipo: 'Acqua',
      altezza: '0.5 m',
      peso: '9 kg',
      colore: 'Blu',
      cattura: 'Isola Cannella, Grotta Celeste'
    }
  ];

  mostra_info1() {
    this.bottone1 = true;
    this.info1 = !this.info1;
    this.info2 = false;
    this.info3 = false;
  }

  mostra_info2() {
    this.bottone2 = true;
    this.info1 = false;
    this.info2 = !this.info2;
    this.info3 = false;
  }

  mostra_info3() {
    this.bottone3 = true;
    this.info1 = false;
    this.info2 = false;
    this.info3 = !this.info3;
  }
}

