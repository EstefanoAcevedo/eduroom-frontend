import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-user-register-request',
  imports: [],
  templateUrl: './admin-user-register-request.html',
  styleUrl: './admin-user-register-request.css'
})
export class AdminUserRegisterRequest {

  enrollments = [
    {enrollment_id: 1, user: {name: 'Estéfano Marcial', lastname: 'Acevedo'}, subject_id: 1, subject: {subject_name: 'Programación III'}, commission_id: 1, commission: {commission_name: 'Primera división'}},
    {enrollment_id: 2, user: {name: 'Adrián Alejandro', lastname: 'Bracamonte'}, subject_id: 2, subject: {subject_name: 'Probabilidad y Estadística'}, commission_id: 1, commission: {commission_name: 'Primera división'}},
    {enrollment_id: 3, user: {name: 'Brian', lastname: 'Vanegas'}, subject_id: 3, subject: {subject_name: 'Base de Datos'}, commission_id: 1, commission: {commission_name: 'Primera división'}},
  ];

}
