import { Component} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AttendanceList } from "../../attendance/attendance-list/attendance-list";

@Component({
  selector: 'app-teacher-attendance-list',
  imports: [ReactiveFormsModule, AttendanceList],
  templateUrl: './teacher-attendance-list.html',
  styleUrl: './teacher-attendance-list.css'
})
export class TeacherAttendanceList {

  

}
