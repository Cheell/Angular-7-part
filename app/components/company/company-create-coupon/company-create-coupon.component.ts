import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NotifierService} from 'angular-notifier';
import { CouponService } from 'src/app/services/coupon.service';
import { Coupon } from 'src/app/models/coupon';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-company-create-coupon',
  templateUrl: './company-create-coupon.component.html',
  styleUrls: ['./company-create-coupon.component.css']
})

export class CompanyCreateCouponComponent implements OnInit {
  
  myForm: FormGroup;

  types = ['Select Type...',	
  'CASTLE', 
	'DUNGEON',
	'FORTRESS',
	'INFERNO',
	'NECROPOLIS',
	'RAMPART',
	'STRONGHOLD',
	'TOWER'
];

  validDates: boolean = true;

  public constructor(private title: Title, private couponService: CouponService, private router: Router,
     private notifier: NotifierService, private cookie: CookieService, private formBuilder: FormBuilder) 
  {
    this.myForm = this.createFormGroup(this.formBuilder);
  }

    // convenience getter for easy access to form fields
  get f() { return this.myForm.controls; }

  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
        couponTitle: ['', Validators.required],  
        couponStartDate: ['', Validators.required],
        couponEndDate: '',
        couponAmmount: ['', Validators.required],
        couponMessage: '',
        couponPrice: ['', Validators.required],
        couponImage: 'default.jpg',
        couponType: this.types[0],
      })
  }

  checkDates() {
    if(parseInt(this.f.couponStartDate.value) > parseInt(this.f.couponEndDate.value)){
      this.validDates = false;
    } else {
      this.validDates = true;
    }
  }

  public send(): void {
    const coupon: Coupon = Object.assign({}, this.myForm.value);
    coupon.companyId = this.cookie.get('id');
    this.couponService.createCoupon(coupon).subscribe(
      () => {
        this.notifier.notify('success',"You have successfully created a Coupon!")},
      () => this.notifier.notify('warning','Oops something went wrong!'))
  }

  ngOnInit() {
  }  
}