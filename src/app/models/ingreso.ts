 /* Javier Suárez Guzmán
Agosto septiembre 2022 */ 

export class Ingreso {
    _id?: string;
    cedula: string;
    nombre: string;
    apellido: string;
    correo?: string;
    nroContacto: number;
    nroEmergencia: number;
    ingreso: Date;
    salida: Date;

    constructor(cedula: string,nombre: string, apellido: string, nroContacto: number, 
                nroEmergencia: number, ingreso: Date, salida: Date){
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nroContacto = nroContacto;
        this.nroEmergencia = nroEmergencia;
        this.ingreso = ingreso;
        this.salida = salida;
    }
}