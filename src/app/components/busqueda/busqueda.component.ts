import { Component, OnInit } from '@angular/core';
import { HeoresService } from '../../services/heores.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute, private _hs: HeoresService ) {

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino =  params['termino'];
      this.heroes = this._hs.buscarHeroes( params['termino']);
      // console.log(this.heroes);
    });
  }

}
