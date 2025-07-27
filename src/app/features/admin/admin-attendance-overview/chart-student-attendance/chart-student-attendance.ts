import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-chart-student-attendance',
  imports: [ReactiveFormsModule, NgxEchartsModule],
  templateUrl: './chart-student-attendance.html',
  styleUrl: './chart-student-attendance.css'
})
export class ChartStudentAttendance {

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
    this.users = [
      {user_id: 1, user_name: 'Juan', user_lastname: 'Pérez'},
      {user_id: 2, user_name: 'Ana', user_lastname: 'Gómez'},
      {user_id: 3, user_name: 'Luis', user_lastname: 'Martínez'},
    ];
  }

  isStudentSelected: boolean = false;
  careers: {career_id: number, career_name: string}[] = [];
  subjects: {subject_id: number, subject_name: string, career_id: {career_alias: string}} [] = [];
  users: {user_id: number, user_name: string, user_lastname: string} [] = [];

  /* Formulario de estudiantes */
  studentForm = this.formBuilder.group({
    career: ['0', Validators.compose([Validators.required, Validators.min(1)])],
    subject: [{ value: '0', disabled: true }, Validators.compose([Validators.required, Validators.min(1)])],
    user: [{ value: '0', disabled: true }, Validators.compose([Validators.required, Validators.min(1)])]
  })

    /* Función a invocar cuando el usuario cambia el valor seleccionado en el select de carreras */
  onCareerChange() {
    this.studentForm.controls.subject.enable();
  }

    /* Función a invocar cuando el usuario cambia el valor seleccionado en el select de asignaturas */
  onSubjectChange() {
    this.studentForm.controls.user.enable();
  }

  onStudentChange() {
    this.isStudentSelected = true;
  }

/* Gráfico ejemplo de Echarts */

option = {
  title: {
    text: 'Asistencia de Juan Pérez - Programación III',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['Asistió', 'Faltó', 'Justificó'],
    top: 30
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '8%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5']
  },
  yAxis: {
    type: 'value',
    name: 'Clases'
  },
  series: [
    {
      name: 'Asistió',
      type: 'bar',
      stack: 'total',
      data: [2, 3, 2, 3, 2],
      itemStyle: { color: '#28a745' } // verde - poner el azul que se puso en la justificación de asistencias
    },
    {
      name: 'Faltó',
      type: 'bar',
      stack: 'total',
      data: [1, 0, 1, 0, 1],
      itemStyle: { color: '#dc3545' } // rojo
    },
    {
      name: 'Justificó',
      type: 'bar',
      stack: 'total',
      data: [0, 1, 0, 1, 0],
      itemStyle: { color: '#ffc107' } // amarillo
    }
  ]
};


}
