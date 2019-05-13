import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Page404Component } from './components/page404/page404.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CustomerLoginComponent } from './components/not-logged-in/customer-login/customer-login.component';
import { NotLoggedInMenuComponent } from './components/not-logged-in/not-logged-in-menu/not-logged-in-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerWelcomeComponent } from './components/customer/customer-welcome/customer-welcome.component';
import { CustomerMenuComponent } from './components/customer/customer-menu/customer-menu.component';
import { CustomerRegisterComponent } from './components/not-logged-in/customer-register/customer-register.component';
import { CustomerRegistrationSuccsessComponent } from './components/not-logged-in/customer-registration-succsess/customer-registration-succsess.component';
import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './components/not-logged-in/home/home.component';
import { CustomerGuardService as CustomerGuard} from './router-guards/customer-guard.service';
import { AuthService } from './services/auth.service';
import { Interceptor } from './Intereptor/interceptor.service';
import { MatDialogModule } from '@angular/material';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { CustomerPurchasesComponent } from './components/customer/customer-purchases/customer-purchases.component';
import { CustomerDeleteComponent } from './components/customer/customer-delete/customer-delete.component';
import { CustomerBuyComponent } from './components/customer/customer-buy/customer-buy.component';
import { CustomerEditComponent } from './components/customer/customer-edit/customer-edit.component';
import { CompanyWelcomeComponent } from './components/company/company-welcome/company-welcome.component';
import { CompanyRegisterComponent } from './components/not-logged-in/company-register/company-register.component';
import { CompanyRegistrationSuccsessComponent } from './components/not-logged-in/company-registration-succsess/company-registration-succsess.component';
import { CompanyLoginComponent } from './components/not-logged-in/company-login/company-login.component';
import { CompanyMenuComponent } from './components/company/company-menu/company-menu.component';
import { CompanyGuardService as CompanyGuard} from './router-guards/company-guard.service';
import { CompanyEditComponent } from './components/company/company-edit/company-edit.component';
import { CompanyCreateCouponComponent } from './components/company/company-create-coupon/company-create-coupon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CouponsViewComponent } from './components/coupons-view/coupons-view.component';
import { CompanyEditCouponComponent } from './components/company/company-edit-coupon/company-edit-coupon.component';
import { PurchasesComponent } from './components/customer/purchases/purchases.component';
import { CompanyDeleteComponent } from './components/company/company-delete/company-delete.component';

const routes: Routes = [
  { path: "CouponsView", component: CouponsViewComponent},

  { path: "EditCoupon/:id", component: CompanyEditCouponComponent, canActivate:[CompanyGuard]},
  { path: "CompanyWelcome", component: CompanyWelcomeComponent, canActivate:[CompanyGuard]},
  { path: "CompanyEdit", component: CompanyEditComponent, canActivate:[CompanyGuard]},
  { path: "CompanyCreateCoupon", component: CompanyCreateCouponComponent, canActivate:[CompanyGuard]},
  { path: "CompanyDelete", component: CompanyDeleteComponent, canActivate:[CompanyGuard]},

  {
    path: "CompanyMenu",
    component: CompanyMenuComponent,
    outlet: "sidebar",
    canActivate:[CompanyGuard]
  },



  { path: "Home", component: HomeComponent},
  { path: "CustomerRegister", component: CustomerRegisterComponent },
  { path: "CustomerLogin", component: CustomerLoginComponent },
  { path: "CustomerRegistrationSuccsess", component: CustomerRegistrationSuccsessComponent},
  { path: "CompanyRegister", component: CompanyRegisterComponent},
  { path: "CompanyRegistrationSuccsess", component: CompanyRegistrationSuccsessComponent},
  { path: "CompanyLogin", component: CompanyLoginComponent},
  
  { path: "", redirectTo: "Home", pathMatch: "full" }, // pathMatch = רק אם כל הנתיב שווה למחרוזת ריקה
  {
    path: "",
    component: NotLoggedInMenuComponent,
    outlet: "sidebar"
  },
  {
    path: "NotLoggedInMenu",
    component: NotLoggedInMenuComponent,
    outlet: "sidebar"
  },


  { path: "CustomerWelcome", component: CustomerWelcomeComponent, canActivate:[CustomerGuard]},
  { path: "CustomerPurchases", component: CustomerPurchasesComponent, canActivate:[CustomerGuard]},
  { path: "CustomerDelete", component: CustomerDeleteComponent, canActivate:[CustomerGuard]},
  { path: "CustomerBuy/:id", component: CustomerBuyComponent, canActivate:[CustomerGuard]},
  { path: "CustomerEdit", component: CustomerEditComponent, canActivate:[CustomerGuard]},
  {
    path: "CustomerMenu",
    component: CustomerMenuComponent,
    outlet: "sidebar",
    canActivate:[CustomerGuard]
  },


  { path: "**", component: Page404Component }
];

const notifierDefaultOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 10
    }
  },

  theme: 'material',
  behaviour: {
    autoHide: 10000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 3
  },

  animations: {
    enabled: true,
    show: {
      preset: 'fade',
      speed: 200,
      easing: 'ease-in-out'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    Page404Component,
    LayoutComponent,
    CustomerLoginComponent,
    NotLoggedInMenuComponent,
    CustomerWelcomeComponent,
    CustomerMenuComponent,
    CustomerRegisterComponent,
    CustomerRegistrationSuccsessComponent,
    HomeComponent,
    CustomerPurchasesComponent,
    CustomerDeleteComponent,
    CustomerBuyComponent,
    CustomerEditComponent,
    CompanyWelcomeComponent,
    CompanyRegisterComponent,
    CompanyRegistrationSuccsessComponent,
    CompanyLoginComponent,
    CompanyMenuComponent,
    CompanyEditComponent,
    CompanyCreateCouponComponent,
    CouponsViewComponent,
    CompanyEditCouponComponent,
    PurchasesComponent,
    CompanyDeleteComponent,
  ],

  imports: [
    ReactiveFormsModule,
    NotifierModule.withConfig(notifierDefaultOptions),
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule, // Routing Module import
    RouterModule.forRoot(routes) // Our routes import
  ],

  providers: [
    CookieService, CustomerGuard, CompanyGuard, AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
    bootstrap: [LayoutComponent]
})
export class AppModule { }