import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Coupon } from '../models/coupon';
import { CouponPurchase } from '../models/coupon-purchase';


const link: string = 'http://localhost:8080/Coupon2_1/rest/Coupons/';


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

export class CouponService {
  constructor(private http: HttpClient) {} 

  public getAllCoupons(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(link, httpOptions);
  }

  public getCouponByCouponId(id: string): Observable<Coupon> {
    return this.http.get<Coupon>(link + id +"/byId", httpOptions);
  }
  public getCouponsByCompanyId(id: string): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(link + "byCompId?id="+ id, httpOptions);
  }
  public getCouponByCouponTitle(title: string): Observable<Coupon> {
    return this.http.get<Coupon>(link + title + "/byTitle", httpOptions);
  }
  public getCouponsByCompanyName(name: string): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(link + "byCompName?name="+ name, httpOptions);
  }
  public getCouponsByCouponType(type: string): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(link + "byType?type="+ type, httpOptions);
  }
  public getCouponsByCouponPrice(from, to): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(link + "byPrice?from="+ from + "&to=" + to, httpOptions);
  }

  public updateCoupon(coupon: Coupon):Observable<Coupon>{
    return this.http.put<Coupon>(link, coupon, httpOptions);
  }

  public createCoupon(coupon: Coupon): Observable<void> {
    return this.http.post<void>(link, coupon, httpOptions);
  }

  public couponPurchase(p: CouponPurchase): Observable<void>{
    return this.http.post<void>(link + "purchase", p, httpOptions);
  }

  getMyPurchases(id: string): Observable<CouponPurchase[]>{
    return this.http.get<CouponPurchase[]>(link + "purchasesByCustomerId?id="+ id, httpOptions);
  }

  public deleteCoupon(id: string): Observable<Coupon> {
    return this.http.delete<Coupon>(link + "Coupons/"+ id + "/byId", httpOptions);
  }



}