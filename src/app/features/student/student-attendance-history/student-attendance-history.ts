import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-student-attendance-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-attendance-history.html'
})
export class StudentAttendanceHistory implements OnInit {
  attendances = [
    { fecha: '2025-07-15', materia: 'Matemática I', comision: '1° Año', estado: 'Presente' },
    { fecha: '2025-07-16', materia: 'Matemática I', comision: '1° Año', estado: 'Ausente' },
    { fecha: '2025-07-18', materia: 'Matemática I', comision: '1° Año', estado: 'Presente' },
    { fecha: '2025-07-17', materia: 'Programación II', comision: '2° Año', estado: 'Ausente' },
    { fecha: '2025-07-19', materia: 'Programación II', comision: '2° Año', estado: 'Presente' },
    { fecha: '2025-07-21', materia: 'Programación II', comision: '2° Año', estado: 'Justificada' },
    { fecha: '2025-07-20', materia: 'Análisis de Sistemas', comision: '3° Año', estado: 'Presente' },
    { fecha: '2025-07-22', materia: 'Análisis de Sistemas', comision: '3° Año', estado: 'Presente' },
    { fecha: '2025-07-23', materia: 'Probabilidad y Estadistica', comision: '3° Año', estado: 'Presente' },
    { fecha: '2025-07-23', materia: 'Auditoria de Sistemas', comision: '3° Año', estado: 'Presente' },
    { fecha: '2025-07-23', materia: 'Auditoria de Sistemas', comision: '3° Año', estado: 'Presente' },
    { fecha: '2025-07-23', materia: 'Análisis de Sistemas', comision: '3° Año', estado: 'Ausente' }



  ];

  materiasUnicas: string[] = [];
  filtroMateria: string = '';
  filtroDesde: string = '';
  filtroHasta: string = '';

  attendancesFiltradas = this.attendances;

  ngOnInit(): void {
    // Obtener materias únicas para el selector
    this.materiasUnicas = [...new Set(this.attendances.map(a => a.materia))];
    this.filtrar();
  }

  filtrar(): void {
    this.attendancesFiltradas = this.attendances.filter(a => {
      const fecha = new Date(a.fecha);
      const desde = this.filtroDesde ? new Date(this.filtroDesde) : null;
      const hasta = this.filtroHasta ? new Date(this.filtroHasta) : null;

      return (
        (!this.filtroMateria || a.materia === this.filtroMateria) &&
        (!desde || fecha >= desde) &&
        (!hasta || fecha <= hasta)
      );
    });
  }
}
