import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-alumno',
  imports: [],
  templateUrl: './register-alumno.html',
  styleUrl: './register-alumno.css',
})
export class RegisterAlumno {
  constructor(private router:Router) {
    
  }
  volverTabla(){
    this.router.navigate(['/gestionAlumnos']);
  }
}
