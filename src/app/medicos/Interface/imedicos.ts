export interface IMedicos {
  ID: number;
  Nombre: string;
  Especialidad: string;
  Foto: string;
  HospitalID: number;
}


export class Medicos implements IMedicos{
    constructor(ID: number,Nombre: string,Especialidad: string,Foto: string, HospitalID:number) 
    {
        this.ID = ID;
        this.Nombre = Nombre;
        this.Especialidad = Especialidad;
        this.Foto = Foto;
        this.HospitalID = HospitalID;
    }
    ID: number;
    Nombre: string;
    Especialidad: string;
    Foto: string;
    HospitalID: number;
  }
  
