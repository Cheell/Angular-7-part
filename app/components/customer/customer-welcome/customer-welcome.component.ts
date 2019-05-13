import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { CookieService } from 'ngx-cookie-service';
import { NotifierService } from 'angular-notifier';
//import {} from 'src/assets/Img/'

@Component({
  selector: 'app-customer-welcome',
  templateUrl: './customer-welcome.component.html',
  styleUrls: ['./customer-welcome.component.css'
]})
export class CustomerWelcomeComponent implements OnInit {

  private customer : Customer = new Customer();

  constructor(private customerService: CustomerService, private cookieService: CookieService, private noifyService: NotifierService) { };


  get() {
    this.customerService.getCustomerByCustomerNameAndPassword(this.cookieService.get('name'),this.cookieService.get('password')).subscribe(
      customer => this.customer = customer,
      () => this.noifyService.notify('warning','Cant get data :( Please refresh page!')
    );
  }


  ngOnInit() {
    this.get();
  }

}
