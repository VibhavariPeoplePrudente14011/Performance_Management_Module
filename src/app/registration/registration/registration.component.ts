import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  roles: any[] = [];
  
  constructor(
  private fb: FormBuilder,
  private registrationService: RegistrationService,
  private router: Router) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      empId: ['', Validators.required ],
      phoneNumber: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      roleFid:['', Validators.required]
    });
   }

  ngOnInit(): void {
        this.getRoles()
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form Submitted!', this.registrationForm.value);
      const body = JSON.stringify(this.registrationForm.value);
      this.registrationService.register(body).subscribe(
        response=>{
          console.log(response)
          alert("Registerd sucessfully")

        // Navigate to the login page
          this.router.navigate(['/login']);
        },
        error=>{
          alert(error.error.message)
        }
      );
      
    }
  }

   getRoles() {
    this.registrationService.getRoles().subscribe(
      response=>{
        console.log(response)
        this.roles = response;
      },
      error=>{
        alert(error.error.message)
      }
    );
  }


}


