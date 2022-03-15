import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { HospitalesListComponent } from './hospitales/hospitales-list/hospitales-list.component';
import { MedicosListComponent } from './medicos/medicos-list/medicos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalesComponent,
    MedicosComponent,
    PacientesComponent,
    HospitalesListComponent,
    MedicosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
