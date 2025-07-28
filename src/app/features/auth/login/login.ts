import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { RouterLink, Router } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      cuil: ["", [Validators.required, Validators.pattern(/^\d{11}$/)]], // 11 dígitos, sin guiones
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) return;

    const { cuil, password } = this.loginForm.value;

    // Ejemplo de login ficticio
    if (cuil === '20123456789' && password === '123456') {
      // Si el usuario es estudiante, redirige a su panel
      this.router.navigate(['/private/student/dashboard']);
    }
  }

}
