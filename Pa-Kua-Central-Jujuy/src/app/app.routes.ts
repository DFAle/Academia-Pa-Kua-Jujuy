import { Routes } from '@angular/router';
import { Login } from './auth/login/login';


export const routes: Routes = [
    //{path: '', redirectTo: 'login', pathMatch: 'full'},
    {path:'Login',component: Login},    
];
