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
    { path: 'attendance-overview', component: AdminAttendanceOverview },
    { path: 'dashboard', component: AdminDashboard },
    { path: 'edit-attendance', component: AdminEditAttendance },
    { path: 'justify-absence', component: AdminJustifyAbsence },
    { path: 'absence-reports', component: AdminAbsenceReports }, 
    { path: 'generate-reports', component: AdminGenerateReports },
    { path: 'take-attendance', component: AdminTakeAttendance },
    { path: 'user-management', component: AdminUserManagement },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];