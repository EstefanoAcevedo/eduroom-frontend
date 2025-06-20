import { Routes } from '@angular/router';
import { Login } from './login/login';
import { PasswordRecovery } from './password-recovery/password-recovery';
import { Register } from './register/register';

export const auth_routes: Routes = [
    {path: 'auth/login', component: Login},
    {path: 'auth/password-recovery', component: PasswordRecovery},
    {path: 'auth/register', component: Register},
    {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
    {path: '**', redirectTo: 'auth/login', pathMatch: 'full'}
];