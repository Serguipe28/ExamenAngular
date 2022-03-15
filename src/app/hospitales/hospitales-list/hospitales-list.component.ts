import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

import { Hospitales } from '../Interface/ihospitales';
import { HospitalesService } from '../Service/hospitales.service';

@Component({
  selector: 'app-hospitales-list',
  templateUrl: './hospitales-list.component.html',
  styleUrls: ['./hospitales-list.component.css']
})
export class HospitalesListComponent implements OnInit {

  hospitalesList: Hospitales[] = [];
  hospitalesSelected:number = 1;
  
  @Input() resultado:number|undefined;
  
  @Output() 
  globalSelected: EventEmitter<number> = new EventEmitter<number>();

  constructor(private hospitalesService: HospitalesService) { }

  ngOnInit(): void {
    this.hospitalesService.getAllHospitales().subscribe(h => (this.hospitalesList = h));
  }

  onChange(){
    this.globalSelected.emit(this.hospitalesSelected);
  }
}
