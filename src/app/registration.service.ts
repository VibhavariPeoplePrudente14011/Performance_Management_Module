import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  // private apiUrl = 'http://localhost:8080/users/create';
  
  private apiUrl = 'http://localhost:8080/users/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  register(userData:any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'create', userData, this.httpOptions);
  }

  login(loginData: any) {
    return this.http.post<any>(this.apiUrl+'login', loginData, this.httpOptions);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('isLoggedIn');
  }

  getRoles() {
    return this.http.get<any>(this.apiUrl+'getRoles', this.httpOptions);
  }

  


}
