import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get<any>(environment.endpoint.users);
  }

  saveUser(user) {
    return this.http.post<any>(environment.endpoint.users, user);
  }
}
