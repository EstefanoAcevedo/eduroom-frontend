import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SubjectsService } from '../../../core/services/subjects/subjects-service';
import { StudentSubjectView } from '../../../core/services/subjects/student-subject-view';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './student-dashboard.html',
  styleUrls: ['./student-dashboard.css']
})
export class StudentDashboard implements OnInit {

  estudiante: any;
  ultimaAsistencia: any;
  notificaciones: any[] = [];

  constructor(private subjectsService: SubjectsService) { }

  ngOnInit(): void {
    this.getMySubjects();
    this.estudiante = {
      nombre: 'Adrián Bracamonte'
    };
    this.ultimaAsistencia = {
      fecha: '2025-06-28',
      materia: 'Matemática'
    };
    this.notificaciones = [
      { id: 1, mensaje: 'Falta registrada el 25/06' },
      { id: 2, mensaje: 'Nueva clase de refuerzo disponible' }
    ];
  }

  materiasActivas: StudentSubjectView[] = [];
  getMySubjects() {
    this.subjectsService.getMySubjects().subscribe({
      next: (response) => {
        this.materiasActivas = response;
      }
    })
  }

}
