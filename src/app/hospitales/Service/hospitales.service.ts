import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Hospitales } from '../Interface/ihospitales';

@Injectable({
  providedIn: 'root'
})
export class HospitalesService {

  constructor(private _http: HttpClient) { }


  //Recoge la lista de la tabla hospitales
  getAllHospitales(): Observable<Hospitales[]>{
    const path ="https://localhost:44359/api/Hospitales";
    return this._http.get<Hospitales[]>(path);
  }
}
