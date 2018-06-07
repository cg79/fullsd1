/**
 * Created by claudiu on 12/19/2017.
 */
import { Injectable }     from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot}    from '@angular/router';
import { Router } from '@angular/router';
import {LocalStorageService} from "angular-2-local-storage";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private localStorageService: LocalStorageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.localStorageService.get('user')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url and return false
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }

}
