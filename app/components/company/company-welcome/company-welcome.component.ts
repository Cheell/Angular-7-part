import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { NotifierService } from 'angular-notifier';
import { CookieService } from 'ngx-cookie-service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-welcome',
  templateUrl: './company-welcome.component.html',
  styleUrls: ['./company-welcome.component.css']
})
export class CompanyWelcomeComponent implements OnInit {

  private company : Company = new Company();

  constructor(private companyService: CompanyService, private cookieService: CookieService, private noifyService: NotifierService) { };


  get() {
    this.companyService.getCompanyByCompanyNameAndPassword(this.cookieService.get('name'),this.cookieService.get('password')).subscribe(
      company => this.company = company,
      () => this.noifyService.notify('warning','Cant get data :( Please refresh page!')
    );
  }


  ngOnInit() {
    this.get();
  }

}
