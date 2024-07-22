import { Component, OnInit } from '@angular/core';

interface TeamMember {
  srNo: string;
  name: string;
  designation: string;
  pms: string;
}

@Component({
  selector: 'app-supervisor-landing',
  templateUrl: './supervisor-landing-page.component.html',
  styleUrls: ['./supervisor-landing-page.component.css']
})
export class SupervisorLandingPageComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  performanceYears: number[] = [];
  selectedYear: number = this.currentYear;
  teamMembers: TeamMember[] = [
    { srNo: 'Emp1', name: 'Name1', designation: 'HR Consultant', pms: 'PMS1' },
    // Add more team members as needed
  ];

  ngOnInit(): void {
    // Populate performance years (e.g., last 5 years)
    for (let i = 0; i < 5; i++) {
      this.performanceYears.push(this.currentYear - i);
    }
  }
}
