import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router, private cookie: CookieService) { }


  ngOnInit() {
    const secondsCounter = interval(60*1000);
    secondsCounter.subscribe(
      () => {
        if (!this.cookie.check('type'))
        {
          this.router.navigate([{outlets: {primary: 'Home', sidebar: 'NotLoggedInMenu'}}]);
        }
      })
  }

}
