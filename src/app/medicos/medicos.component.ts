import { Component, OnInit } from '@angular/core';

import { Medicos } from './Interface/imedicos';
import { MedicosService } from './Service/medicos.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  medicos: Medicos[] = [];
  constructor(private medicosService: MedicosService) { }

  ngOnInit(): void {
    this.medicosService.getAllMedicos().subscribe(m => (this.medicos = m));
  }

}
