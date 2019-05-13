import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CouponService } from 'src/app/services/coupon.service';
import { NotifierService } from 'angular-notifier';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { CouponPurchase } from 'src/app/models/coupon-purchase';

@Component({
  selector: 'app-customer-buy',
  templateUrl: './customer-buy.component.html',
  styleUrls: ['./customer-buy.component.css']
})
export class CustomerBuyComponent implements OnInit {

  constructor(private couponService: CouponService, private notify: NotifierService, private cookie: CookieService, 
    private router: Router, private aR: ActivatedRoute) { }

  coupon: Coupon = new Coupon();
  purchase: CouponPurchase = new CouponPurchase();

  amount: number = 1;
  price;

  costShow(){
    return this.amount*this.price;
  }

  sendNotif(){
    this.notify.notify('warning','Cant buy cooupon :(');
  }

  buyCoupon(amount){
    let purchase: CouponPurchase = new CouponPurchase();
    purchase.amount = amount;
    purchase.customerId = parseInt(this.cookie.get('id'));
    purchase.couponId = this.coupon.couponId;
    this.couponService.couponPurchase(purchase).subscribe(
      () => {
        this.notify.notify('success','Coupon successfully Purchased')
        this.router.navigate([{outlets: {primary: 'CouponsView', sidebar: 'CustomerMenu'}}]);
      },
      () => this.sendNotif()) 
  }

  ngOnInit() {
    let id: string;
    this.aR.params.subscribe(
      params => id = params['id'],
      () => this.sendNotif())
    this.couponService.getCouponByCouponId(id).subscribe(
      coupon =>{
        this.coupon = coupon;
        this.price = coupon.couponPrice;
      },
      () => this.sendNotif())
  }
    


}
