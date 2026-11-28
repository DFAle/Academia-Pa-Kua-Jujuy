import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClasesServices } from '../../services/clasesServices/clases-services';
import { Clases, HorarioClase } from '../../models/clases/clases';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register-clases',
  imports: [FormsModule, CommonModule],
  templateUrl: './register-clases.html',
  styleUrl: './register-clases.css',
})
export class RegisterClases {
  accion!: string;
  clase!: Clases;
  opcionesCategoria: string[] = ['Niño','Jóvenes y Adultos'];
  opcionesTipo: string[] = ['Ordinaria', 'Extra Ordinaria'];
  planMensual: number[] = [1,8, 12, 16, 20, 24];
  diasSemana: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  
  nuevoHorario: HorarioClase = {
    dia: '',
    horaInicio: '',
    horaFin: ''
  };



  constructor(private activatedRoute: ActivatedRoute,private router: Router,private serviceClases: ClasesServices,) {
    this.inicarVariable();
    this.clase = new Clases();
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id'] == '0') {
        this.accion = 'new';
      } else {
        this.accion = 'update';
        this.cargarClase(params['id']);
      }
    });
  }

  agregarHorario(): void {
    // Validación básica para no agregar vacíos
    if (!this.nuevoHorario.dia || !this.nuevoHorario.horaInicio) {
      alert('Por favor selecciona al menos el día y la hora de inicio.');
      return;
    }
    // Agregamos una COPIA ({ ... }) al array de la clase
    this.clase.cronograma.push({ ...this.nuevoHorario });

    // Limpiamos los inputs para cargar el siguiente día
    this.nuevoHorario = {
      dia: '',
      horaInicio: '',
      horaFin: ''
    };
   
  }
  eliminarHorario(index: number): void {
    this.clase.cronograma.splice(index, 1);
  }

  inicarVariable() {
    this.clase = new Clases();
  }

  registrarClase() {
    this.serviceClases.addClass(this .clase);
    this.router.navigate(['gestionClases']);
  }
  cargarClase(id: string) {
      this.clase = this.serviceClases.getClase(id);
  }


  actualizarClase() {
      this.serviceClases.updateClase(this.clase);
      this.router.navigate(['gestionClases']);
  }

  cancelar() {
    this.router.navigate(['gestionClases']);


  }
}
