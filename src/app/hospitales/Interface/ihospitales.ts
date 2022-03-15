export interface IHospitales {
  ID: number;
  Nombre: string;
  Direccion: string;
  NumCamas: number;
}

export class Hospitales implements IHospitales {
  constructor(ID: number,Nombre: string,Direccion: string,NumCamas: number) 
  {
      this.ID = ID;
      this.Nombre = Nombre;
      this.Direccion = Direccion;
      this.NumCamas = NumCamas;
  }
  ID: number;
  Nombre: string;
  Direccion: string;
  NumCamas: number;
}
