import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class CustomerGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isCustomer()) {
      this.router.navigate([{outlets: {primary: 'CustomerLogin', sidebar: 'NotLoggedInMenu'}}]);
      return false;
    }
    return true;
  }
}