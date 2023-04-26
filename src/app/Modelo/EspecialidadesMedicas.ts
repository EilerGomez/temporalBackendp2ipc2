export class EspecialidadesMedicas {
    idEspecialidad: number;
    idMedico : number;
    precio : number;
    estado: String;

    constructor (idEspecialidad: number, idMedico: number, precio:number, estado:String){
        this.idMedico=idMedico;
        this.idEspecialidad=idEspecialidad;
       
        this.precio=precio;
        this.estado=estado;
    }
}