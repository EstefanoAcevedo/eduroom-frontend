import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ModalPreviousAttendance } from "../modal-previous-attendance/modal-previous-attendance";

@Component({
  selector: 'app-attendance-list',
  imports: [ReactiveFormsModule, ModalPreviousAttendance],
  templateUrl: './attendance-list.html',
  styleUrl: './attendance-list.css'
})
export class AttendanceList {

  private formBuilder = inject(FormBuilder);

  ngOnInit() {
    this.careers = [
      {career_id: 1, career_name: 'Tecnicatura Superior en Análisis y Desarrollo de Software'},
      {career_id: 2, career_name: 'Tecnicatura Superior en Enfermería'},
      {career_id: 3, career_name: 'Profesorado de Educación Secundaria en Matemática'},
    ];
    this.subjects = [
      {subject_id: 1, subject_name: 'Programación III', career_id: {career_alias: 'Software'}},
      {subject_id: 2, subject_name: 'Probabilidad y Estadística', career_id: {career_alias: 'Software'}},
      {subject_id: 3, subject_name: 'Práctica Profesionalizante III', career_id: {career_alias: 'Software'}},
    ];
    this.commissions = [
      {commission_id: 1, commission_name: 'Primera división'},
      {commission_id: 2, commission_name: 'Segunda división'},
      {commission_id: 3, commission_name: 'Tercera división'},
    ]
  }

  isCommissionSelected: boolean = false;

  careers: {career_id: number, career_name: string}[] = [];
  subjects: {subject_id: number, subject_name: string, career_id: {career_alias: string}} [] = [];
  commissions: {commission_id: number, commission_name: string} [] = [];
  previousAttendances: {attendance_date: string, commission_id: {commission_name: string}, subject_id: {subject_name: string}} [] = [];

  /* Formulario de comisión */
  commissionForm = this.formBuilder.group({
    career: ['0', Validators.compose([Validators.required, Validators.min(1)])],
    subject: [{ value: '0', disabled: true }, Validators.compose([Validators.required, Validators.min(1)])],
    commission: [{ value: '0', disabled: true }, Validators.compose([Validators.required, Validators.min(1)])]
  })

  /* Función a invocar cuando el usuario cambia el valor seleccionado en el select de carreras */
  onCareerChange() {
    this.commissionForm.controls.subject.enable();
  }

    /* Función a invocar cuando el usuario cambia el valor seleccionado en el select de asignaturas */
  onSubjectChange() {
    this.commissionForm.controls.commission.enable();
  }

    /* Función a invocar cuando el usuario cambia el valor seleccionado en el select de comisiones */
  onCommissionChange() {
    this.isCommissionSelected = true;
    this.previousAttendances = [
      { attendance_date: '2023-01-15', commission_id: { commission_name: 'Primera división' }, subject_id: { subject_name: 'Programación III' } },
      { attendance_date: '2023-01-16', commission_id: { commission_name: 'Primera división' }, subject_id: { subject_name: 'Programación III' } },
      { attendance_date: '2023-01-17', commission_id: { commission_name: 'Primera división' }, subject_id: { subject_name: 'Programación III' } },
    ];
  }

}
