import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-recovery',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './password-recovery.html'
})
export class PasswordRecovery {
  recoveryForm: FormGroup;
  submitted = false;
  successMessage = '';

  constructor(private fb: FormBuilder) {
    this.recoveryForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      dni: ['', [Validators.pattern(/^\d{7,8}$/)]]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.recoveryForm.valid) {
      this.successMessage = 'Hemos enviado un enlace de recuperación a tu correo.';
      // Aquí podrías llamar a un servicio real
    }
  }
}
