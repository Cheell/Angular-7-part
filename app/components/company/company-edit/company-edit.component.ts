import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CookieService } from 'ngx-cookie-service';
import { NotifierService} from 'angular-notifier';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

  private company: Company = new Company();

  constructor(private cookie: CookieService, private noifyService: NotifierService, private companyService: CompanyService ) { }
   
  updateName(name: string){
    let temp = this.company.companyName;
    this.company.companyName = name;
    this.companyService.companyUpdate(this.company).subscribe(
      () => this.noifyService.notify('success',"Name successfully updated"),
      () => {
        this.noifyService.notify('warning','Oops something went wrong!')
        this.company.companyName = temp;
      }
    )
  }

  updatePassword(password: string){
    let temp = this.company.companyPassword;
    this.company.companyPassword = password;
    this.companyService.companyUpdate(this.company).subscribe(
      () => this.noifyService.notify('success',"Password successfully updated"),
      () => {
        this.noifyService.notify('warning','Oops something went wrong!')
        this.company.companyPassword = temp;
      }
    )
  }

  updateEmail(email: string){
    let temp = this.company.companyEmail;
    this.company.companyEmail = email;
    this.companyService.companyUpdate(this.company).subscribe(
      () => this.noifyService.notify('success',"Email successfully updated"),
      () => {
        this.noifyService.notify('warning','Oops something went wrong!')
        this.company.companyEmail = temp;
      }
    )
  }


  get() {
    this.companyService.getCompanyByCompanyNameAndPassword(this.cookie.get('name'),this.cookie.get('password')).subscribe(
      company => this.company = company,
      () => this.noifyService.notify('warning','Cant get data :( Please refresh page!')
    );
  }


  ngOnInit() {
    this.get();
  }

}
