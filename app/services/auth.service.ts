import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CustomerService } from './customer.service';
import { CompanyService } from './company.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const link: string = 'http://localhost:8080/Coupon2_1/rest/';


const httpOptions =
{   
    headers:
        new HttpHeaders (
        {   
            "Content-Type": "application/json"
        }),
    withCredentials: true,
};

@Injectable()
export class AuthService {
  constructor(private cookieService: CookieService, private customerService: CustomerService, private companyService: CompanyService, private http: HttpClient)  {};

  
  public logout(): Observable<void>{
    return this.http.get<void>(link + "Login/Logout", httpOptions);
  }



  private isCookies(): boolean {
    if(this.cookieService.check('type') 
      && this.cookieService.check('name') 
      && this.cookieService.check('password')) {
        return true;
      }
    return false;
  }



  public isCustomer(): boolean {
    if(this.isCookies() && this.cookieService.get('type') === 'customer') { 
      return true;
    }
    else {
      return false;
    }
  } 

  public isCompany(): boolean {
    let is: boolean = false;
    if(this.isCookies() && this.cookieService.get('type') === 'company') 
    {
      return true;
    }
    else {
      return false;
    }
  }

  public isUser(): boolean {
    if(this.cookieService.get('type') === 'company' || this.cookieService.get('type') === 'customer') {
      return true;
    }
    else {
      return false;
    }
  }

}