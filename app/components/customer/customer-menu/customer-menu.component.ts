import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-customer-menu',
  templateUrl: './customer-menu.component.html',
  styleUrls: ['./customer-menu.component.css']
})
export class CustomerMenuComponent implements OnInit {

  constructor(private router: Router) { }

  nav(dest: String){
    this.router.navigate([{outlets: {primary: dest, sidebar: 'CustomerMenu'}}]);
  }
  navHome(){
    this.router.navigate([{outlets: {primary: 'Home', sidebar: 'NotLoggedInMenu'}}]);
  }

  ngOnInit() {
  }

}