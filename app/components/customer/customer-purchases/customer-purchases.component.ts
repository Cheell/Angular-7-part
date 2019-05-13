import { Component, OnInit } from '@angular/core';
import { CouponPurchase } from 'src/app/models/coupon-purchase';
import { CouponService } from 'src/app/services/coupon.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-customer-purchases',
  templateUrl: './customer-purchases.component.html',
  styleUrls: ['./customer-purchases.component.css']
})
export class CustomerPurchasesComponent implements OnInit {

  constructor(private couponService: CouponService, private cookie: CookieService, private router: Router) { }

  couponPurchases: CouponPurchase[];

  ngOnInit() {
    this.couponService.getMyPurchases(this.cookie.get('id')).subscribe(
      purchases => this.couponPurchases = purchases
    )
  }
  buyCoupon(id){
    this.router.navigate([{outlets: {primary: 'CustomerBuy/' + id, sidebar: 'CustomerMenu'}}]);
  }
}
