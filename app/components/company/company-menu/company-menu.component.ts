import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-company-menu',
  templateUrl: './company-menu.component.html',
  styleUrls: ['./company-menu.component.css']
})



export class CompanyMenuComponent implements OnInit {


  constructor(private router: Router) { }

  nav(dest: String){
    this.router.navigate([{outlets: {primary: dest, sidebar: 'CompanyMenu'}}]);
  }
  navHome(){
    this.router.navigate([{outlets: {primary: 'Home', sidebar: 'NotLoggedInMenu'}}]);
  }


  ngOnInit() {
  }

}
