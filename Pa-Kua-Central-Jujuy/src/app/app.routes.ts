import { Routes } from '@angular/router';
import { TablaProfesores } from './Forms/tabla-profesores/tabla-profesores';
import { Login } from './auth/login/login';


export const routes: Routes = [
    //{path:"",redirectTo:"gestion-profesores",pathMatch:"full"},   //cambiar por home
    //{path:"gestion-profesores",component:TablaProfesores},
      {path:'Login',component: Login}    
];
