import { Routes } from '@angular/router';
import { Login } from './login/login';
import { PasswordRecovery } from './password-recovery/password-recovery'
import { Register } from './register/register';

export const auth_routes: Routes = [
    { path: 'login', component: Login },
    { path: 'password-recovery', component: PasswordRecovery },
    { path: 'register', component: Register },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login', pathMatch: 'full' },
];