import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from 'src/auth.guard';
import { EmployeeLandingPageComponent } from './LandingPage/employee-landing-page/employee-landing-page.component'; 
import { SupervisorGoalsReviewComponent } from './LandingPage/supervisor-goals-review/supervisor-goals-review.component'; 
import { SupervisorLandingPageComponent } from './LandingPage/supervisor-landing-page/supervisor-landing-page.component'; 

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'employee-landing-page', component: EmployeeLandingPageComponent },
  { path: 'supervisor-goals-review', component: SupervisorGoalsReviewComponent},
  { path: 'supervisor-landing-page', component: SupervisorLandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
