import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-attendance',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-attendance.html',
  styleUrl: './edit-attendance.css'
})
export class EditAttendance {

  private formBuilder = inject(FormBuilder);

  ngOnInit() {
    this.careers = [
      {career_id: 1, career_name: 'Tecnicatura Superior en Análisis y Desarrollo de Software'},
      {career_id: 2, career_name: 'Tecnicatura Superior en Enfermería'},
      {career_id: 3, career_name: 'Profesorado de Educación Secundaria en Matemática'},
    ]
  }

  /* Variable utilizada para determinar cuándo mostrar la tabla para tomar asistencia */
  isCommissionSelected: boolean = false;

  /* Variables tipo array que se utilizarán para rellenar los selects del selector de comisión, al principio son vacíos, su valor cambiará a medida que se selecciona una carrera, materia y comisión */
  careers: {career_id: number, career_name: string}[] = [];
  subjects: {subject_id: number, subject_name: string, career_id: number} [] = [];
  commissions: {commission_id: number, commission_name: string} [] = [];
  enrollments: {enrollment_id: number, enrollment_academic_year: number, user_id: {user_lastname: string, user_name: string}} [] = [];

  /* Formulario de comisión */
  commissionForm = this.formBuilder.group({
    career: ['0', Validators.compose([Validators.required, Validators.min(1)])],
    subject: [{ value: '0', disabled: true }, Validators.compose([Validators.required, Validators.min(1)])],
    commission: [{ value: '0', disabled: true }, Validators.compose([Validators.required, Validators.min(1)])],
    attendance_date: [{ value: '0', disabled: true }, Validators.compose([Validators.required])]
  })

  onCareerChange() {
    this.subjects = [
      {subject_id: 1, subject_name: 'Programación III', career_id: 1},
      {subject_id: 1, subject_name: 'Probabilidad y Estadística', career_id: 1},
      {subject_id: 1, subject_name: 'Práctica Profesionalizante III', career_id: 1},
    ]
    this.commissionForm.controls.subject.enable();
  }

  onSubjectChange() {
    this.commissions = [
      {commission_id: 1, commission_name: 'Primera división'},
      {commission_id: 2, commission_name: 'Segunda división'},
      {commission_id: 3, commission_name: 'Tercera división'},
    ]
    this.commissionForm.controls.commission.enable();
  }

  onCommissionChange() {
    this.commissionForm.controls.attendance_date.enable();
  }
  
  onAttendanceDateChange() {
    this.enrollments = [
      {enrollment_id: 1, enrollment_academic_year: 2025, user_id: {user_lastname: 'Acevedo', user_name: 'Estéfano Marcial'}},
      {enrollment_id: 2, enrollment_academic_year: 2025, user_id: {user_lastname: 'Bracamonte', user_name: 'Adrián Alejandro'}},
      {enrollment_id: 3, enrollment_academic_year: 2025, user_id: {user_lastname: 'Vanegas', user_name: 'Brian'}},
    ]
    this.newAttendances();
    this.isCommissionSelected = true;
  }

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
        attendance_state_id: [1, Validators.compose([Validators.required, Validators.min(1)])],
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

  editAttendance() {
    if (this.attendancesForm.valid) {
      console.log(this.attendancesForm.value);
    } else {
      this.attendancesForm.markAllAsTouched();
    }
  }

}