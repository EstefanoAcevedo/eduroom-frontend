import { Component } from '@angular/core';
import { TakeAttendance } from "../../attendance/take-attendance/take-attendance";

@Component({
  selector: 'app-teacher-take-attendance',
  imports: [TakeAttendance],
  templateUrl: './teacher-take-attendance.html',
  styleUrl: './teacher-take-attendance.css'
})
export class TeacherTakeAttendance {

}
