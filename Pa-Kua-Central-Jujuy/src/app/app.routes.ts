import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Home } from './home/home/home';
import { TablaProfesores } from './Forms/tabla-profesores/tabla-profesores';
import { RegisterProfesor } from './auth/register-profesor/register-profesor';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},   //cambiar por home
      {path:"gestionprofesores",component:TablaProfesores},
      {path:"registerProfesor",component:RegisterProfesor},   
      {path:'Login',component: Login},
      {path:'home',component: Home}



];
