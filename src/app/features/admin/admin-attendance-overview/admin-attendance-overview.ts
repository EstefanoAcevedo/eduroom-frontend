import { Component } from '@angular/core';
import { ChartAttendanceOverview } from "./chart-attendance-overview/chart-attendance-overview";
import { RecentActivity } from "./recent-activity/recent-activity";
import { ChartStudentAttendance } from "./chart-student-attendance/chart-student-attendance";

@Component({
  selector: 'app-admin-attendance-overview',
  imports: [ChartAttendanceOverview, RecentActivity, ChartStudentAttendance],
  templateUrl: './admin-attendance-overview.html',
  styleUrl: './admin-attendance-overview.css'
})
export class AdminAttendanceOverview {

  

}
