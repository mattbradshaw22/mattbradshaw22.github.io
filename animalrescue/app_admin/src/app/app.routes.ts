// Declares Angular client-side routes for the admin application.
import { Routes } from '@angular/router';
import { Intake } from './components/intake/intake';
import { FindAnimal } from './components/find-animal/find-animal';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { 
    path: 'animal-intake', component: Intake, canActivate: [authGuard] },
  { 
    path: 'find-an-animal', component: FindAnimal },
  { 
    path: 'login', component: Login },
  { 
    path: 'register', component: Register }
];
