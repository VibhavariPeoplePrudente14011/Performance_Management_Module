import { Component, OnInit } from '@angular/core';

interface Goal {
  igNumber: number;
  description: string;
  corporateBHAG: string;
  startDate: string;
  completionTargetDate: string;
  performanceYear: number;
  weightage: number;
}

@Component({
  selector: 'app-supervisor-goals-review',
  templateUrl: './supervisor-goals-review.component.html',
  styleUrls: ['./supervisor-goals-review.component.css']
})
export class SupervisorGoalsReviewComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  editDate: string = '';
  goals: Goal[] = [
    { igNumber: 1, description: '', corporateBHAG: '', startDate: '', completionTargetDate: '', performanceYear: this.currentYear, weightage: 0 },
    { igNumber: 2, description: '', corporateBHAG: '', startDate: '', completionTargetDate: '', performanceYear: this.currentYear, weightage: 0 }
    // Add more goals as needed
  ];
  performanceYears: number[] = [];
  corporateBHAGs: string[] = ['BHAG1', 'BHAG2', 'BHAG3']; // Example options for BHAGs

  ngOnInit(): void {
    // Populate performance years (e.g., last 5 years)
    for (let i = 0; i < 5; i++) {
      this.performanceYears.push(this.currentYear - i);
    }
  }

  updateEditDate(): void {
    this.editDate = new Date().toLocaleDateString();
  }
}
