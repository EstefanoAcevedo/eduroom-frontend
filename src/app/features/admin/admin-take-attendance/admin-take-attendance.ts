import { Component } from '@angular/core';
import { TakeAttendance } from "../../attendance/take-attendance/take-attendance";

@Component({
  selector: 'app-admin-take-attendance',
  imports: [TakeAttendance],
  templateUrl: './admin-take-attendance.html',
  styleUrl: './admin-take-attendance.css'
})
export class AdminTakeAttendance {

}
