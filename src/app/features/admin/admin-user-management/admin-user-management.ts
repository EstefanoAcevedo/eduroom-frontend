import { Component } from '@angular/core';
import { AdminUserListTable } from "./admin-user-list-table/admin-user-list-table";
import { AdminUserRegisterRequest } from "./admin-user-register-request/admin-user-register-request";

@Component({
  selector: 'app-admin-user-management',
  imports: [AdminUserListTable, AdminUserRegisterRequest],
  templateUrl: './admin-user-management.html',
  styleUrl: './admin-user-management.css'
})
export class AdminUserManagement {
  showUserListTable = true;
}
