import { Routes } from '@angular/router';
import { TablaProfesores } from './Forms/tabla-profesores/tabla-profesores';
import { Login } from './auth/login/login';
import { RegisterProfesor } from './auth/register-profesor/register-profesor';


export const routes: Routes = [
  //  {path:"",redirectTo:"gestion-profesores",pathMatch:"full"},   //cambiar por home
      {path:"gestion-profesores",component:TablaProfesores},
      {path:'Login',component: Login},
      {path:"registerProfesor",component:RegisterProfesor}    
];
