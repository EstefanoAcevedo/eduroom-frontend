import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
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

    if (this.loginForm.invalid) {
      return;
    }

    const { cuil, password } = this.loginForm.value;

    if (cuil === "20123456789" && password === "123456") {
      this.router.navigate(["/student"]);
    } else {
      // Ejemplo simple de feedback si el usuario no coincide
      alert("CUIL o contraseña incorrectos");
    }
  }
}
