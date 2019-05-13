import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/customer';
import { UserLogin } from '../models/user-login';

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

export class CustomerService {
  constructor(private http: HttpClient) {} 

  public getCustomerByCustomerNameAndPassword(customerName: string, customerPassword: string): Observable<Customer> {
    return this.http.get<Customer>(link + "Customers/"+ customerName +"/"+ customerPassword +"/byNameAndPassword", httpOptions);
  }

  public registerCustomer(customer: Customer): Observable<void> {
    return this.http.post<void>(link + "Customers/", customer, httpOptions);
  }

  public customerLogin(userLogin: UserLogin): Observable<void> {
    return this.http.post<void>(link + "Login/asCustomer", userLogin, httpOptions);
  }

  public customerUpdate(customer: Customer): Observable<void> {
    return this.http.put<void>(link + "Customers", customer, httpOptions);
  }

  public deleteCustomer(id): Observable<void> {
    return this.http.delete<void>(link + "Customers/" + id, httpOptions);
  }
}