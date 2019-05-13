import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UserLogin } from '../models/user-login';
import { Company } from '../models/company';

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


@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  constructor(private http: HttpClient) {} 

  public getCompanyByCompanyNameAndPassword(companyName: string, companyPassword: string): Observable<Company> {
    return this.http.get<Company>(link + "Companies/"+ companyName +"/"+ companyPassword +"/byNameAndPassword", httpOptions);
  }

  public registerCompany(company: Company): Observable<void> {
    return this.http.post<void>(link+"Companies/", company, httpOptions);
  }

  public companyUpdate(company: Company): Observable<void> {
    return this.http.put<void>(link+"Companies", company, httpOptions);
  }

  public companyLogin(userLogin: UserLogin): Observable<void> {
    return this.http.post<void>(link + "Login/asCompany", userLogin, httpOptions);
  }

  public deleteCompany(id): Observable<void> {
    return this.http.delete<void>(link + "Companies/" + id, httpOptions);
  }


}