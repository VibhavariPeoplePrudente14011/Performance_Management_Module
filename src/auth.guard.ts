import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from './app/registration.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private registrationService:RegistrationService,private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('in canActivate')
    var isAuthenticated = this.registrationService.isAuthenticated(); 
    console.log("isAuthenticated"+isAuthenticated)
    if(!isAuthenticated){
      this.router.navigate(['/login'])
    }
    return isAuthenticated;
  }
  
}
