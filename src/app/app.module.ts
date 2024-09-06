import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AboutPageComponent } from './content/about-page/about-page.component';
import { AdminPageComponent } from './admin_panal/admin-page/admin-page.component';
import { UseraddComponent } from './admin_panal/useradd/useradd.component';
import { OrderDetailsComponent } from './admin_panal/order-details/order-details.component';
import { CategoriesComponent } from './admin_panal/categories/categories.component';
import { CoupondComponent } from './admin_panal/coupond/coupond.component';
import { ShippingComponent } from './admin_panal/shipping/shipping.component';
import { FeedbackComponent } from './admin_panal/feedback/feedback.component';
=======
<<<<<<< HEAD
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
=======
import { LoginandregistrationComponent } from './components/loginandregistration/loginandregistration.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
>>>>>>> eca698c6b8c8dc2a6eb108328aa5812f74ea9c1b
>>>>>>> 71dec2ea3717656a01cfd2802b378920226eb6a9

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AboutPageComponent,
    AdminPageComponent,
    UseraddComponent,
    OrderDetailsComponent,
    CategoriesComponent,
    CoupondComponent,
    ShippingComponent,
    FeedbackComponent
=======
<<<<<<< HEAD
=======
    LoginandregistrationComponent,
    PagenotfoundComponent,
>>>>>>> eca698c6b8c8dc2a6eb108328aa5812f74ea9c1b
    LandingpageComponent
>>>>>>> 71dec2ea3717656a01cfd2802b378920226eb6a9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
