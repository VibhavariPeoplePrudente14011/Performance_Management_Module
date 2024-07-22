import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalSettingService {

  private apiUrl = 'http://localhost:8080/goals'; // Update this URL to match your backend

  constructor(private http: HttpClient) { }

  getGoals(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addGoal(goal: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, goal);
  }
}
