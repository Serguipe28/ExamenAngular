import { Component, OnInit } from '@angular/core';

import { Pacientes } from './Interface/ipacientes';
import { PacientesService } from './Service/pacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  pacientes: Pacientes[] = [];
  constructor(private pacientesService: PacientesService) { }

  ngOnInit(): void {
    this.pacientesService.getAllPacientes().subscribe(p => (this.pacientes = p));
  }

}
