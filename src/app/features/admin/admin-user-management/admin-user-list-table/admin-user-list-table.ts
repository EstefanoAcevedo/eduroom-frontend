import { Component } from '@angular/core';
import { AdminModalEditUser } from "../admin-modal-edit-user/admin-modal-edit-user";
import { AdminModalDeleteUser } from "../admin-modal-delete-user/admin-modal-delete-user";

@Component({
  selector: 'app-admin-user-list-table',
  imports: [AdminModalEditUser, AdminModalDeleteUser],
  templateUrl: './admin-user-list-table.html',
  styleUrl: './admin-user-list-table.css'
})
export class AdminUserListTable {

  users = [
    {user_id: 1, user_cuil: '20436319739', user_mail: 'acevedoestefano4@gmail.com', user_lastname: 'Acevedo', user_name: 'Estéfano Marcial', user_tel: '3435458494', user_address: 'Alfredo Palacios 1001', location_id: {location_name: 'Nogoyá', province_id: {province_name: 'Entre Ríos', country_id: {country_name: 'Argentina'}}}, rol_id: {rol_name: 'Estudiante'}},
    {user_id: 2, user_cuil: '20218787156', user_mail: 'adrianbracamonte@gmail.com', user_lastname: 'Bracamonte', user_name: 'Adrián Alejandro', user_tel: '3435453311', user_address: 'Camino del Sauce 82', location_id: {location_name: 'Victoria', province_id: {province_name: 'Entre Ríos', country_id: {country_name: 'Argentina'}}}, rol_id: {rol_name: 'Estudiante'}},
    {user_id: 3, user_cuil: '20356751231', user_mail: 'brianvanegas@gmail.com', user_lastname: 'Vanegas', user_name: 'Brian', user_tel: '3435459001', user_address: 'Belgrano 881', location_id: {location_name: 'Nogoyá', province_id: {province_name: 'Entre Ríos', country_id: {country_name: 'Argentina'}}}, rol_id: {rol_name: 'Profesor'}}
  ]

}
