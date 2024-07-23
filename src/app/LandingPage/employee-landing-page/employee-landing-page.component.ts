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

  constructor(private fb: FormBuilder, private goalSettingService: GoalSettingService) {
    this.goalForm = this.fb.group({
      goals: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.addGoal(); // Add initial goal form group
    this.getbhag();
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
      userFid:localStorage.getItem('UserId')
    });
    this.goals.push(goalGroup);
  }

  removeGoal(index: number): void {
    this.goals.removeAt(index);
  }

  onSubmit(): void {
    if (this.goalForm.valid) {
      const goalData = this.goalForm.value.goals;
      goalData.forEach((goal: any) => {
        this.goalSettingService.addGoal(goal).subscribe(newGoal => {
          console.log('Goal added:', newGoal);
          this.submittedGoals.push(newGoal);
        });
      });
      // Reset the form
      this.goalForm.reset();
      this.goals.clear();
      this.addGoal(); // Add a new initial goal form group
    }
  }

  getbhag() {
    this.goalSettingService.getBhag().subscribe(
        response=>{
          console.log(response)
          this.bhags = response;
        },
        error=>{
          alert(error.error.message)
        }
      );
    }
}



