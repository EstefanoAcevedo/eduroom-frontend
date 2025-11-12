import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../../models/users/user-interface';
import { environment } from '../../../../enviroments/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(`${environment.apiUrl}users`);
  }

}
