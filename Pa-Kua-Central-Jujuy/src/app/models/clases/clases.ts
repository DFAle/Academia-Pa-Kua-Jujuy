export interface HorarioClase {
  dia: string;        // Ej: "Lunes"
  horaInicio: string; // Ej: "19:00"
  horaFin?: string;   // Ej: "20:00" (opcional)
}
export class Clases {
    _id!: string;
    disciplina!: string; // Ej: "Arte Marcial", "Tai Chi", "Yoga Chino"
  //  categoria: Array<string> = ['Niño', 'Adultos'];  Ej: "Niños (desde 6 años)", "Jóvenes y Adultos", "General"
    categoria!: string;
    estado!: boolean; 
    precioClase!: number;
    alumnos: string[] = [];     // IDs de los alumnos inscriptos en este turno
    profesores: string[] = [];  // IDs de los profesores a cargo de este turno
    cronograma: HorarioClase[] = [];  // Aquí resuelves el problema de múltiples días y horarios distintos:
    cupoMaximo!: number; 
    //descuento!: number;
    //tipo: Array<string> = ['Ordinaria', 'Extra Ordinaria'];
    tipo: string = '';
    planMensual!: number; // Ej: 8, 16, 24 (número de clases al mes)
    promocion!: boolean;
    

    constructor(){

    }      
    //modalidad!: string;        Ej: "Grupal", "Particular", "Intensivo", "Curso"
  


}
