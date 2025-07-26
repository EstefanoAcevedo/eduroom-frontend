import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormArray, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-take-attendance',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './take-attendance.html',
  styleUrl: './take-attendance.css'
})
export class TakeAttendance {

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
    commission: [{ value: '0', disabled: true }, Validators.compose([Validators.required, Validators.min(1)])]
  })

  /* Función a invocar cuando el usuario cambia el valor seleccionado en el select de carreras */
  onCareerChange() {
    this.subjects = [
      {subject_id: 1, subject_name: 'Programación III', career_id: 1},
      {subject_id: 1, subject_name: 'Probabilidad y Estadística', career_id: 1},
      {subject_id: 1, subject_name: 'Práctica Profesionalizante III', career_id: 1},
    ]
    this.commissionForm.controls.subject.enable();
  }

    /* Función a invocar cuando el usuario cambia el valor seleccionado en el select de asignaturas */
  onSubjectChange() {
    this.commissions = [
      {commission_id: 1, commission_name: 'Primera división'},
      {commission_id: 2, commission_name: 'Segunda división'},
      {commission_id: 3, commission_name: 'Tercera división'},
    ]
    this.commissionForm.controls.commission.enable();
  }

    /* Función a invocar cuando el usuario cambia el valor seleccionado en el select de comisiones */
  onCommissionChange() {
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

  /* Formulario de asistencia */
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

  /* Función para alternar el estado de asistencia de un estudiante */
  toggleAttendanceState(index: number) {
    const attendanceState = this.attendances.at(index).get('attendance_state_id');
    switch (attendanceState?.value) {
      case 0: // Marcar como presente cuando aún no tiene estado
          this.attendances.at(index).get('attendance_state_id')?.setValue(1);
        break;
      case 1: // Marcar como media falta cuando está como presente
          this.attendances.at(index).get('attendance_state_id')?.setValue(2);
        break;
      case 2: // Marcar como ausente cuando está como media falta
          this.attendances.at(index).get('attendance_state_id')?.setValue(3);
        break;
      default:  // Marcar como presente en cualquier otro caso
        this.attendances.at(index).get('attendance_state_id')?.setValue(1);
        break;
    }
  }

  /* Variable utilizada para determinar cuándo mostrar el mensaje de error "Falta tomar la asistencia de uno o más estudiantes" */
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
