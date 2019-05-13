import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NotifierService} from 'angular-notifier';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-company-register',
  templateUrl: './company-register.component.html',
  styleUrls: ['./company-register.component.css']
})

export class CompanyRegisterComponent implements OnInit {

  public constructor(private title: Title, private companyServce: CompanyService, private router: Router, private notifier: NotifierService ) { }

  private company: Company = new Company();

  ngOnInit() {
  }

  public send(): void {
    this.companyServce.registerCompany(this.company).subscribe(
      () => {
        this.router.navigate(["CompanyRegistrationSuccsess"])
        this.notifier.notify('success',"You have successfully registrated as a verified Company!")},
      () => this.notifier.notify('warning','Oops something went wrong!'))
  }


}
