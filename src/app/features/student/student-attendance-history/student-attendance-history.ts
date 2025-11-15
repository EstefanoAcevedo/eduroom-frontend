import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  StudentAttendanceService,
  StudentAttendanceView
} from '../student-attendance.service';

@Component({
  selector: 'app-student-attendance-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-attendance-history.html'
})
export class StudentAttendanceHistory implements OnInit {

  attendances: StudentAttendanceView[] = [];
  attendancesFiltradas: StudentAttendanceView[] = [];
  materiasUnicas: string[] = [];

  filtroMateria: string = '';
  filtroDesde: string = '';
  filtroHasta: string = '';

  isLoading = false;
  hasError = false;

  constructor(private attendanceService: StudentAttendanceService) { }

  ngOnInit(): void {
    this.cargarHistorial();
  }

  private cargarHistorial(): void {
    this.isLoading = true;
    this.hasError = false;

    this.attendanceService.getMyAttendanceHistory().subscribe({
      next: (lista: StudentAttendanceView[]) => {
        this.attendances = lista;
        this.attendancesFiltradas = [...lista];
        this.actualizarMateriasUnicas();
        this.isLoading = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      }
    });
  }

  private actualizarMateriasUnicas(): void {
    const setMaterias = new Set(this.attendances.map(a => a.materia));
    this.materiasUnicas = Array.from(setMaterias);
  }

  /** Ejecuta el filtrado por materia y rango de fechas */
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
