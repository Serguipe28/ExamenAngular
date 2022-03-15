import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Medicos } from '../Interface/imedicos';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private _http:HttpClient) { }


  //Recoge la lista de la tabla medicos
  getAllMedicos(): Observable<Medicos[]>{
    const path ="https://localhost:44359/api/Medicos";
    return this._http.get<Medicos[]>(path);
  }
}
