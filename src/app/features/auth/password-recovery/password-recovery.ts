import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
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
      email: ['', [Validators.email]],
      dni: ['', [Validators.pattern(/^\d{7,8}$/)]]
    }, {
      validators: [this.atLeastOneValidator]
    });
  }

  // ✅ Custom validator: al menos un campo completado
  atLeastOneValidator(form: AbstractControl): ValidationErrors | null {
    const email = form.get('email')?.value;
    const dni = form.get('dni')?.value;
    return (email || dni) ? null : { atLeastOneRequired: true };
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.recoveryForm.invalid) {
      return;
    }

    this.successMessage = 'Se envió un enlace de recuperación a tu correo si coincide con nuestros registros.';
    this.recoveryForm.reset();
    this.submitted = false;
  }
}
