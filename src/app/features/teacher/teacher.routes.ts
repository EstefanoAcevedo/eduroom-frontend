import { Routes } from '@angular/router';
import { TeacherAttendanceList } from './teacher-attendance-list/teacher-attendance-list';
import { TeacherDashboard } from './teacher-dashboard/teacher-dashboard';
import { TeacherEditAttendance } from './teacher-edit-attendance/teacher-edit-attendance';
import { TeacherSubjects } from './teacher-subjects/teacher-subjects';
import { TeacherTakeAttendance } from './teacher-take-attendance/teacher-take-attendance';

export const teacher_routes: Routes = [
    { path: 'attendance-list', component: TeacherAttendanceList },
    { path: 'dashboard', component: TeacherDashboard },
    { path: 'edit-attendance', component: TeacherEditAttendance },
    { path: 'subjects', component: TeacherSubjects },
    { path: 'take-attendance', component: TeacherTakeAttendance },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];