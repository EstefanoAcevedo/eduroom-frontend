import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-generate-reports',
  imports: [ReactiveFormsModule],
  templateUrl: './admin-generate-reports.html',
  styleUrl: './admin-generate-reports.css'
})
export class AdminGenerateReports {

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

  /* Formulario de reportes */
  reportForm = this.formBuilder.group({
    career: ['0', Validators.compose([Validators.required, Validators.min(1)])],
    subject: [{ value: '0', disabled: true }, Validators.compose([Validators.required, Validators.min(1)])],
    commission: [{ value: '0', disabled: true }, Validators.compose([Validators.required, Validators.min(1)])],
    students: [{ value: '0', disabled: true }, Validators.compose([Validators.required, Validators.min(1)])],
    report_from_date: [{ value: '', disabled: true }, Validators.compose([Validators.required])],
    report_to_date: [{ value: '', disabled: true }, Validators.compose([Validators.required])],
    report_name: ['', Validators.compose([Validators.required, Validators.maxLength(255)])]
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
    this.report_name.setValue(this.getSelectedCareerName()!);
  }

  onSubjectChange() {
    this.commissions = [
      {commission_id: 1, commission_name: 'Primera división'},
      {commission_id: 2, commission_name: 'Segunda división'},
      {commission_id: 3, commission_name: 'Tercera división'},
    ]
    this.commission.enable();
    this.report_name.setValue(`${this.getSelectedCareerName()} - ${this.getSelectedSubjectName()}`);
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
    this.report_name.setValue(`${this.getSelectedCareerName()} - ${this.getSelectedSubjectName()} - ${this.getSelectedCommissionName()}`);
  }

  onStudentChange() {
    this.report_name.setValue(`${this.getSelectedCareerName()} - ${this.getSelectedSubjectName()} - ${this.getSelectedCommissionName()} - ${this.getSelectedStudentName()}`);
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

  getSelectedCareerName(): string | undefined {
    const value = this.career.value;
    const found = this.careers.find(career => career.career_id.toString() === value);
    return found?.career_name;
  }

  getSelectedSubjectName(): string | undefined {
    const value = this.subject.value;
    const found = this.subjects.find(subject => subject.subject_id.toString() === value);
    return found?.subject_name;
  }

  getSelectedCommissionName(): string | undefined {
    const value = this.commission.value;
    const found = this.commissions.find(commission => commission.commission_id.toString() === value);
    return found?.commission_name;
  }

  getSelectedStudentName(): string | undefined {
    const value = this.students.value;
    const found = this.enrollments.find(enrollment => enrollment.enrollment_id.toString() === value);
    if (found !== undefined) {
      let studentName = `${found.user_id.user_lastname}, ${found.user_id.user_name}`;
      return studentName;
    } else {
      return "Todos";
    }
    
  }

}
