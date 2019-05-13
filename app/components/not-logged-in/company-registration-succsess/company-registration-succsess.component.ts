import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-registration-succsess',
  templateUrl: './company-registration-succsess.component.html',
  styleUrls: ['./company-registration-succsess.component.css']
})
export class CompanyRegistrationSuccsessComponent implements OnInit {

  constructor(private router: Router) { }

  btnClick(){
    this.router.navigate(["CompanyLogin"]);
  }

  ngOnInit() {
  }

}
