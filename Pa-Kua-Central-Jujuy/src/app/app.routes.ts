import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Home } from './home/home/home';
import { TablaProfesores } from './Tables/tabla-profesores/tabla-profesores';
import { RegisterProfesor } from './Forms/register-profesor/register-profesor';
import { TablaAlumnos } from './Tables/tabla-alumnos/tabla-alumnos';
import { RegisterAlumno } from './Forms/register-alumno/register-alumno';
export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},   //cambiar por home
    {path:"gestionprofesores",component:TablaProfesores},
    {path:"gestionprofesores/registerProfesor",component:RegisterProfesor},   
    {path:'Login',component: Login},
    {path:'home',component: Home},
    {path:"gestionAlumnos",component:TablaAlumnos},
    {path:"gestionAlumnos/registerAlumno",component:RegisterAlumno},       //registerAlumno/:id
      
];
