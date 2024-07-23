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
  }

  get goals(): FormArray {
    return this.goalForm.get('goals') as FormArray;
  }

  

  addGoal(): void {
    const goalGroup = this.fb.group({
      igNumber: ['', Validators.required],
      goalSetting: ['', Validators.required],
      bhag_fid: ['', Validators.required],
      startDate: ['', Validators.required],
      completionTargetDate: ['', Validators.required],
      performanceYear: ['', Validators.required]
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
}


// import { getLocaleExtraDayPeriodRules } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { RegistrationService } from 'src/app/registration.service';

// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.css']
// })
// export class RegistrationComponent implements OnInit {

//   registrationForm: FormGroup;
//   roles: any[] = [];
  
//   constructor(
//   private fb: FormBuilder,
//   private registrationService: RegistrationService,
//   private router: Router) {
//     this.registrationForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//       empId: ['', Validators.required ],
//       phoneNumber: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
//       roleFid:['', Validators.required]
//     });
//    }

//   ngOnInit(): void {
//         this.getRoles()
//   }

//   onSubmit(): void {
//     if (this.registrationForm.valid) {
//       console.log('Form Submitted!', this.registrationForm.value);
//       const body = JSON.stringify(this.registrationForm.value);
//       this.registrationService.register(body).subscribe(
//         response=>{
//           console.log(response)
//           alert("Registerd sucessfully")

//         // Navigate to the login page
//           this.router.navigate(['/login']);
//         },
//         error=>{
//           alert(error.error.message)
//         }
//       );
      
//     }
//   }

//    getRoles() {
//     this.registrationService.getRoles().subscribe(
//       response=>{
//         console.log(response)
//         this.roles = response;
//       },
//       error=>{
//         alert(error.error.message)
//       }
//     );
//   }


// }


