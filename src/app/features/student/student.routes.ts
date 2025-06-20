import { Routes } from '@angular/router';
import { StudentAttendanceHistory } from './student-attendance-history/student-attendance-history';
import { StudentDashboard } from './student-dashboard/student-dashboard';
import { StudentSubjects } from './student-subjects/student-subjects';

export const student_routes: Routes = [
    {path: 'student/attendance-history', component: StudentAttendanceHistory},
    {path: 'student/dashboard', component: StudentDashboard},
    {path: 'student/subjects', component: StudentSubjects},
];