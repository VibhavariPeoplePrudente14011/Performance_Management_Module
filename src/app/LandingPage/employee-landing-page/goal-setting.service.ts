import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GoalSettingService {

  private apiUrl = 'http://localhost:8080/goals/'; // Update this URL to match your backend

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getGoals(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addGoal(goal: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'create', goal, this.httpOptions);
  }

  getBhag(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'getBhag', this.httpOptions);
  }
}
