import { Component } from '@angular/core';
import { JustifyAbsence } from "../../attendance/justify-absence/justify-absence";
import { EditAttendance } from "../../attendance/edit-attendance/edit-attendance";

@Component({
  selector: 'app-teacher-justify-absence',
  imports: [JustifyAbsence, EditAttendance],
  templateUrl: './teacher-justify-absence.html',
  styleUrl: './teacher-justify-absence.css'
})
export class TeacherJustifyAbsence {

}
