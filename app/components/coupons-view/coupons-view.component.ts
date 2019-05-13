import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CouponService } from 'src/app/services/coupon.service';
import { NotifierService } from 'angular-notifier';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-coupons-view',
  templateUrl: './coupons-view.component.html',
  styleUrls: ['./coupons-view.component.css']
})
export class CouponsViewComponent implements OnInit {

  message: string = "All Coupons";
  coupons: Coupon[];
  subMenu: String;
  type: String = 'CASTLE';
  view: String;

  views = [
    'All Coupons',
    'My Coupons',
    'By Coupon Title',
    'By Company Name',
  	'By Coupon Type',
  	'By Coupon Price'
  ]

  customerView = [
    'All Coupons',
    'By Coupon Title',
    'By Company Name',
  	'By Coupon Type',
  	'By Coupon Price'
  ]


  types = [	
    'CASTLE', 
    'DUNGEON',
    'FORTRESS',
    'INFERNO',
    'NECROPOLIS',
    'RAMPART',
    'STRONGHOLD',
    'TOWER'
  ];


  constructor(private couponService: CouponService, private notify: NotifierService, private cookie: CookieService, private router: Router) { }

  sendNotif(){
    this.notify.notify('warning','Cant show coupons :(');
  }

  showSubMenu(input){
    this.message = input;
    if (input == 'All Coupons') {
      this.subMenu = '';
      this.getAllCoupons();
    }
    if (input == 'My Coupons') {
      this.subMenu = 'my';
      this.getMyCoupons();
    }
    if (input == 'By Coupon Type') {
      this.subMenu = 'couponType'
    }
    if (input == 'By Company Name'){
      this.subMenu = 'companyName'
    }
    if (input == 'By Coupon Title'){
      this.subMenu = 'couponTitle'
    }
    if (input == 'By Coupon Price'){
      this.subMenu = 'couponPrice'
    }    
  }



  getMyCoupons(){
    this.couponService.getCouponsByCompanyId(this.cookie.get('id')).subscribe(
      coupons =>
        this.coupons = coupons,
      () => this.sendNotif()
    )
  }

  getAllCoupons(){
    this.couponService.getAllCoupons().subscribe(
      coupons => this.coupons = coupons,
        () => this.sendNotif()
    )
  }
  
  getCouponsByCouponTitle(title){
    if(title == ''){title = "Goblin"}
    this.couponService.getCouponByCouponTitle(title).subscribe(
      coupon =>{ 
        this.coupons = [];
        this.coupons[0] = coupon;
      },
      () => this.sendNotif()
    )
  }

  getCouponsByCompanyName(name){
    if(name == ''){name = " "}
    this.couponService.getCouponsByCompanyName(name).subscribe(
      coupons => 
        this.coupons = coupons,
        () => this.sendNotif()
    )
  }

  getCouponsByCouponType(type){
    this.couponService.getCouponsByCouponType(type).subscribe(
      coupons => 
        this.coupons = coupons,
        () => this.sendNotif()
    )
  }
  getCouponsByCouponPrice(from, to){
    this.couponService.getCouponsByCouponPrice(from,to).subscribe(
      coupons => 
        this.coupons = coupons,
        () => this.sendNotif()
    )
  }

  editCoupon(id){
    this.router.navigate([{outlets: {primary: 'EditCoupon/' + id, sidebar: 'CompanyMenu'}}]);
  }

  buyCoupon(id){
    this.router.navigate([{outlets: {primary: 'CustomerBuy/' + id, sidebar: 'CustomerMenu'}}]);
  }



  ngOnInit() {
    this.getAllCoupons();
    if(this.cookie.check('type') == false || this.cookie.get('type') == 'customer') {
      this.views = this.customerView;
    }
    this.view = this.views[0];
  }

}
