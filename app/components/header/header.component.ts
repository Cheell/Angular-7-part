import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {AuthService} from 'src/app/services/auth.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cookie: CookieService, private auth: AuthService, private router: Router) { }

  logout(){
    this.auth.logout().subscribe(
      () => {
        this.router.navigate([{outlets: {primary: 'Home', sidebar: 'NotLoggedInMenu'}}]);
        this.cookie.deleteAll();
    })
  }

  ngOnInit() {
  }

}
