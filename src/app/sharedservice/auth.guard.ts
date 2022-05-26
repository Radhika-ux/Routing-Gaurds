import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private service: SharedService,private router:Router){}

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // if (this.service.email === "radhika" && this.service.password !=123) {
    //   console.log('gaurd is activated')

    //   return true;
    // }
    // else{
    //   console.log("denied")
    //   return false;
    // }


    if(this.service.isloggedIn()){
      console.log("accepted");
      this.router.navigate(['/contact'])
      return true;
    }
    else{
      console.log("denied")
      return false;
    }
  
  }
  
  }


