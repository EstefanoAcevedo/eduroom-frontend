import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-subjects',
  imports: [ReactiveFormsModule],
  templateUrl: './subjects.html',
  styleUrl: './subjects.css'
})
export class Subjects {

  private formBuilder = inject(FormBuilder);

  ngOnInit() {
    this.careers = [
      {career_id: 1, career_name: 'Tecnicatura Superior en Análisis y Desarrollo de Software'},
      {career_id: 2, career_name: 'Tecnicatura Superior en Enfermería'},
      {career_id: 3, career_name: 'Profesorado de Educación Secundaria en Matemática'},
    ];
  }

  isSubjectSelected: boolean = false;
  careers: {career_id: number, career_name: string}[] = [];
  subjects: {subject_id: number, subject_name: string, career_id: {career_name: string}} [] = [];

    /* Formulario de asignaturas */
  subjectForm = this.formBuilder.group({
    career: ['0', Validators.compose([Validators.required, Validators.min(1)])],
  })

  /* Función a invocar cuando el usuario cambia el valor seleccionado en el select de carreras */
  onCareerChange() {
    this.subjects = [
      {subject_id: 1, subject_name: 'Programación III', career_id: {career_name: 'Tecnicatura Superior en Análisis y Desarrollo de  Software'}},
      {subject_id: 2, subject_name: 'Probabilidad y Estadística', career_id: {career_name: 'Tecnicatura Superior en Análisis y Desarrollo de  Software'}},
      {subject_id: 3, subject_name: 'Práctica Profesionalizante III', career_id: {career_name: 'Tecnicatura Superior en Análisis y Desarrollo de  Software'}},
    ];
    this.isSubjectSelected = true;
  }

}

