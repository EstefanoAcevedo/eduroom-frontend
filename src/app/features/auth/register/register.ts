import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  private formBuilder = inject(FormBuilder);

  registerForm = this.formBuilder.group({
    lastname: ['', Validators.compose([Validators.required, Validators.maxLength(255), Validators.pattern("^(?! *$)[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$")])],
    name: ['', Validators.compose([Validators.required, Validators.maxLength(255), Validators.pattern("^(?! *$)[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$")])],
    cuil: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern("^[0-9]+$")])],
    tel: ['', Validators.compose([Validators.required, Validators.pattern("^\\d{6,15}$")])],
    location: ['', Validators.compose([Validators.required])],
    address: ['', Validators.compose([Validators.required, Validators.maxLength(255), Validators.pattern("^(?! *$)[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 ,\\-°]+$")])],
    email: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(255)])],
    rol: ['', Validators.compose([Validators.required])],
    password: ['', Validators.compose([Validators.required, Validators.maxLength(255)])],
    matchPassword: ['', Validators.compose([Validators.required, Validators.maxLength(255)])]
  }, {
    validators: this.validateMatchPassword()
  });

  get lastname() {
    return this.registerForm.controls.lastname;
  }
  get name() {
    return this.registerForm.controls.name;
  }
  get cuil() {
    return this.registerForm.controls.cuil;
  }
  get tel() {
    return this.registerForm.controls.tel;
  }
  get location() {
    return this.registerForm.controls.location;
  }
  get address() {
    return this.registerForm.controls.address;
  }
  get email() {
    return this.registerForm.controls.email;
  }
  get rol() {
    return this.registerForm.controls.rol;
  }
  get password() {
    return this.registerForm.controls.password;
  }
  get matchPassword() {
    return this.registerForm.controls.matchPassword;
  }

  validateMatchPassword(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get('password')?.value;
      const matchPassword = formGroup.get('matchPassword')?.value;
      if (password !== matchPassword) {
        formGroup.get("matchPassword")?.setErrors({passwordMismatch: true})
        return {passswordMismatch: true};
      } else {
        const errors = formGroup.get("matchPassword")?.errors;
        if (errors) {
          delete errors['passwordMismatch'];
          if (Object.keys(errors).length === 0) {
            formGroup.get('matchPassword')?.setErrors(null);
          } else {
            formGroup.get('matchPassword')?.setErrors(errors);
          }
        }
        return null;
      }
    }
  }

  registerUser() {
    if (this.registerForm.valid) {
      console.log(this.registerForm)
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

}
