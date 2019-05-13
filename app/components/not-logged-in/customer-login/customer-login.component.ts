import {Title} from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/user-login';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { NotifierService} from 'angular-notifier';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})

export class CustomerLoginComponent implements OnInit {

  private user: UserLogin = new UserLogin();
  
  public constructor(private title: Title, private customerSerice: CustomerService, private router: Router, private notifier: NotifierService, private cookie: CookieService) { }

  public send(): void {
    this.customerSerice.customerLogin(this.user).subscribe(
      () => {
        this.router.navigate([{outlets: {primary: 'CustomerWelcome', sidebar: 'CustomerMenu'}}]);
        this.cookie.delete('email');
      },
      () => this.notifier.notify('warning','Oops something went wrong!'))
  }

  ngOnInit() {}

}