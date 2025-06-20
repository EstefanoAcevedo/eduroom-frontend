import { Routes } from '@angular/router';
import { TeacherAttendanceList } from './teacher-attendance-list/teacher-attendance-list';
import { TeacherDashboard } from './teacher-dashboard/teacher-dashboard';
import { TeacherEditAttendance } from './teacher-edit-attendance/teacher-edit-attendance';
import { TeacherSubjects } from './teacher-subjects/teacher-subjects';
import { TeacherTakeAttendance } from './teacher-take-attendance/teacher-take-attendance';

export const teacher_routes: Routes = [
    {path: 'teacher/attendance-list', component: TeacherAttendanceList},
    {path: 'teacher/dashboard', component: TeacherDashboard},
    {path: 'teacher/edit-attendance', component: TeacherEditAttendance},
    {path: 'teacher/subjects', component: TeacherSubjects},
    {path: 'teacher/take-attendance', component: TeacherTakeAttendance},
];