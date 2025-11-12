import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../enviroments/enviroment';



export interface MySubjectApi {
    subject_id: number;
    subject_name: string;
    commission_id: number;
    commission_name: string;
}

export interface StudentSubjectView {
    nombre: string;
    comision: string;
    docente: string;
}
@Injectable({
    providedIn: 'root'
})

export class SubjectApiService {
    private http = inject(HttpClient);

    constructor() { }

    getMySubjects(): Observable<StudentSubjectView[]> {
        return this.http
            .get<MySubjectApi[]>(`${environment.apiUrl}my-subjects`)
            .pipe(
                map((response) =>
                    response.map((item) => ({
                        nombre: item.subject_name,
                        comision: item.commission_name,
                        docente: 'Sin docente asignado' // por ahora, porque el modelo todavía no tiene teacher
                    }))
                ));
    }
}
/*export class SubjectsService {
    constructor() { }

    getSubjects() {
        return [
            { nombre: 'Probabilidad y Estadística', comision: 'Tercer año', docente: 'Prof. Carolina Traverso' },
            { nombre: 'Programación III', comision: 'Tercer año', docente: 'Prof. Brian Vanegas' },
            { nombre: 'Análisis y Sistemas', comision: 'Tercer año', docente: 'Prof. Veronica Steven' },
            { nombre: 'Auditoría de Sistemas', comision: 'Tercer año', docente: 'Prof. Daian Hereñu' },
            { nombre: 'Ingeniería de Software', comision: 'Tercer año', docente: 'Prof. Daian Hereñu' }
        ];
    }
}
*/