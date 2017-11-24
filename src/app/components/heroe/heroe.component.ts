import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeoresService } from '../../services/heores.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe: any = {};

  constructor( private activatedRoute: ActivatedRoute, private _hs: HeoresService ) {
    this.activatedRoute.params.subscribe( params => {
      // console.log ( params['id'] );
      this.heroe = this._hs.getHeroe(params ['id']);
    });
   }



}
