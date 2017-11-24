import { Component, OnInit } from '@angular/core';
import { HeoresService, Heroe } from '../../services/heores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heores',
  templateUrl: './heores.component.html'
})
export class HeoresComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _hs: HeoresService, private router: Router ) {
    // console.log('constructor');
   }

  ngOnInit() {
    this.heroes = this._hs.getHeroes();

    // console.log(this.heroes);
  }

  verHeroe (idx: number ) {
    // console.log(idx);

    this.router.navigate(['heroe', idx] );
  }

}

