import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-registration-succsess',
  templateUrl: './customer-registration-succsess.component.html',
  styleUrls: ['./customer-registration-succsess.component.css']
})
export class CustomerRegistrationSuccsessComponent implements OnInit {

  constructor(private router: Router) { }

  btnClick(){
    this.router.navigate(["CustomerLogin"]);
  }

  ngOnInit() {
  }

}
