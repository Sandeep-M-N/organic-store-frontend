import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

<<<<<<< HEAD
// admin coponents
import { AdminPageComponent } from './admin_panal/admin-page/admin-page.component';
import { CategoriesComponent } from './admin_panal/categories/categories.component';
import { CoupondComponent } from './admin_panal/coupond/coupond.component';
import { FeedbackComponent } from './admin_panal/feedback/feedback.component';
import { OrderDetailsComponent } from './admin_panal/order-details/order-details.component';
import { ShippingComponent } from './admin_panal/shipping/shipping.component';
import { UseraddComponent } from './admin_panal/useradd/useradd.component';




const routes: Routes = [

  // {
  //   path: 'dashboard', component: AdminDashboardComponent, children: [
  //     { path: 'users', component: UsersComponent },
  //     { path: 'edituser/:id', component: EdituserComponent },
  //     {path:'rooms',component:RoomListComponent},
  //     { path: 'rooms/add', component: AddRoomComponent },
  //     {path:'roomcard',component:RoomCardComponent},
  //     { path: 'feedback', component: FeedbackComponent },
  //     { path: '', redirectTo: 'users', pathMatch: 'full' }
  //   ]
  // }, 

  {
   path:"admindash", component: AdminPageComponent, children:[
    {path:"users", component:UseraddComponent},
    {path:"categories", component:CategoriesComponent},
    {path:"coupond", component:CoupondComponent},
    {path:"feedback", component:FeedbackComponent},
    {path:"order_details", component:OrderDetailsComponent},
    {path:"shipping", component:ShippingComponent},
   ]
  }


=======
import { LoginandregistrationComponent } from './components/loginandregistration/loginandregistration.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
const routes: Routes = [
  { path: '', component: LoginandregistrationComponent },
  { path: 'login', component: LoginandregistrationComponent },
  { path: 'dashboard', component: LandingpageComponent },
  { path: '**', component: PagenotfoundComponent },
>>>>>>> 71dec2ea3717656a01cfd2802b378920226eb6a9
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
