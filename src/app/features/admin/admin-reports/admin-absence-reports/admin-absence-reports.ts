import { Component } from '@angular/core';
import { AdminModalAbsenceReportsFilter } from './admin-modal-absence-reports-filter/admin-modal-absence-reports-filter';

@Component({
  selector: 'app-admin-absence-reports',
  imports: [AdminModalAbsenceReportsFilter],
  templateUrl: './admin-absence-reports.html',
  styleUrl: './admin-absence-reports.css'
})
export class AdminAbsenceReports {

  ngOnInit() {
    this.reports = [
      {report_id: 1, report_name: "Tecnicatura Superior en Análisis y Desarrollo de Software - Programación III - Primera división", report_from_date: "2025-01-01", report_to_date: "2025-12-31"},
      {report_id: 2, report_name: "Tecnicatura Superior en Análisis y Desarrollo de Software - Probabilidad y Estadística - Primera división", report_from_date: "2025-01-01", report_to_date: "2025-12-31"},
      {report_id: 3, report_name: "Tecnicatura Superior en Enfermería - Anestesia I - Primera división", report_from_date: "2025-01-01", report_to_date: "2025-12-31"}
    ]
  }
  
  /* Variable tipo array que se utilizará para llenar la tabla con la lista de registros */
  reports: {report_id: number, report_name: string, report_from_date: string, report_to_date: string}[] = [];

}
