import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-modal-absence-reports-filter',
  imports: [ReactiveFormsModule],
  templateUrl: './admin-modal-absence-reports-filter.html',
  styleUrl: './admin-modal-absence-reports-filter.css'
})
export class AdminModalAbsenceReportsFilter {

  private formBuilder = inject(FormBuilder);

  ngOnInit() {
    this.careers = [
      {career_id: 1, career_name: 'Tecnicatura Superior en Análisis y Desarrollo de Software'},
      {career_id: 2, career_name: 'Tecnicatura Superior en Enfermería'},
      {career_id: 3, career_name: 'Profesorado de Educación Secundaria en Matemática'},
    ]
  }

  careers: {career_id: number, career_name: string}[] = [];
  subjects: {subject_id: number, subject_name: string, career_id: number} [] = [];
  commissions: {commission_id: number, commission_name: string} [] = [];
  enrollments: {enrollment_id: number, enrollment_academic_year: number, user_id: {user_lastname: string, user_name: string}} [] = [];

  /* Formulario de reportes */
  reportForm = this.formBuilder.group({
    career: ['0'],
    subject: [{ value: '0', disabled: true }],
    commission: [{ value: '0', disabled: true }],
    students: [{ value: '0', disabled: true }],
    report_from_date: [{ value: '', disabled: true }],
    report_to_date: [{ value: '', disabled: true }],
    report_name: ['', Validators.compose([Validators.maxLength(255)])]
  })

  /* Getters de los form controls del reportForm */
  get career() {
    return this.reportForm.controls.career;
  }
  get subject() {
    return this.reportForm.controls.subject;
  }
  get commission() {
    return this.reportForm.controls.commission;
  }
  get students() {
    return this.reportForm.controls.students;
  }
  get report_from_date() {
    return this.reportForm.controls.report_from_date;
  }
  get report_to_date() {
    return this.reportForm.controls.report_to_date;
  }
  get report_name() {
    return this.reportForm.controls.report_name;
  }

  onCareerChange() {
    this.subjects = [
      {subject_id: 1, subject_name: 'Programación III', career_id: 1},
      {subject_id: 2, subject_name: 'Probabilidad y Estadística', career_id: 1},
      {subject_id: 3, subject_name: 'Práctica Profesionalizante III', career_id: 1},
    ]
    this.subject.enable();
  }

  onSubjectChange() {
    this.commissions = [
      {commission_id: 1, commission_name: 'Primera división'},
      {commission_id: 2, commission_name: 'Segunda división'},
      {commission_id: 3, commission_name: 'Tercera división'},
    ]
    this.commission.enable();
  }

  onCommissionChange() {
    this.enrollments = [
      {enrollment_id: 1, enrollment_academic_year: 2025, user_id: {user_lastname: 'Acevedo', user_name: 'Estéfano Marcial'}},
      {enrollment_id: 2, enrollment_academic_year: 2025, user_id: {user_lastname: 'Bracamonte', user_name: 'Adrián Alejandro'}},
      {enrollment_id: 3, enrollment_academic_year: 2025, user_id: {user_lastname: 'Vanegas', user_name: 'Brian'}},
    ]
    this.report_from_date.enable();
    this.report_to_date.enable();
    this.students.enable();
  }

  report: {report_id: number, report_name: string, report_from_date: string, report_to_date: string} | undefined;
  isReportGenerated: boolean = false;

  onSubmit() {
    if (this.reportForm.valid) {
      this.report = {report_id: 1, report_name: "Reporte Ejemplo - Programación III - Primera División", report_from_date: "2025-01-01", report_to_date: "2025-12-01" };
      this.isReportGenerated = true;
    } else {
      this.isReportGenerated = false;
      this.reportForm.markAllAsTouched();
    }
  }

}

