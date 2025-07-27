import { Component } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-chart-attendance-overview',
  standalone: true,
  imports: [NgxEchartsModule],
  templateUrl: './chart-attendance-overview.html',
  styleUrl: './chart-attendance-overview.css'
})
export class ChartAttendanceOverview {
  option = {
    title: {
      text: 'Asistencias vs Inasistencias (ejemplo, datos ficticios)',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    legend: {
      data: ['Asistencias', 'Inasistencias'],
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
      data: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']
    },
    yAxis: {
      type: 'value',
      name: 'Cantidad de estudiantes'
    },
    series: [
      {
        name: 'Asistencias',
        type: 'bar',
        data: [85, 90, 88, 92, 87],
        itemStyle: {
          color: '#28a745'
        }
      },
      {
        name: 'Inasistencias',
        type: 'bar',
        data: [15, 10, 12, 8, 13],
        itemStyle: {
          color: '#dc3545'
        }
      }
    ]
  };
}
