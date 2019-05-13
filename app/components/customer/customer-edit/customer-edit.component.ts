import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Customer } from 'src/app/models/customer';
import { NotifierService} from 'angular-notifier';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  private customer: Customer = new Customer();

  constructor(private cookie: CookieService, private noifyService: NotifierService, private customerService: CustomerService ) { }
   
  updateName(name: string){
    let temp = this.customer.customerName;
    this.customer.customerName = name;
    this.customerService.customerUpdate(this.customer).subscribe(
      () => {
        this.noifyService.notify('success',"Name successfully updated");
        this.cookie.set('name',name);
      },
      () => { 
        this.noifyService.notify('warning','Oops something went wrong!');
        this.customer.customerName = temp;
      }
    )
  }

  updatePassword(password: string){
    let temp = this.customer.customerPassword;
    this.customer.customerPassword = password;
    this.customerService.customerUpdate(this.customer).subscribe(
      () => {
        this.noifyService.notify('success',"Password successfully updated");
        this.cookie.set('password',password);
      },
      () => { 
        this.noifyService.notify('warning','Oops something went wrong!');
        this.customer.customerPassword = temp;
      }
    )
  }



  get() {
    this.customer.customerName;
    this.customerService.getCustomerByCustomerNameAndPassword(this.cookie.get('name'),this.cookie.get('password')).subscribe(
      customer => this.customer = customer,
      () => this.noifyService.notify('warning','Cant get data :( Please refresh page!')
    );
  }


  ngOnInit() {
    this.get();
  }

}
