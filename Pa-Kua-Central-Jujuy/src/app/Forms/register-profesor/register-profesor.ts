import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register-profesor',
  imports: [],
  templateUrl: './register-profesor.html',
  styleUrl: './register-profesor.css',
})
export class RegisterProfesor {


    constructor(private router: Router) {

     }


  volver() {
    this.router.navigate(['/gestionprofesores']);
  }
}
