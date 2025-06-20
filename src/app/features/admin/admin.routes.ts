import { Routes } from '@angular/router';
import { AdminAttendanceOverview } from './admin-attendance-overview/admin-attendance-overview';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { AdminEditAttendance } from './admin-edit-attendance/admin-edit-attendance';
import { AdminJustifyAbsence } from './admin-justify-absence/admin-justify-absence';
import { AdminAbsenceReports } from './admin-reports/admin-absence-reports/admin-absence-reports';
import { AdminGenerateReports } from './admin-reports/admin-generate-reports/admin-generate-reports';
import { AdminTakeAttendance } from './admin-take-attendance/admin-take-attendance';
import { AdminUserManagement } from './admin-user-management/admin-user-management';

export const admin_routes: Routes = [
    {path: 'admin/attendance-overview', component: AdminAttendanceOverview},
    {path: 'admin/dashboard', component: AdminDashboard},
    {path: 'admin/edit-attendance', component: AdminEditAttendance},
    {path: 'admin/justify-absence', component: AdminJustifyAbsence},
    {path: 'admin/absence-reports', component: AdminAbsenceReports},
    {path: 'admin/generate-reports', component: AdminGenerateReports},
    {path: 'admin/take-attendance', component: AdminTakeAttendance},
    {path: 'admin/user-management', component: AdminUserManagement},
];