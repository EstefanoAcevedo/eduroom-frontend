import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SubjectsService {
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
