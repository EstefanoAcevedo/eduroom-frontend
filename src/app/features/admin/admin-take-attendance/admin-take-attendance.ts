import { Component } from '@angular/core';
import { CourseSelectionTable } from "../../attendance/course-selection-table/course-selection-table";

@Component({
  selector: 'app-admin-take-attendance',
  imports: [CourseSelectionTable],
  templateUrl: './admin-take-attendance.html',
  styleUrl: './admin-take-attendance.css'
})
export class AdminTakeAttendance {

}
