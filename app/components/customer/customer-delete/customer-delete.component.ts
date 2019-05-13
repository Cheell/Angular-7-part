import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  constructor(private customerService: CustomerService, private cookie: CookieService, private router: Router) { }

  delete(){
    if(this.cookie.check('type')){
      this.customerService.deleteCustomer(this.cookie.get('id')).subscribe(
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
