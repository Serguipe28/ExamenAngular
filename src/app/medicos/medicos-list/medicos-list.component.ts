import { Component, OnInit } from '@angular/core';

import { Medicos } from '../Interface/imedicos';
import { MedicosService } from '../Service/medicos.service';

@Component({
  selector: 'app-medicos-list',
  templateUrl: './medicos-list.component.html',
  styleUrls: ['./medicos-list.component.css']
})
export class MedicosListComponent implements OnInit {

  medicos:Medicos[] = []
  hospitalSeleccionado:number | undefined;
  result:number = 0;

  constructor(private medicosService:MedicosService) { }

  ngOnInit(): void {
    this.medicosService.getAllMedicos().subscribe(m => (this.medicos = m));
  }

  alCambiarHospital(opcionSeleccionada : number) : void{
    this.hospitalSeleccionado = opcionSeleccionada;
    this.contarMedicos();
    console.log(this.result);
  }

  contarMedicos():void{
    var resultado = 0
    for (let index = 0; index < this.medicos.length; index++) {
      if (this.hospitalSeleccionado == this.medicos[index].HospitalID) {
        resultado = resultado +1;
      }
    }
    this.result = resultado;
    
  }
  

}
