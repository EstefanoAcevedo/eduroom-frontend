import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-dashboard',
  standalone: true, // clave en Angular 20
  imports: [CommonModule], // necesario para *ngFor, *ngIf, etc.
  templateUrl: './student-dashboard.html',
  styleUrls: ['./student-dashboard.css']
})
export class StudentDashboard implements OnInit {

  estudiante: any;
  ultimaAsistencia: any;
  materiasActivas: any[] = [];
  notificaciones: any[] = [];

  ngOnInit(): void {
    this.estudiante = {
      nombre: 'Adrián Bracamonte'
    };

    this.ultimaAsistencia = {
      fecha: '2025-06-28',
      materia: 'Matemática'
    };

    this.materiasActivas = [
      { nombre: 'Matemática' },
      { nombre: 'Lengua' },
      { nombre: 'Programación' }
    ];

    this.notificaciones = [
      { id: 1, mensaje: 'Falta registrada el 25/06' },
      { id: 2, mensaje: 'Nueva clase de refuerzo disponible' }
    ];
  }

}
