import { Injectable } from '@angular/core';
import { Clases } from '../../models/clases/clases';

@Injectable({
  providedIn: 'root',
})
export class ClasesServices {
  clases: Array<Clases>;
  constructor() {
    // this.clases = new Array<Clases>();
    this.clases = [
      {
        _id: '1',
        disciplina: 'Arte Marcial',
        categoria: 'Jovenes y Adultos', //niños o
        estado: true,
        precioClase: 25000, // 1 8 12 16 20 24
        alumnos: [],
        profesores: [],
        cronograma: [
          { dia: 'Martes', horaInicio: '19:00', horaFin: '20:00' },
          { dia: 'Martes', horaInicio: '20:00', horaFin: '21:00' },
          { dia: 'Jueves', horaInicio: '19:00', horaFin: '20:00' },
          { dia: 'Jueves', horaInicio: '20:00', horaFin: '21:00' },
        ],
        cupoMaximo: 15,
        // descuento: 0,
        tipo: 'Ordinaria',
        planMensual: 8,
        promocion: false,
      },
      {
        _id: '2',
        disciplina: 'Armas de Corte',
        categoria: 'Jovenes y Adultos',
        estado: true,
        precioClase: 25000,
        alumnos: [],
        profesores: [],
        cronograma: [
          { dia: 'Martes', horaInicio: '20:00', horaFin: '21:00' },
          { dia: 'Jueves', horaInicio: '20:00', horaFin: '21:00' },
        ],
        cupoMaximo: 15,
        //descuento: 0,
        tipo: 'Ordinaria',
        planMensual: 8,
        promocion: false,
      },
      {
        _id: '3',
        disciplina: 'Yoga Chino',
        categoria: 'Jovenes y Adultos',
        estado: true,
        precioClase: 25000,
        alumnos: [],
        profesores: [],
        cronograma: [
          { dia: 'Lunes', horaInicio: '18:00', horaFin: '19:00' },
          { dia: 'Miércoles', horaInicio: '18:00', horaFin: '19:00' },
        ],
        cupoMaximo: 15,
        //descuento: 0,
        tipo: 'Ordinaria',
        planMensual: 8,
        promocion: false,
      },
      {
        _id: '4',
        disciplina: 'Tai Chi',
        categoria: 'Jovenes y Adultos',
        estado: true,
        precioClase: 25000,
        alumnos: [],
        profesores: [],
        cronograma: [
          { dia: 'Lunes', horaInicio: '09:00', horaFin: '10:00' },
          { dia: 'Miércoles', horaInicio: '09:00', horaFin: '10:00' },
          { dia: 'Viernes', horaInicio: '09:00', horaFin: '10:00' },
          { dia: 'Martes', horaInicio: '17:00', horaFin: '18:00' },
          { dia: 'Jueves', horaInicio: '17:00', horaFin: '18:00' },
        ],
        cupoMaximo: 15,
        //descuento: 0,
        tipo: 'Ordinaria',
        planMensual: 8,
        promocion: false,
      },
      {
        _id: '5',
        disciplina: 'Acrobacia',
        categoria: 'Jovenes y Adultos',
        estado: true,
        precioClase: 25000,
        alumnos: [],
        profesores: [],
        cronograma: [
          { dia: 'Lunes', horaInicio: '10:00', horaFin: '11:00' },
          { dia: 'Miércoles', horaInicio: '10:00', horaFin: '11:00' },
          { dia: 'Lunes', horaInicio: '17:00', horaFin: '18:00' },
          { dia: 'Miércoles', horaInicio: '17:00', horaFin: '18:00' },
        ],
        cupoMaximo: 15,
        //descuento: 0,
        tipo: 'Ordinaria',
        planMensual: 8,
        promocion: false,
      },
      {
        _id: '6',
        disciplina: 'Arqueria Tradicional',
        categoria: 'Jovenes y Adultos',
        estado: true,
        precioClase: 25000,
        alumnos: [],
        profesores: [],
        cronograma: [
          { dia: 'Lunes', horaInicio: '11:00', horaFin: '12:00' },
          { dia: 'Lunes', horaInicio: '20:00', horaFin: '21:00' },
          { dia: 'Miércoles', horaInicio: '11:00', horaFin: '12:00' },
          { dia: 'Miércoles', horaInicio: '20:00', horaFin: '21:00' },
          { dia: 'Sabado', horaInicio: '12:00', horaFin: '13:00' },
          { dia: 'Sabado', horaInicio: '13:00', horaFin: '14:00' },
          { dia: 'Sabado', horaInicio: '16:00', horaFin: '17:00' },
          { dia: 'Sabado', horaInicio: '17:00', horaFin: '18:00' },          
        ],
        cupoMaximo: 15,
        //descuento: 0,
        tipo: 'Ordinaria',
        planMensual: 8,
        promocion: false,
      },
    ];
  }
  getClases(): Array<Clases> {
    return this.clases;
  }

  getClase(id: string): Clases {
    let clase =  this.clases.find((clase) => clase._id === id)!;
    //return this.clases.find((clase) => clase._id === id);
    return clase;

  }

  updateClase(clase: Clases): void {
    const index = this.clases.findIndex((c) => c._id === clase._id);
    if (index !== -1) {
      this.clases[index] = clase;
    }
  }

  addClass(clase: Clases): void {
    this.clases.push(clase);
  }
  deleteClase(id: string): void {}
}
