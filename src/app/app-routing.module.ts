import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { MedicosListComponent } from './medicos/medicos-list/medicos-list.component';
const routes: Routes = [
  { path: 'Hospitales', component: HospitalesComponent },
  { path: 'Medicos', component: MedicosComponent },
  { path: 'Pacientes', component: PacientesComponent },
  { path: 'List', component: MedicosListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
