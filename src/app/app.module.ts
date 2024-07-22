import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeeLandingPageComponent } from './LandingPage/employee-landing-page/employee-landing-page.component';
import { GoalSettingService } from './LandingPage/employee-landing-page/goal-setting.service';
import { SupervisorLandingPageComponent } from './LandingPage/supervisor-landing-page/supervisor-landing-page.component';
import { SupervisorGoalsReviewComponent } from './LandingPage/supervisor-goals-review/supervisor-goals-review.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    EmployeeLandingPageComponent,
    SupervisorLandingPageComponent,
    SupervisorGoalsReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    // MatSnackBarModule
  ],
  providers: [GoalSettingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
