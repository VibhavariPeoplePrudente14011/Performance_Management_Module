import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  navigateToEmployeeLanding() {
    this.router.navigate(['/employee-landing']);
  }

  navigateToSupervisorLanding(): void {
    this.router.navigate(['/supervisor-landing-page']);
  }

  navigateToSupervisorGoalsReview(): void {
    this.router.navigate(['/supervisor-goals-review']);
  }
}
