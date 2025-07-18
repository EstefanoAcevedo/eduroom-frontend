import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-selection-table',
  imports: [ReactiveFormsModule],
  templateUrl: './course-selection-table.html',
  styleUrl: './course-selection-table.css'
})
export class CourseSelectionTable {

  private formBuilder = inject(FormBuilder);

  ngOnInit() {
    this.newAttendances();
  }

  careers = [
    {career_id: 1, career_name: 'Tecnicatura Superior en Análisis y Desarrollo de Software'},
    {career_id: 2, career_name: 'Tecnicatura Superior en Enfermería'},
    {career_id: 3, career_name: 'Profesorado de Educación Secundaria en Matemática'},
  ]

  subjects = [
    {subject_id: 1, subject_name: 'Programación III', career_id: 1},
    {subject_id: 1, subject_name: 'Probabilidad y Estadística', career_id: 1},
    {subject_id: 1, subject_name: 'Práctica Profesionalizante III', career_id: 1},
  ]

  commissions = [
    {commission_id: 1, commission_name: 'Primera división'},
    {commission_id: 2, commission_name: 'Segunda división'},
    {commission_id: 3, commission_name: 'Tercera división'},
  ]

  enrollments = [
    {enrollment_id: 1, enrollment_academic_year: 2025, user_id: {user_lastname: 'Acevedo', user_name: 'Estéfano Marcial'}},
    {enrollment_id: 2, enrollment_academic_year: 2025, user_id: {user_lastname: 'Bracamonte', user_name: 'Adrián Alejandro'}},
    {enrollment_id: 3, enrollment_academic_year: 2025, user_id: {user_lastname: 'Vanegas', user_name: 'Brian'}},
  ]

  attendance_states = [
    {attendance_state_id: 1, attendance_state_name: 'Presente'},
    {attendance_state_id: 2, attendance_state_name: 'Media falta'},
    {attendance_state_id: 3, attendance_state_name: 'Ausente'},
  ]

  attendancesForm = this.formBuilder.group({
    attendance_date: ['', Validators.compose([Validators.required])],
    attendances: this.formBuilder.array([])
  })

  newAttendances() {
    this.enrollments.forEach(enrollment => {
      const formControl = this.formBuilder.group({
        enrollment_id: enrollment.enrollment_id,
        attendance_state_id: [0, Validators.compose([Validators.required, Validators.min(1)])],
      });
      (this.attendancesForm.get('attendances') as FormArray).push(formControl);
    });
  }

  get attendance_date() {
    return this.attendancesForm.controls.attendance_date;
  }
  get attendances(): FormArray {
    return this.attendancesForm.controls.attendances;
  }

  isAttendancesInvalid : boolean = false

  registerAttendance() {
    if (this.attendancesForm.valid) {
      console.log(this.attendancesForm.value);
      this.isAttendancesInvalid = false;
    
    } else if (this.attendances.invalid) {
      this.isAttendancesInvalid = true;
      this.attendancesForm.markAllAsTouched();
    
    } else {
      this.attendancesForm.markAllAsTouched();
    }
  }

}
