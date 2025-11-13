import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreMultipleAttendancesRequestInterface } from '../../models/attendances/store-multiple-attendances-request-interface';
import { Observable } from 'rxjs';
import { StoreMultipleAttendancesResponseInterface } from '../../models/attendances/store-multiple-attendances-response-interface.ts';
import { environment } from '../../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AttendancesService {

  private http = inject(HttpClient);

  storeMultipleAttendances(request: StoreMultipleAttendancesRequestInterface): Observable<StoreMultipleAttendancesResponseInterface> {
    return this.http.post<StoreMultipleAttendancesResponseInterface>(`${environment.apiUrl}store-multiple-attendances`, request);
  }

}
