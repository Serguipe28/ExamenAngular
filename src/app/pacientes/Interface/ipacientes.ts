export interface IPacientes {
    ID: number;
    Nombre: string;
    FNac: Date;
    Foto: string;
    MedicoID: number;
}


export class Pacientes implements IPacientes {
    constructor(ID: number,Nombre: string,FNac: Date,Foto: string,MedicoID: number) 
    {
        this.ID = ID;
        this.Nombre = Nombre;
        this.FNac = FNac;
        this.Foto = Foto;
        this.MedicoID = MedicoID;
    }
    ID: number;
    Nombre: string;
    FNac: Date;
    Foto: string;
    MedicoID: number;
  }
  
