import { Component } from '@angular/core';
import { MisMateriasComponent } from './mis-materias/mis-materias'; // Asegurate que la ruta sea correcta

@Component({
  selector: 'app-student-subjects',
  standalone: true,
  imports: [MisMateriasComponent],
  templateUrl: './student-subjects.html',
  styleUrls: ['./student-subjects.css'] // corregido: styleUrl → styleUrls
})

export class StudentSubjects {
  subjects = [
    { nombre: 'Probabilidad y Estadistica', comision: 'Tercer año', docente: 'Prof. Carolina Traverso' },
    { nombre: 'Programación III', comision: 'Tercer año', docente: 'Prof. Brian Vanegas' },
    { nombre: 'Anális y Sistemas', comision: 'Tercer año', docente: 'Prof. Veronica Steven' },
    { nombre: 'Auditoria de Sistemas', comision: 'Tercer año', docente: 'Prof. Daian Hereñu' },
    { nombre: 'Ingenieria de Software', comision: 'Tercer año', docente: 'Prof. Daian Hereñu' },


  ];
}