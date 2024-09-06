import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './content/about-page/about-page.component';
import { AdminPageComponent } from './admin_panal/admin-page/admin-page.component';
import { UseraddComponent } from './admin_panal/useradd/useradd.component';
import { OrderDetailsComponent } from './admin_panal/order-details/order-details.component';
import { CategoriesComponent } from './admin_panal/categories/categories.component';
import { CoupondComponent } from './admin_panal/coupond/coupond.component';
import { ShippingComponent } from './admin_panal/shipping/shipping.component';
import { FeedbackComponent } from './admin_panal/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    AdminPageComponent,
    UseraddComponent,
    OrderDetailsComponent,
    CategoriesComponent,
    CoupondComponent,
    ShippingComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
