import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-not-logged-in-menu',
  templateUrl: './not-logged-in-menu.component.html',
  styleUrls: ['./not-logged-in-menu.component.css']
})
export class NotLoggedInMenuComponent implements OnInit {
  constructor(private router: Router, private cookie: CookieService) { }
  



  nav(destPrime: String, destSide?: String){
    if(destSide === undefined) {
      destSide = 'NotLoggedInMenu';
    }
    this.router.navigate([{outlets: {primary: destPrime, sidebar: destSide}}]);
  }
  

  ngOnInit() {
  }

}
