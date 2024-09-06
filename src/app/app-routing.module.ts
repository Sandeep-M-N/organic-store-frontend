import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginandregistrationComponent } from './components/loginandregistration/loginandregistration.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
const routes: Routes = [
  { path: '', component: LoginandregistrationComponent },
  { path: 'login', component: LoginandregistrationComponent },
  { path: 'dashboard', component: LandingpageComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
