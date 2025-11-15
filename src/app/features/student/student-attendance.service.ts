import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../enviroments/enviroment';

export interface MyAttendanceApi {
    attendance_id: number;
    attendance_date: string;
    subject_id: number | null;
    subject_name: string | null;
    commission_id: number | null;
    commission_name: string | null;
    attendance_state_id: number | null;
    attendance_state_name: string | null;
}

export interface StudentAttendanceView {
    fecha: string;
    materia: string;
    comision: string;
    estado: string;
}

@Injectable({
    providedIn: 'root'
})
export class StudentAttendanceService {

    private http = inject(HttpClient);

    constructor() { }

    /** Historial de asistencias del estudiante logueado */
    getMyAttendanceHistory(): Observable<StudentAttendanceView[]> {
        return this.http
            .get<MyAttendanceApi[]>(`${environment.apiUrl}my-attendances`)
            .pipe(
                map((response) =>
                    response.map((item) => ({
                        fecha: item.attendance_date,
                        materia: item.subject_name ?? 'Sin materia',
                        comision: item.commission_name ?? 'Sin comisión',
                        estado: item.attendance_state_name ?? 'Sin estado'
                    }))
                )
            );
    }
}
