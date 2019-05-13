import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CouponService } from 'src/app/services/coupon.service';
import { Coupon } from 'src/app/models/coupon';
import { NotifierService } from 'angular-notifier';
import { Router } from "@angular/router";


@Component({
  selector: 'app-company-edit-coupon',
  templateUrl: './company-edit-coupon.component.html',
  styleUrls: ['./company-edit-coupon.component.css']
})
export class CompanyEditCouponComponent implements OnInit {

  coupon: Coupon = new Coupon();

  type = this.coupon.couponType;

  msg(){
    alert(this.coupon.couponType);
  }

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


  constructor(private activatedRoute: ActivatedRoute, private couponService: CouponService, private notify: NotifierService, private router: Router) { }

  updateCouponType(type){
    this.coupon.couponType = type;
    this.couponService.updateCoupon(this.coupon).subscribe(
      () => this.notify.notify('success',"Type successfully updated"),
    )
  }
  updateCouponTitle(title){
    this.coupon.couponTitle = title;
    this.couponService.updateCoupon(this.coupon).subscribe(
      () => this.notify.notify('success',"Title successfully updated"),
    )
  }
  updateCouponStartDate(sDate){
    this.coupon.couponStartDate = sDate;
    this.couponService.updateCoupon(this.coupon).subscribe(
      () => this.notify.notify('success',"Start Date successfully updated"),
    )
  }

  updateCouponEndDate(eDate){
    this.coupon.couponEndDate = eDate;
    this.couponService.updateCoupon(this.coupon).subscribe(
      () => this.notify.notify('success',"End Date successfully updated"),
    )
  }

  updateCouponAmount(amount){
    this.coupon.couponAmmount = amount;
    this.couponService.updateCoupon(this.coupon).subscribe(
      () => this.notify.notify('success',"Amount successfully updated"),
    )
  }

  updateCouponPrice(price){
    this.coupon.couponPrice = price;
    this.couponService.updateCoupon(this.coupon).subscribe(
      () => this.notify.notify('success',"Price successfully updated"),
    )
  }

  updateCouponImage(img){
    this.coupon.couponImage = img;
    this.couponService.updateCoupon(this.coupon).subscribe(
      () => this.notify.notify('success',"Image successfully updated"),
    )
  }
  updateCouponMessage(msg){
    this.coupon.couponMessage = msg;
    this.couponService.updateCoupon(this.coupon).subscribe(
      () => this.notify.notify('success',"Message successfully updated"),
    )
  }

  deleteCoupon(id){
    this.couponService.deleteCoupon(id).subscribe(
      () => {
        this.notify.notify('success',"Coupon successfully DELETED")
        this.router.navigate([{outlets: {primary: 'CouponsView', sidebar: 'CompanyMenu'}}]);
      
      }
    )
  }

  sendNotif(){
    this.notify.notify('warning','Cant get cooupon :(');
  }

  ngOnInit() {
    let id: string;
    this.activatedRoute.params.subscribe(
      params => id = params['id'],
      () => this.sendNotif())

    this.couponService.getCouponByCouponId(id).subscribe(
      coupon =>{
        this.coupon = coupon;
        this.type = coupon.couponType;
      },
      () => this.sendNotif())
  }
    
}
