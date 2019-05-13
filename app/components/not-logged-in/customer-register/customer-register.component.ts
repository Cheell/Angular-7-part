import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import {Title} from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NotifierService} from 'angular-notifier';


@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

  public constructor(private title: Title, private customerService: CustomerService, private router: Router, private notifier: NotifierService ) { }

  private customer: Customer = new Customer();

  ngOnInit() {
  }

  public send(): void {
    this.customerService.registerCustomer(this.customer).subscribe(
      () => {
        this.router.navigate(["CustomerRegistrationSuccsess"])
        this.notifier.notify('success',"You have successfully registrated as a verified CUSTOMER!")},
      () => this.notifier.notify('warning','Oops something went wrong!'))
  }


}