import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
