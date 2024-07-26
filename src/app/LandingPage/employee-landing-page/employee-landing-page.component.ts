import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { GoalSettingService } from './goal-setting.service';

@Component({
  selector: 'app-employee-landing-page',
  templateUrl: './employee-landing-page.component.html',
  styleUrls: ['./employee-landing-page.component.css']
})
export class EmployeeLandingPageComponent implements OnInit {

  goalForm: FormGroup;
  submittedGoals: any[] = [];
  bhags: any[] =[];
  goalAdded: boolean = false; // Added variable to track goal addition

  constructor(private fb: FormBuilder, private goalSettingService: GoalSettingService) {
    this.goalForm = this.fb.group({
      goals: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.addGoal(); // Add initial goal form group
    this.getbhag();
    this.getSubmittedGoals(); // Fetch submitted goals on initialization
  }

  get goals(): FormArray {
    return this.goalForm.get('goals') as FormArray;
  }

  addGoal(): void {
    const goalGroup = this.fb.group({
      igNumber: ['', Validators.required],
      goalSettingDescription: ['', Validators.required],
      bhagFid: ['', Validators.required],
      startDate: ['', Validators.required],
      completionTargetDate: ['', Validators.required],
      performanceYear: ['', Validators.required],
      userFid: localStorage.getItem('UserId')
    });
    this.goals.push(goalGroup);
  }
  removeGoal(index: number): void {
    this.goals.removeAt(index);
  }

  removeSubmittedGoal(index: number): void {
    const goalId = this.submittedGoals[index].id; // Assuming each goal has a unique ID
    this.goalSettingService.deleteGoal(goalId).subscribe(
      () => {
        this.submittedGoals.splice(index, 1);
        this.saveGoalsToLocalStorage(); // Save to local storage after removal
      },
      error => {
        console.error('Error deleting goal:', error); // Debug log for errors
      }
    );
  }

  onSubmit(): void {
    if (this.goalForm.valid) {
      const goalData = this.goalForm.value.goals;
      console.log('Submitting goals:', goalData); // Debug log
      goalData.forEach((goal: any) => {
        this.goalSettingService.addGoal(goal).subscribe(
          newGoal => {
            console.log('Goal added:', newGoal); // Debug log
            this.submittedGoals.push(newGoal);
            this.goalAdded = true; // Set goalAdded to true when a goal is added
            this.saveGoalsToLocalStorage(); // Save to local storage after adding a goal
            setTimeout(() => {
              this.goalAdded = false; // Hide the alert after 3 seconds
            }, 3000);
          },
          error => {
            console.error('Error adding goal:', error); // Debug log for errors
          }
        );
      });
      // Reset the form
      this.goalForm.reset();
      this.goals.clear();
      this.addGoal(); // Add a new initial goal form group
    }
  }

  getbhag() {
    this.goalSettingService.getBhag().subscribe(
      response => {
        console.log('BHAGs fetched:', response); // Debug log
        this.bhags = response;
      },
      error => {
        alert(error.error.message);
      }
    );
  }

  getSubmittedGoals(): void {
    const savedGoals = localStorage.getItem('submittedGoals');
    if (savedGoals) {
      this.submittedGoals = JSON.parse(savedGoals);
    } else {
      this.goalSettingService.getGoals().subscribe(
        goals => {
          console.log('Fetched submitted goals:', goals); // Debug log
          this.submittedGoals = goals;
          this.saveGoalsToLocalStorage(); // Save to local storage on first fetch
        },
        error => {
          console.error('Error fetching submitted goals:', error); // Debug log
        }
      );
    }
  }

  saveGoalsToLocalStorage(): void {
    localStorage.setItem('submittedGoals', JSON.stringify(this.submittedGoals));
  }
}
