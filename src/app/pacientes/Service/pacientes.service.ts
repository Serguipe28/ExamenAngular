import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pacientes } from '../Interface/ipacientes';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private _http:HttpClient) { }

  //Recoge la lista de la tabla pacientes

  getAllPacientes(): Observable<Pacientes[]>{
    const path = "https://localhost:44359/api/Pacientes";
    return  this._http.get<Pacientes[]>(path);
  }
}
