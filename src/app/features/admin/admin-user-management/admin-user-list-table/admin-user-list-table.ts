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

}
