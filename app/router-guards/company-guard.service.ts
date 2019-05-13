import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class CompanyGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isCompany()) {
      this.router.navigate([{outlets: {primary: 'CompanyLogin', sidebar: 'NotLoggedInMenu'}}]);
      return false;
    }
    return true;
  }
}