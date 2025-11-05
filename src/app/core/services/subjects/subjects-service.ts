import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubjectsInterface } from '../../models/subjects/subjects-interface';
import { environment } from '../../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor() { }

  private http = inject(HttpClient);

  getSubjectsByCareerId(careerId: number): Observable<SubjectsInterface[]> {
    return this.http.get<SubjectsInterface[]>(`${environment.apiUrl}subjects-by-career/${careerId}`);
  }

}
