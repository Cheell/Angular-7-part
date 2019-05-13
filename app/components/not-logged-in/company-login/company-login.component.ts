import {Title} from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/user-login';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.css']
})

export class CompanyLoginComponent implements OnInit {

  private user: UserLogin = new UserLogin();

  public constructor(private title: Title, private companySerice: CompanyService, private router: Router, private notifier: NotifierService) { }

  public send(): void {
    this.companySerice.companyLogin(this.user).subscribe(
      () => { 
        this.router.navigate([{outlets: {primary: 'CompanyWelcome', sidebar: 'CompanyMenu'}}]);         
      },
      () => this.notifier.notify('warning','Oops something went wrong!'))
  }

  ngOnInit() {}

}
