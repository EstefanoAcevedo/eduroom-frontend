import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SubjectsService } from '../subjects.service'; // Asegurate que la ruta sea correcta

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
  materiasActivas: any[] = [];
  notificaciones: any[] = [];

  constructor(private subjectsService: SubjectsService) { }

  ngOnInit(): void {
    this.estudiante = {
      nombre: 'Adrián Bracamonte'
    };

    this.ultimaAsistencia = {
      fecha: '2025-06-28',
      materia: 'Matemática'
    };

    // 🟢 Obtenemos las materias reales desde el servicio
    this.materiasActivas = this.subjectsService.getSubjects();

    this.notificaciones = [
      { id: 1, mensaje: 'Falta registrada el 25/06' },
      { id: 2, mensaje: 'Nueva clase de refuerzo disponible' }
    ];
  }

}
