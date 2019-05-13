import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service'
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-company-delete',
  templateUrl: './company-delete.component.html',
  styleUrls: ['./company-delete.component.css']
})
export class CompanyDeleteComponent implements OnInit {

  constructor(private companyrService: CompanyService, private cookie: CookieService, private router: Router) { }

  delete(){
    if(this.cookie.check('type')){
      this.companyrService.deleteCompany(this.cookie.get('id')).subscribe(
        () => {
          this.router.navigate([{outlets: {primary: 'Home', sidebar: 'NotLoggedInMenu'}}]);
          this.cookie.deleteAll();
        }
      )
    }
  }

  ngOnInit() {
  }


}
