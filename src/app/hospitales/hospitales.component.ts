import { Component, OnInit } from '@angular/core';

import { HospitalesService } from './Service/hospitales.service';
import { Hospitales } from './Interface/ihospitales';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {

  hospitales: Hospitales[] = [];

  constructor( private hospitalesService:HospitalesService) { }

  ngOnInit(): void {
    this.hospitalesService.getAllHospitales().subscribe(h => (this.hospitales = h));
  }

}
