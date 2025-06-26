import { Routes } from '@angular/router';
import { StudentAttendanceHistory } from './student-attendance-history/student-attendance-history';
import { StudentDashboard } from './student-dashboard/student-dashboard';
import { StudentSubjects } from './student-subjects/student-subjects';

export const student_routes: Routes = [
    { path: 'attendance-history', component: StudentAttendanceHistory },
    { path: 'dashboard', component: StudentDashboard },
    { path: 'subjects', component: StudentSubjects },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];