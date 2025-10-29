import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { RouterLink, Router } from "@angular/router";
import { AuthService } from '../../../core/services/auth/auth-service';
import { LoginRequestInterface } from '../../../core/models/auth/login-request-interface';
import { NotificationToast } from '../../../shared/components/notifications/notification-toast/notification-toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, NotificationToast],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  private router = inject(Router);
  private authService = inject(AuthService);

  loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      user_email: ["", [Validators.required, Validators.email]],
      user_pass: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  get f() { return this.loginForm.controls; }

  private inicioExitoso(data: {
    token: string;
    user_name: string;
    user_lastname: string;
    roles: string[];
  }): void {
    sessionStorage.setItem('authToken', data.token);
    sessionStorage.setItem('user_name', `${data.user_name} ${data.user_lastname}`);
    sessionStorage.setItem('roles', JSON.stringify(data.roles)); // guardar como JSON
  }

  @ViewChild(NotificationToast) notificationToast!: NotificationToast;
  onSubmit() {
    this.submitted = true;
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.notificationToast.show({
        status: 'loading'
      })
      
      
      const user_email = String(this.loginForm.value.user_email || '').trim();
      const user_pass = String(this.loginForm.value.user_pass || '').trim();
      
      const loginRequest: LoginRequestInterface = { user_email, user_pass };

    this.authService.login(loginRequest).subscribe({
      next: (response) => {
        // Normalizar roles a array de strings: ['admin', 'docente', 'estudiante']
        let rolesRaw = response?.user?.roles ?? [];
        const roles: string[] = Array.isArray(rolesRaw)
          ? rolesRaw.map((r: any) => typeof r === 'string' ? r : (r?.name ?? '')).filter(Boolean)
          : [String(rolesRaw || '')].filter(Boolean);

        this.inicioExitoso({
          token: response.access_token,
          user_name: response.user.user_name,
          user_lastname: response.user.user_lastname,
          roles,
        });

        // Elegir destino según rol (case-insensitive)
        const has = (role: string) => roles.some(r => r.toLowerCase() === role.toLowerCase());

        this.notificationToast.hide();

        if (has('admin')) {
          this.router.navigate(['/private/admin/dashboard'], { replaceUrl: true });
        } else if (has('teacher')) {
          this.router.navigate(['/private/teacher/dashboard'], { replaceUrl: true });
        } else if (has('student')) {
          this.router.navigate(['/private/student/dashboard'], { replaceUrl: true });
        } else {
          // fallback genérico si no hay rol conocido
          this.router.navigate(['/dashboard'], { replaceUrl: true });
        }
      },
      error: (error) => {
        console.error('Error durante el inicio de sesión:', error);
        // acá podrías setear un mensaje en pantalla
        this.notificationToast.show({
          status: 'error',
          title: 'Error al iniciar sesión',
          message: error.error?.message
        })
      }
      // IMPORTANTE: sin 'complete' que navegue — no lo uses para redirigir
    });
  }
  }
}
