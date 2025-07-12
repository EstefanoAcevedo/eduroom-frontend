import { Routes } from "@angular/router";
import { AdminUserListTable } from "./admin-user-list-table/admin-user-list-table";
import { AdminUserRegisterRequest } from "./admin-user-register-request/admin-user-register-request";

export const user_management_routes: Routes = [
    {path:'user-list-table', component: AdminUserListTable},
    {path:'user-register-request', component: AdminUserRegisterRequest}
]