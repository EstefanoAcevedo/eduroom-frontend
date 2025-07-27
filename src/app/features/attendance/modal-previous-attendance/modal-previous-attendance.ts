import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-modal-previous-attendance',
  imports: [NgClass],
  templateUrl: './modal-previous-attendance.html',
  styleUrl: './modal-previous-attendance.css'
})
export class ModalPreviousAttendance {

  ngOnInit() {
    this.enrollments = [
      {enrollment_id: 1, user_id: {user_lastname: 'Acevedo', user_name: 'Estéfano Marcial'}, attendance_state_id: 1},
      {enrollment_id: 2, user_id: {user_lastname: 'Bracamonte', user_name: 'Adrián Alejandro'}, attendance_state_id: 2},
      {enrollment_id: 3, user_id: {user_lastname: 'Vanegas', user_name: 'Brian'}, attendance_state_id: 3},
    ];
  }

  enrollments: {enrollment_id: number, user_id: {user_lastname: string, user_name: string}, attendance_state_id: number} [] = [];

}
