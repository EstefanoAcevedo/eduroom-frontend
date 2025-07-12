import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-modal-edit-user',
  imports: [ReactiveFormsModule],
  templateUrl: './admin-modal-edit-user.html',
  styleUrl: './admin-modal-edit-user.css'
})
export class AdminModalEditUser {

  private fb = inject(FormBuilder);

  editUserForm = this.fb.group({
    usDocumento: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern("^[0-9]+$")])],
    usMail: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(255)])],
    usApellido: ['', Validators.compose([Validators.required, Validators.maxLength(255), Validators.pattern("^(?! *$)[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$")])],
    usNombre:['', Validators.compose([Validators.required, Validators.maxLength(255), Validators.pattern("^(?! *$)[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$")])],
    usTelefono:['', Validators.compose([Validators.required, Validators.pattern("^\\d{6,15}$")])],
    usDomicilio:['', Validators.compose([Validators.required, Validators.maxLength(255), Validators.pattern("^(?! *$)[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 ,\\-°]+$")])],
    idLocalidad:['', Validators.compose([Validators.required])],
    idRol:['', Validators.compose([Validators.required])]
  })

  get usDocumento() {
    return this.editUserForm.controls.usDocumento;
  }

  get usMail() {
    return this.editUserForm.controls.usMail;
  }

  get usApellido() {
    return this.editUserForm.controls.usApellido;
  }

  get usNombre() {
    return this.editUserForm.controls.usNombre;
  }

  get usTelefono() {
    return this.editUserForm.controls.usTelefono;
  }

  get usDomicilio() {
    return this.editUserForm.controls.usDomicilio;
  }

  get idLocalidad() {
    return this.editUserForm.controls.idLocalidad;
  }

  get idRol() {
    return this.editUserForm.controls.idRol;
  }

  editUser() {
    if (this.editUserForm.valid) {
      console.log(this.editUserForm.value);
    } else {
      this.editUserForm.markAllAsTouched();
    }
  }

}
